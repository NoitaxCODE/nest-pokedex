
export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongoDB: process.env.MONGODB,
  port: process.env.PORT || 3002,
  defaultLimit: Number( process.env.DEFAULT_LIMIT ) || 7,
});