import {HttpResponse, http} from 'msw'
import {userMockDb} from '../mockDbs/userMockDb'
import {API_BASE_URL} from '../../constants/appConstants'
import type {IUser} from '../../types/IUser'
import {todoMockDb} from '../mockDbs/todoMockDb'
import type {ITodo} from '../../screens/types/ITodo'

const sendResponse = <T>(res: T): HttpResponse<{data: T}> => {
  return HttpResponse.json({data: res})
}

export const mswDevHandlers = [
  http.get(`${API_BASE_URL}user`, () => {
    const user = userMockDb.getUser()
    return sendResponse<IUser>(user)
  }),
  http.get(`${API_BASE_URL}todos`, () => {
    const todos = todoMockDb.getTodos()
    return sendResponse<ITodo[]>(todos)
  }),
  http.post(`${API_BASE_URL}todos`, async ({request}) => {
    const body = (await request.json()) as {title: string}
    const todo = todoMockDb.createTodo(body.title)
    return sendResponse<ITodo>(todo)
  }),
  http.patch(`${API_BASE_URL}todos/:id`, async ({request, params}) => {
    const id = Number(params.id)
    const body = (await request.json()) as {title: string}
    const todo = todoMockDb.updateTodo(id, body.title)
    return sendResponse<ITodo>(todo)
  }),
  http.delete(`${API_BASE_URL}todos/:id`, ({params}) => {
    const id = Number(params.id)
    todoMockDb.deleteTodo(id)
    return sendResponse<null>(null)
  }),
]
