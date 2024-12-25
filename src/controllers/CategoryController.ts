import { Request, Response } from 'express';
import Category from '../models/Category';

class CategoryController {
  static async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default CategoryController;
