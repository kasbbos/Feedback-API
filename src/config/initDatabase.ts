import sequelize from './database';

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных подключена');
    await sequelize.sync({ force: true });
    console.log('Модели синхронизированы');
  } catch (error) {
    console.error('Не удалось инициализировать базу данных:', (error as Error).message);
    process.exit(1);
  }
};

export default initDatabase;
