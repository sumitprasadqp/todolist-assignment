import {Navigate, Route, Routes} from 'react-router'
import {TodoListScreen} from './screens/todoListScreen/TodoListScreen'

export const AppRoutes: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="/todos" element={<TodoListScreen />} />

      <Route path="*" element={<Navigate to="/todos" replace />} />
    </Routes>
  )
}
