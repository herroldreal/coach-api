export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    mongo: process.env.DATABASE_URL,
  },
  facebook: {
    id: process.env.FACEBOOK_APP_ID,
    secret: process.env.FACEBOOK_APP_SECRET,
  },
});
