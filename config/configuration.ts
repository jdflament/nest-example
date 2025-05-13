export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  orm: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    autoLoadEntities: true,
    migrationsRun: true,
    entities: ['dist/src/**/entities/*.entity.js'],
  },
});
