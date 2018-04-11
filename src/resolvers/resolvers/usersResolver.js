export default {
  Query: {
    getUser: (parent, {id}, info, {models}) => {
      modesl.User.findOne({where: { id }})
    },
    allUsers: () => {
      modesl.User.findAll()
    }
  },
  Mutation: {
    createUser: (parent, args, info, {models}) => {
      models.User.create(args)
    }
  }
}
