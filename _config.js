var config = {}

config.mongoURI = {
  production: 'mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/darkroom?retryWrites=true&w=majority',
  development: 'mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
  test: 'mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
