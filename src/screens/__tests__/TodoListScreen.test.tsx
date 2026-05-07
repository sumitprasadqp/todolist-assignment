import {screen} from '@testing-library/dom'
import {App} from '../../App'
import {testUtil} from '../../tests/testUtil'

describe('TodoListScreen', () => {
  test('should render correctly', async () => {
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await screen.findByText(/welcome to the todo app/i)
  })
})
