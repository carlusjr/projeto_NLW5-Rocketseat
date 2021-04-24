import { getCustomRepository, Repository } from 'typeorm'
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepository'

interface ISettingsCreate {
  chat: boolean,
  username: string
}

// Classe que implementa regras de negócios
class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {

    // Verifica se o usuário (username) já existe
    const userExists = await this.settingsRepository.findOne({ username });
    if (userExists) {
      throw new Error("Usuário já existe!");
    }

    const settings = this.settingsRepository.create({ chat, username });
    await this.settingsRepository.save(settings);
    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({ username });
    return settings;
  }
}

export { SettingsService }