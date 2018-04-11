export default (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    text: DataTypes.STRING
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
