import React from 'react'

import styles from './SelectMenu.module.scss'

const SelectMenu = ({id, name, label, value, items, onChange, error, required, hiddenLabel }) => {
  return (
    <div className={`ls-form-group ${error ? 'ls-form-group--error' : ''}`}>
      {error && (
        <span className='ls-error-message' id={`error-msg-for-${id}`}>
          <span className='ls-visually-hidden'>Error: </span> {error}
        </span>
      )}

      <div className='ls-form-group'>
        <label className={`ls-label ${hiddenLabel ? 'ls-visually-hidden' : ''}`} htmlFor={id}>{label}</label>
        <select required={required} className={styles['ls-select']} id={id} name={name} value={value} onChange={onChange}>
          {items.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </div>
    </div>
  )
}

export default SelectMenu
