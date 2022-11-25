import React from 'react'
import Link from 'next/link'

import styles from './LsLink.module.scss'
import cx from 'classnames'

const LsLink = ({
  className,
  id,
  type = 'link',
  url,
  onClick,
  onSubmit,
  children,
  ariaLabel,
  btnStyle,
  target,
  disabled,
  styleDelete,
  styleClear,
  styleLink,
  styleSmall
}) => {
  return type === 'link' ? (
    <Link href={url || '#'}
        id={id}
        target={target}
        onClick={onClick}
        className={cx(
          styles['ls-link'],
          (className || ``),
          (styleDelete && `${styles['ls-btn--delete']}`) || ``,
          (styleClear && `${styles['ls-btn--clear']}`) || ``,
          (btnStyle && `${styles['ls-btn']}`) || ``
        )}
      >
        {children}
    </Link>
  ) : (
    <button
      className={cx(
        styles['ls-btn'],
        (className || ``),
        (styleDelete && `${styles['ls-btn--delete']}`) || ``,
        (styleClear && `${styles['ls-btn--clear']}`) || ``,
        (disabled && `${styles['ls-btn--disabled']}`) || ``,
        (styleLink && `${styles['ls-btn--link']}`) || ``,
        (styleSmall && `${styles['ls-btn--small']}`) || ``
      )}
      type={type}
      aria-label={ariaLabel}
      onSubmit={onSubmit}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  )
}

export default LsLink
