export default {
  Mutation: {
    createTask: (parent, args, { models, token }) => {
      return models.Task.create({...args, userId: token.id})
    }
  }
}
