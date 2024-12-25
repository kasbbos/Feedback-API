import User from './User';
import Feedback from './Feedback';
import Upvote from './Upvote';

User.hasMany(Feedback, { foreignKey: 'authorId', as: 'feedbacks' });
Feedback.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

Feedback.hasMany(Upvote, { foreignKey: 'feedbackId', as: 'upvotes' });
Upvote.belongsTo(Feedback, { foreignKey: 'feedbackId', as: 'feedback' });

Upvote.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Upvote, { foreignKey: 'userId', as: 'upvotes' });

export { User, Feedback, Upvote };