import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models';

const JWT_SECRET = process.env.JWT_SECRET || '';

class UserService {
  static async createUser(email: string, password: string, avatar: string | null) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, avatar });
    return user;
  }

  static async authenticateUser(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Пользователь не найден');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Неверный пароль');

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default UserService;