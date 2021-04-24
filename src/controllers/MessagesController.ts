import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;
    const messagesService = new MessagesService();
    const messages = await messagesService.create({ admin_id, text, user_id })
    return response.json(messages);
  }
  async showByUser(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const messagesService = new MessagesService();
    const list = await messagesService.listByUser(user_id);
    return response.json(list);
  }
}

export { MessagesController }
