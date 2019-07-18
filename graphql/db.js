export class Todo {
  constructor({id, text, description}) {
    this.id = id
    this.text = text
    this.description = description
    this.isCompleted = false
    this.isImportant = false
  }
}

export let todoList = [
  new Todo({ id: 1, text: 'first', description: '첫번째' })
]

export const getTodo = id => todoList.find(todo => todo.id === id)

export const makeTodoId = () => Math.max(...todoList.map(o => o.id), 1) + 1

export const addTodo = (text, description) => {
  const newTodo = new Todo({
    id: makeTodoId(),
    text,
    description
  })
  todoList.push(newTodo)
  return newTodo
}

export const updateTodo = ({ id, ...rest }) => {
  let targetTodo = null
  todoList = todoList.map(todo => {
    if (todo.id === id) {
      targetTodo = new Todo({ ...todo, rest })
      return targetTodo
    } else {
      return todo
    }
  })
  return targetTodo
}

export const deleteTodo = id => {
  const targetIndex = todoList.findIndex(todo => todo.id === id)
  return todoList.splice(targetIndex, 1)[0]
}