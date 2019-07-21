let ID = 1

export class Todo {
  constructor({text = '', description = '', ordering, isCompleted = false}) {
    this.id = ID++
    this.text = text
    this.description = description
    this.completedAt = ''
    this.isCompleted = isCompleted
    this.ordering = ordering
  }
}

export let todoList = [
  new Todo({ text: 'flutter 개발 환경 만들기', description: '사이트 조사', ordering: 1 }),
  new Todo({ text: '장보기', description: '홈마트', ordering: 2 }),
  new Todo({ text: '세차하기', description: '동네 세차장에 가기', ordering: 3 }),
  new Todo({ text: '운동하기', description: '팔굽혀펴기 50번', ordering: 4 }),
]

const getTodoIndex = id => todoList.findIndex(todo => todo.id === Number(id))
export const getTodo = id => todoList[getTodoIndex(id)]

export const addTodo = (text, description='', ordering) => {
  const newTodo = new Todo({
    text,
    description,
    ordering
  })
  todoList.push(newTodo)
  return newTodo
}

export const updateTodo = ({ id, text, description, isCompleted, ordering, completedAt }) => {
  const todo = getTodo(id)
  todo.text = text
  todo.description = description
  todo.isCompleted = isCompleted
  todo.ordering = ordering
  todo.completedAt = completedAt
  return todo
}

export const deleteTodo = id => {
  const targetIndex = getTodoIndex(id)

  if (targetIndex == -1) {
    throw Error('삭제할 Todo가 없습니다.')
  }
  return todoList.splice(targetIndex, 1)[0]
}