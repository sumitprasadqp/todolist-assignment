import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from '../../App'
import {testUtil} from '../../tests/testUtil'

describe('TodoListScreen', () => {
  test('should render the todos correctly', async () => {
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await screen.findByText(/react-assignment/i)
    await screen.findByText(/project onboarding/i)
  })

  test('should open the create modal when Create Todo is clicked', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await user.click(await screen.findByRole('button', {name: /create todo/i}))

    expect(screen.getByRole('textbox', {name: /title/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /title/i})).toHaveValue('')
  })

  test('should create a new todo and show it in the list', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await user.click(await screen.findByRole('button', {name: /create todo/i}))
    await user.type(
      screen.getByRole('textbox', {name: /title/i}),
      'My new todo',
    )
    await user.click(screen.getByRole('button', {name: /save/i}))

    await screen.findByText(/my new todo/i)
  })

  test('should show validation error when saving with empty title', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await user.click(await screen.findByRole('button', {name: /create todo/i}))
    await user.click(screen.getByRole('button', {name: /save/i}))

    expect(screen.getByText(/please enter a title/i)).toBeInTheDocument()
  })

  test('should clear validation error when user starts typing', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await user.click(await screen.findByRole('button', {name: /create todo/i}))
    await user.click(screen.getByRole('button', {name: /save/i}))
    expect(screen.getByText(/please enter a title/i)).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', {name: /title/i}), 'x')

    expect(screen.queryByText(/please enter a title/i)).not.toBeInTheDocument()
  })

  test('should open the edit modal pre-populated with the todo title', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    const editButtons = await screen.findAllByRole('button', {name: /edit/i})
    await user.click(editButtons[0])

    expect(screen.getByDisplayValue('react-assignment')).toBeInTheDocument()
  })

  test('should edit a todo title and update the list', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    const editButtons = await screen.findAllByRole('button', {name: /edit/i})
    await user.click(editButtons[0])

    const input = screen.getByRole('textbox', {name: /title/i})
    await user.clear(input)
    await user.type(input, 'updated title')
    await user.click(screen.getByRole('button', {name: /save/i}))

    await screen.findByText(/updated title/i)
    expect(screen.queryByText(/react-assignment/i)).not.toBeInTheDocument()
  })

  test('should delete a todo and remove it from the list', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    const deleteButtons = await screen.findAllByRole('button', {
      name: /delete/i,
    })
    await user.click(deleteButtons[0])

    await waitFor(() => {
      expect(screen.queryByText(/react-assignment/i)).not.toBeInTheDocument()
    })
    expect(screen.getByText(/project onboarding/i)).toBeInTheDocument()
  })

  test('should close the modal without saving when Close is clicked', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    await user.click(await screen.findByRole('button', {name: /create todo/i}))
    await user.type(
      screen.getByRole('textbox', {name: /title/i}),
      'unsaved todo',
    )
    await user.click(screen.getByRole('button', {name: /^Close$/}))

    expect(screen.queryByText(/unsaved todo/i)).not.toBeInTheDocument()
  })

  test('should have an empty input when opening create modal after closing edit modal', async () => {
    const user = userEvent.setup()
    await testUtil.renderWithRoute(<App />, {route: '/'})

    const editButtons = await screen.findAllByRole('button', {name: /edit/i})
    await user.click(editButtons[0])
    await user.click(screen.getByRole('button', {name: /^Close$/}))

    await user.click(screen.getByRole('button', {name: /create todo/i}))

    expect(screen.getByRole('textbox', {name: /title/i})).toHaveValue('')
  })
})
