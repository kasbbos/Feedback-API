import express from 'express';
import dotenv from 'dotenv';
import initDatabase from './config/initDatabase';
import userRoutes from './routes/userRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import voteRoutes from './routes/voteRoutes';
import categoryRoutes from './routes/categoryRoutes';
import statusRoutes from './routes/statusRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Роуты
app.use('/api/users', userRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/votes', voteRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/statuses', statusRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Сервер работает на порту ${PORT}`);
  await initDatabase();
});
