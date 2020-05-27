module.exports = {
  development: {
    client: 'pg',
    connection: "postgresql:///kindcardobjection"
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: process.env.PRODUCTIONUSER,
      password: process.env.PRODUCTIONPASS,
      database: process.env.PRODUCTIONDB,
    }
  },
};
