import { todoList, getTodo, addTodo, updateTodo } from './db'

const resolvers = {
  Query: {
    todoList: () => todoList,
    todo: (_, { id }) => getTodo(id)
  },
  Mutation: {
    addTodo: (_, { text }) => addTodo(text),
    updateTodo: (_, args) => updateTodo(args)
  }
}

export default resolvers