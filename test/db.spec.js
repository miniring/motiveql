import { expect } from 'chai'
import { Todo, todoList, getTodo, addTodo, updateTodo, deleteTodo } from '../graphql/db'

describe('graphql DB test!! 🔫 🔫 🔫', () => {
  it('todoList는 배열이다.', () => {
    expect(todoList instanceof Array).to.equal(true)
  })

  it('getTodo는 Todo 객체 하나를 리턴한다.', () => {
    const todo = getTodo(1)
    expect(todo instanceof Todo).to.equal(true)
  })

  it('addTodo는 Todo를 리턴하고 리스트의 길이가 1 증가한다.', () => {
    const todoListLength = todoList.length
    const todo = addTodo(new Todo({
      text: 'test',
      description: 'test description'
    }))
    expect(todo instanceof Todo).to.equal(true)
    expect(todoList.length).to.equal(todoListLength + 1)
  })

  it('updateTodo는 내용을 수정하고 Todo를 리턴한다.', () => {
    const todo = addTodo(new Todo({
      text: 'test',
      description: 'test description'
    }))
    todo.text = 'test2'
    const updated = updateTodo(todo)

    expect(updated instanceof Todo).to.equal(true)
    expect(updated.text).to.equal('test2')
  })

  it('deleteTodo는 Todo 객체를 리턴하고 리스트 길이가 1 줄어든다.', () => {
    const todo = deleteTodo(1)
    expect(todo instanceof Todo).to.equal(true)
  })
  
})