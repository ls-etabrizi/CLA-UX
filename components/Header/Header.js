import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { LsLink } from '../../components/LsLink'
import styles from './Header.module.scss'
import cx from 'classnames'



const Header = () => {
  const router = useRouter()
  const [navToggled, setNavToggled] = useState(false)

  const toggleNav = (e) => {
    e.preventDefault()
    setNavToggled(!navToggled)
  }

  return (
    <header className={styles['header']}>
      <div className={styles['header__content']}>
        <a href='#main-content' className={styles['header__skip-link']}>
          skip
        </a>
        <div className={styles['header__ls-logo']}>
          <a href='/' className={styles['header__ls-logo-link']}>
            <span className='vis-hide'>Portal </span>
          </a>
        </div>
        <div className='header__title'>
          <button
            type='button'
            className={
              styles['header__toggle-button'] +
              ' ' +
              (navToggled ? styles['header__close-button'] : '')
            }
            aria-controls='navigation'
            onClick={toggleNav}
            aria-label={'Menu'}
            aria-expanded={navToggled}
          >
            <span className='vis-hide'>text</span>
          </button>
        </div>
      </div>
      <nav
        className={cx(
          styles['header__navigation'] + ' ' + (navToggled ? styles['header__navigation--open'] : ''),
          (router.pathname === '/' ? 'hidden' : ''), 
          (router.pathname === '/success' ? 'hidden' : '')
        )}
      >
        <div className={styles['header__navigation-content']}>
        <ul
            id='navigation'
            className={cx(
              styles['header__navigation-list']
            )}
          >
  
                <li
                  className={`${styles['header__navigation-item']}`}
                >
                  <LsLink url="/"  className={styles['header__link']}>
                   Home
                  </LsLink>
             </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
