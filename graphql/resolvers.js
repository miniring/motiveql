import { todoList, getTodo, addTodo, updateTodo, deleteTodo } from './db'

const resolvers = {
  Query: {
    todoList: () => todoList,
    todo: (_, { id }) => getTodo(id)
  },
  Mutation: {
    addTodo: (_, { text, description }) => addTodo(text, description),
    updateTodo: (_, args) => updateTodo(args),
    deleteTodo: (_, { id }) => deleteTodo(id)
  }
}

export default resolvers