import Sequelize from 'sequelize'
const sequelize = new Sequelize('database', 'username', 'password', {
  // sqlite! now!
  dialect: 'sqlite',
  omitNull: true,
  // the storage engine for sqlite
  // - default ':memory:'
  storage: './database.sqlite'
})

const models = {
  User: sequelize.import('./users.js'),
  Task: sequelize.import('./tasks.js')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
