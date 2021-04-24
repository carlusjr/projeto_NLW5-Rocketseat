import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository'

// Classe que implementa regras de negócios de usuários
class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {

    // Se o usuário (email) já existe, retorna os dados deste usuário    
    const userExists = await this.findByEmail(email);
    if (userExists) {
      return userExists;
    } else {
      // Se não existe usuário, cria um novo
      const users = this.usersRepository.create({ email });
      await this.usersRepository.save(users);
      return users;
    }
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }
}

export { UsersService }