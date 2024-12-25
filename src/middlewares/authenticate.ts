import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Отсутствует маркер аутентификации' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    (req as any).user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Недействительный или истекший токен' });
  }
};

export default authenticate;