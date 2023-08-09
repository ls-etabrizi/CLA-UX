import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from '.'

afterEach(cleanup)

describe('Modal Component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Modal open />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders some content, when passed as children', () => {
    const { getByText } = render(
      <Modal open>
        <p>Content</p>
      </Modal>
    )
    const content = getByText('Content')
    expect(content).toBeTruthy()
  })
  it('closes the modal when a function is passed to close it', () => {
    const { container } = render(
      <Modal
        open
        onClick={() => {
          document.querySelector('.modal').classList.remove('modal--open')
        }}
      />
    )
    const modal = container.querySelector('.modal')
    const modalClose = container.querySelector('.modal__close')
    fireEvent.click(modalClose)
    expect(modal).toHaveClass('modal')
  })
  it('fires an onClick function, when esc key is pressed', () => {
    const { container } = render(
      <Modal
        open
        onClick={() => {
          document.querySelector('.modal').classList.add('test')
        }}
      />
    )
    const modal = container.querySelector('.modal')
    fireEvent.keyDown(modal, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })
    expect(modal).toHaveClass('test')
  })
})
