const appUsername = process.env.MONGO_APP_USERNAME || 'the_username';
const appPassword = process.env.MONGO_APP_PASSWORD || 'the_password';

db.createUser({
  user: appUsername,
  pwd: appPassword,
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('todos');

db.todos.insert({ text: 'Write code', done: true });
db.todos.insert({ text: 'Learn about containers', done: false });