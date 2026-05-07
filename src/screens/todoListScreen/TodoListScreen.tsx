import {
  WuButton,
  WuCard,
  WuCardHeader,
  WuHeading,
  WuModal,
  WuModalClose,
  WuModalContent,
  WuModalFooter,
  WuModalHeader,
  WuSubtext,
} from '@npm-questionpro/wick-ui-lib'
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from '@tanstack/react-query'
import React from 'react'
import {API_BASE_URL} from '../../constants/appConstants'
import type {IServerResponse} from '../../types/IServerResponse'
import {TodoListHeader} from '../components/TodoListHeader'
import type {ITodo} from '../types/ITodo'
import classes from './TodoListScreen.module.css'

const fetchTodos = async (): Promise<IServerResponse<ITodo[]>> => {
  return fetch(`${API_BASE_URL}todos`, {
    method: 'GET',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json() as Promise<IServerResponse<ITodo[]>>
  })
}

const useTodosApi = (): UseQueryResult<IServerResponse<ITodo[]>, Error> => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })
}

const createTodo = async (title: string): Promise<ITodo> => {
  return fetch(`${API_BASE_URL}todos`, {
    method: 'POST',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title}),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((res: IServerResponse<ITodo>) => res.data)
}

const updateTodo = async (id: number, title: string): Promise<ITodo> => {
  return fetch(`${API_BASE_URL}todos/${id}`, {
    method: 'PATCH',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title}),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((res: IServerResponse<ITodo>) => res.data)
}

const deleteTodo = async (id: number): Promise<void> => {
  return fetch(`${API_BASE_URL}todos/${id}`, {
    method: 'DELETE',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  })
}

export const TodoListScreen: React.FC = () => {
  const queryClient = useQueryClient()
  const {data} = useTodosApi()
  const todos: ITodo[] = data?.data ?? []

  const [title, setTitle] = React.useState<string>('')
  const [editingTodo, setEditingTodo] = React.useState<ITodo | null>(null)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [showError, setShowError] = React.useState<boolean>(false)

  const createMutation = useMutation({
    mutationFn: (newTitle: string) => createTodo(newTitle),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['todos']}),
  })

  const editMutation = useMutation({
    mutationFn: (vars: {id: number; title: string}) =>
      updateTodo(vars.id, vars.title),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['todos']}),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['todos']}),
  })

  const handleModalOpenChange = (open: boolean): void => {
    setIsOpen(open)
    if (!open) {
      setTitle('')
      setEditingTodo(null)
      setShowError(false)
    }
  }

  const handleOpenCreate = (): void => {
    setEditingTodo(null)
    setTitle('')
    setShowError(false)
    setIsOpen(true)
  }

  const handleOpenEdit = (todo: ITodo): void => {
    setEditingTodo(todo)
    setTitle(todo.title)
    setShowError(false)
    setIsOpen(true)
  }

  const handleSave = async (): Promise<void> => {
    if (title.trim() === '') {
      setShowError(true)
      return
    }
    setShowError(false)

    if (editingTodo) {
      await editMutation.mutateAsync({id: editingTodo.id, title})
    } else {
      await createMutation.mutateAsync(title)
    }

    setIsOpen(false)
    setTitle('')
    setEditingTodo(null)
  }

  const handleDelete = (id: number): void => {
    deleteMutation.mutate(id)
  }

  const handleUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
    if (e.target.value.trim() !== '') {
      setShowError(false)
    }
  }

  const isSaving = createMutation.isPending || editMutation.isPending

  return (
    <div>
      <TodoListHeader headerName="Todo List Application" />
      <h1>Welcome to the Todo App</h1>
      <WuButton onClick={handleOpenCreate}>Create Todo</WuButton>

      <div>
        {todos.map((todo, index) => (
          <WuCard key={todo.id} className="wu-m-2">
            <WuCardHeader>
              <WuHeading size="md">
                <span className="wu-flex wu-justify-start">
                  {index + 1} {todo.title}
                </span>
                <WuSubtext size="lg">
                  <span className="wu-flex wu-justify-end status">
                    {todo.status} | {todo.priority + ' Priority'}
                  </span>
                </WuSubtext>
              </WuHeading>
            </WuCardHeader>
            <div className="wu-p-4 wu-h-20 wu-flex wu-items-center wu-justify-center">
              {todo.description}
            </div>
            <WuCardHeader className="wu-flex wu-justify-start">
              <div className={classes['todo-actions']}>
                <WuButton
                  variant="outline"
                  onClick={() => handleOpenEdit(todo)}
                >
                  Edit
                </WuButton>
                <WuButton
                  color="error"
                  onClick={() => handleDelete(todo.id)}
                  disabled={deleteMutation.isPending}
                >
                  Delete
                </WuButton>
              </div>
            </WuCardHeader>
          </WuCard>
        ))}
      </div>
      <WuModal open={isOpen} onOpenChange={handleModalOpenChange}>
        <WuModalHeader>
          {editingTodo ? 'Edit Todo' : 'Create Todo'}
        </WuModalHeader>
        <WuModalContent>
          <input
            type="text"
            value={title}
            onChange={handleUpdateTitle}
            placeholder="Title"
            aria-label="title"
            required
          />
          {showError && <p style={{color: 'red'}}>Please enter a title</p>}
        </WuModalContent>
        <WuModalFooter>
          <WuModalClose>Close</WuModalClose>
          <WuButton loading={isSaving} disabled={isSaving} onClick={handleSave}>
            Save
          </WuButton>
        </WuModalFooter>
      </WuModal>
    </div>
  )
}
