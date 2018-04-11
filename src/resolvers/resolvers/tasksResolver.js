export default {
  Query: {
    allTasks: (parent, args, { models, token }) => {
      return models.Task.findAll({ where: { userId: token.id } })
    },
    getTask: (parent, { id }, { models }) => {
      return models.Task.findOne({ where: { id: id } })
    }
  },
  Mutation: {
    createTask: (parent, args, { models, token }) => {
      return models.Task.create({...args, userId: token.id})
    }
  }
}
