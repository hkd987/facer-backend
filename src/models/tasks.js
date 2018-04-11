export default (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    todo: DataTypes.TEXT
  })

  Task.associate = function (models) {
    models.Task.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Task
}
