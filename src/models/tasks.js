export default (sequelize, DataTypes) => {
  var Task = sequelize.define('task', {
    title: DataTypes.STRING
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
