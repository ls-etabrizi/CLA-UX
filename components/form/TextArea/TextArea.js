import React, { useState } from 'react'

import styles from './TextArea.module.scss'

const TextArea = React.forwardRef(
  (
    {
      error,
      inline,
      id,
      name,
      value,
      label,
      hint,
      placeholder,
      maxLength,
      ariaDescribedBy,
      ariaInvalid,
      ariaRequired = false,
      readOnly = false,
      onFocus,
      onChange,
      onBlur
    },
    ref
  ) => {
    const [numberleft, setNumberLeft] = useState(maxLength)

    const keyPress = (event) => {
      if (!event) {
        return numberleft
      } else {
        return setNumberLeft(parseInt(maxLength, 10) - (event.target.value.length))
      }
    }

    return (
      <div
        className={`ls-form-group ${
          error ? `ls-form-group--error` : ''
        } ${inline === true ? `ls-!-margin-bottom-0` : ''}`}
      >
        {label && (
          <label className='ls-label' htmlFor={id}>
            {label}
          </label>
        )}
        {hint && <span className='ls-hint'>{hint}</span>}
        {error && (
          <span className='ls-error-message' id={`error-msg-for-${id}`}>
            <span className='ls-visually-hidden'>Error:</span> {error}
          </span>
        )}
        <textarea
          className={`${styles['ls-textarea']} ${
            error ? `ls-textarea--error` : ''
          } ${readOnly ? `input-readonly` : ''} ${
            inline ? `ls-!-margin-bottom-2` : ''
          }`}
          rows='5'
          ref={ref}
          id={id}
          onBlur={onBlur}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={keyPress}
          readOnly={readOnly}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          aria-required={ariaRequired}
          maxLength={maxLength}
        />
        {maxLength && (
          <span className='ls-hint'>
            You have up to {(keyPress())} characters remaining
          </span>
        )}
      </div>
    )
  }
)

export default TextArea
