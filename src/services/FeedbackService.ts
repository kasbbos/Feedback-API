import { Feedback, Upvote } from '../models';

class FeedbackService {
  static async createFeedback(title: string, description: string, categoryId: number, statusId: number, authorId: number) {
    const feedback = await Feedback.create({ title, description, categoryId, statusId, authorId });
    return feedback;
  }  

  static async getFeedbackById(id: number) {
    const feedback = await Feedback.findByPk(id, { include: ['upvotes'] });
    if (!feedback) throw new Error('Отзыв не найден');
    return feedback;
  }

  static async updateFeedback(id: number, updates: Partial<Feedback>) {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) throw new Error('Отзыв не найден');
    await feedback.update(updates);
    return feedback;
  }

  static async deleteFeedback(id: number) {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) throw new Error('Отзыв не найден');
    await feedback.destroy();
    return feedback;
  }

  static async getAllFeedbacks(filter: any, sort: string, page: number, limit: number) {
    const offset = (page - 1) * limit;
  
    const feedbacks = await Feedback.findAll({
      where: filter,
      include: ['category', 'status', 'upvotes'],
      order: [[sort, 'DESC']],
      limit,
      offset,
    });
  
    return feedbacks;
  }
}

export default FeedbackService;
