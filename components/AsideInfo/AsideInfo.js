import React from 'react'

import styles from './AsideInfo.module.scss'

const AsideInfo = () => {
  return (
    <aside className={styles["aside"]}>
              <h3 className={styles["aside__heading"]}>Guidance for using the service</h3>
              <ul>
                <li>
                  <a
                    href="https://livestockinformation.org.uk/create-an-account/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                    How to register an account
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/sheep-and-goat-keepers-register-your-holding-and-flock-or-herd"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                   
                    Register as a sheep and goat keeper
                  </a>
                </li>
              </ul>
              <h3 className={styles["aside__heading"]}>Find ways to contact us</h3>
              <ul>
                <li>
                  <a
                    class="landing_landingLink__Qcm4r"
                    href="https://livestockinformation.org.uk/contacts-support/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                    Contact us
                  </a>
                </li>
              </ul>
            </aside>
  )
}

export default AsideInfo
