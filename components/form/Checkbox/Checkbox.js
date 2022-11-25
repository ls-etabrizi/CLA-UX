import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  className,
  id,
  name,
  legend,
  items,
  collection = [],
  onFocus,
  onChange,
  error,
  inline
}) => {

  const checkValue = (item) => {
    const checkedValue = collection.filter((colitem) => colitem === item)
    if (checkedValue.length > 0) {
      return true
    }
  }

  return (
    <div
      className={`ls-form-group ${className || ``} ${
        error ? 'ls-form-group--error' : ''
      }`}
    >
      <fieldset className='ls-fieldset'>
        {legend && (
          <legend className='ls-fieldset__legend ls-fieldset__legend--l'>
            <span className='ls-label'>{legend}</span>
          </legend>
        )}

        {error && (
          <span className='ls-error-message' id={`error-msg-for-${id}`}>
            <span className='ls-visually-hidden'>Error: </span> {error}
          </span>
        )}

        <div
          className={`${styles['ls-checkbox']} ${
            inline ? styles['ls-checkbox--inline'] : ''
          }`}
          id={id}
        >
          {items.map((item) => (
            <div className={`${styles['ls-checkbox__item']}`} key={item.value}>
              <input
                className={`${styles['ls-checkbox__input']}`}
                id={item.value}
                name={name}
                type='checkbox'
                value={item.value}
                onChange={onChange}
                onFocus={onFocus}
                disabled={item.disabled}
                defaultChecked={checkValue(item.value)}
              />
              <label
                className={`${styles['ls-checkbox__label']}`}
                htmlFor={item.value}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default Checkbox
