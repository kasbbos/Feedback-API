import { Upvote } from '../models';

class VoteService {
  static async upvoteFeedback(feedbackId: number, userId: number) {
    const existingVote = await Upvote.findOne({ where: { feedbackId, userId } });
    if (existingVote) throw new Error('Пользователь уже проголосовал за этот отзыв');

    const upvote = await Upvote.create({ feedbackId, userId });
    return upvote;
  }
}

export default VoteService;