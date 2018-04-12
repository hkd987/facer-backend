export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain letters and numbers'
        },
        len: {
          args: [6, 33],
          msg: 'The username needs to be between 6 and 33 characters long'
        }
      }
    },
    password: DataTypes.STRING
  })

  User.associate = (models) => {
    models.User.hasMany(models.Task)
  }

  return User
}
