import bcrypt from 'bcryptjs'
import { tryLogin } from '../../auth'

export default {
  Query: {
    getUser: (parent, { id }, { models }) => {
      return models.User.findOne({ where: { id } })
    },
    allUsers: (parent, args, { models }) => {
      return models.User.findAll()
    }
  },
  Mutation: {
    login: (parent, { username, password }, { models, SECRET, SECRET2 }) => {
      return tryLogin(username, password, models, SECRET, SECRET2)
    },
    register: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12)
        await models.User.create({...otherArgs, password: hashedPassword})
        return true
      } catch (e) {
        return false
      }
    }
  }
}
