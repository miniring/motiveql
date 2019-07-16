export let todoList = [
  {
    id: 1,
    text: 'first',
    isCompleted: false,
    isImportant: false
  }
]

export const getTodo = id => todoList.find(todo => todo.id === id)

export const addTodo = text => {
  const nextId = Math.max(...todoList.map(o => o.id), 1) + 1
  const newTodo = {
    id: nextId,
    text,
    isCompleted: false,
    isImportant: false
  }
  todoList.push(newTodo)
  return newTodo
}

export const updateTodo = ({ id, text, isCompleted, isImportant }) => {
  let targetTodo = null
  todoList = todoList.map(todo => {
    if (todo.id === id) {
      targetTodo = { ...todo, text, isCompleted, isImportant }
      return targetTodo
    } else {
      return todo
    }
  })
  return targetTodo
}