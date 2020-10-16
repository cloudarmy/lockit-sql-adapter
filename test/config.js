exports.dbs = {
  postgres: {
    username: 'dbuser',
    password: null,
    database: 'cloudarmy_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    minifyAliases: true,
    logging: true,
    collection: 'Lockit'
  },
  /*mysql: {
    url: 'mysql://travis:@127.0.0.1:3306/',
    name: 'users',
    collection: 'my_user_table'
  },
  sqlite: {
    url: 'sqlite://',
    name: ':memory:',
    collection: 'my_user_table'
  }*/
};

exports.signup = {
  tokenExpiration: '1 day'
};
