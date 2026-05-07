import type {ITodo} from '../../screens/types/ITodo'

const sampleTodos: ITodo[] = [
  {
    id: 1,
    title: 'react-assignment',
    description: 'complete react assignment',
    priority: 'high',
    status: 'active',
  },
  {
    id: 2,
    title: 'project onboarding',
    description: 'start project work',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 3,
    title: 'tanstack query',
    description: 'go through tanstack query documentation',
    priority: 'high',
    status: 'active',
  },
  {
    id: 4,
    title: 'zustand',
    description: 'go through zustand documentation',
    priority: 'high',
    status: 'active',
  },
  {
    id: 5,
    title: 'low priority todo',
    description: 'some low priority todo',
    priority: 'low',
    status: 'pending',
  },
]

let todos: ITodo[] = sampleTodos.map(t => ({...t}))

export const todoMockDb = {
  getTodos: (): ITodo[] => [...todos],

  createTodo: (title: string): ITodo => {
    const newTodo: ITodo = {
      id: Math.max(0, ...todos.map(t => t.id)) + 1,
      title,
      description: '',
      priority: 'low',
      status: 'active',
    }
    todos.push(newTodo)
    return {...newTodo}
  },

  updateTodo: (id: number, title: string): ITodo => {
    const todo = todos.find(t => t.id === id)
    if (!todo) throw new Error(`Todo ${id} not found`)
    todo.title = title
    return {...todo}
  },

  deleteTodo: (id: number): void => {
    todos = todos.filter(t => t.id !== id)
  },

  reset: (): void => {
    todos = sampleTodos.map(t => ({...t}))
  },
}
