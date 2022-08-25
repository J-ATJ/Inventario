class User {
  constructor(user) {
    this.id = 0;
    this.name = user['name'];
    this.pass = user['pass'];
  }
};

module.exports = User;