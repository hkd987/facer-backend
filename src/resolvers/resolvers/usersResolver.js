import bcrypt from 'bcryptjs'
import { tryLogin } from '../../auth'
import { formatErrors } from '../../helperFunctions/formatErrors'

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
        const user = await models.User.create({...otherArgs, password: hashedPassword})
        return {
          ok: true,
          user
        }
      } catch (e) {
        return {
          ok: false,
          errors: formatErrors(e, models)
        }
      }
    }
  }
}
