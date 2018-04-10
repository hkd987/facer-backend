export default (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })

  User.associate = (models) => {
    models.User.hasMany(models.Task)
  }

  return User
}
