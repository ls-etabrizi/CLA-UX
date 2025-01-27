import React from 'react'
import styles from './Modal.module.scss'

// Modal component

const Modal = ({ open = false, children, onClick, small, large }) => {
  return (
    <>
      <div className={`${styles['modal-overlay']} ${open ? styles['modal-overlay--open'] : ``}`} />
      <div
        className={`${styles['modal']} ${open ? styles['modal--open'] : ``} ${small ? styles['modal--small'] : ``} ${large ? styles['modal--large'] : ``}`}
        onKeyDown={(e) => {
          if (e.keyCode === 27) {
            onClick()
          }
        }}
        onClick={onClick}
      >
        <div
          className={`${styles['modal__content']}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label='Close modal'
            onClick={onClick}
            className={`${styles['modal__close']}`}
          >
            &times;
          </button>
          <div>{children}</div>
        </div>
      </div>
      </>
  )
}

export default Modal
