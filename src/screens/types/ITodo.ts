export interface ITodo {
  id: number
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'active' | 'completed'
}
