let ID = 1

export class Todo {
  constructor({text, description}) {
    this.id = ID++
    this.text = text
    this.description = description
    this.isCompleted = false
    this.isImportant = false
  }
}

export let todoList = [
  new Todo({ text: 'first', description: '첫번째' })
]

const getTodoIndex = id => todoList.findIndex(todo => todo.id === Number(id))
export const getTodo = id => todoList[getTodoIndex(id)]

export const addTodo = (text, description) => {
  const newTodo = new Todo({
    text,
    description
  })
  todoList.push(newTodo)
  return newTodo
}

export const updateTodo = ({ id, ...rest }) => {
  const index = getTodoIndex(id)
  const newTodo = new Todo({ ...todoList[index], ...rest })
  todoList.splice(index, 1, newTodo)

  return newTodo
}

export const deleteTodo = id => {
  const targetIndex = getTodoIndex(id)

  if (targetIndex == -1) {
    throw Error('삭제할 Todo가 없습니다.')
  }
  return todoList.splice(targetIndex, 1)[0]
}