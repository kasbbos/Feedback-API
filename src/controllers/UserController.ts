import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, avatar } = req.body;
      const user = await UserService.createUser(email, password, avatar);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.authenticateUser(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }
}
export default UserController;
