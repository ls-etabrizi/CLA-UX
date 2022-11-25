import React from 'react'

import styles from './Radio.module.scss'

const Radio = ({ className, id, name, value, legend, items, onFocus, onChange, error }) => {
  return (
    <div className={`ls-form-group ${className || ``} ${error ? 'ls-form-group--error' : ''}`}>
      <fieldset className='ls-fieldset'>
        <legend className='ls-fieldset__legend ls-fieldset__legend--l'>
          <span className='ls-label'>{legend}</span>
        </legend>

        {error && (
          <span className='ls-error-message' id={`error-msg-for-${id}`}>
            <span className='ls-visually-hidden'>Error: </span> {error}
          </span>
        )}

        <div className={`${styles['ls-radio']}`} id={id}>
          {items.map(item => (
            <div className={`${styles['ls-radio__item']}`} key={item.value}>
              <input
                className={`${styles['ls-radio__input']}`}
                id={item.value}
                name={name}
                type='radio'
                value={item.value}
                onChange={onChange}
                onFocus={onFocus}
                disabled={item.disabled}
                checked={item.value === value}
              />
              <label className={`${styles['ls-radio__label']}`} htmlFor={item.value}>
                {item.label}
                {item.supportContent && <div className={`${styles['ls-radio__content']}`} >{ReactHtmlParser(item.supportContent)}</div>}
              </label>

            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default Radio
