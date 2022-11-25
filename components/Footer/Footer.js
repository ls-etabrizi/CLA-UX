import React from "react";


import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <div className={styles["footer__content-container"]}>
          <span>LIP Information</span>
          <nav
            aria-label="LIP Information"
            className="footer_nav__NFi4t"
            id="informationNav"
          >
            <ul>
              <li className="footer_info__enBSd">
                <a
                  href="https://livestockinformation.org.uk/privacy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy policy
                </a>
              </li>
              <li className="footer_info__enBSd">
                <a
                  href="https://livestockinformation.org.uk/cookies/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["footer__content-container"]}>
          <span>Contact us</span>
          <nav
            aria-label="Contact us"
            className="footer_nav__NFi4t"
            id="contactUsNav"
          >
            <ul>
              <li className="footer_info__enBSd">
                <a
                  href="https://livestockinformation.org.uk/lis-support/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Customer support / Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["footer__content-container"]}>
          <span>Defra guidance</span>
          <nav
            aria-label="Defra guidance"
            className="footer_nav__NFi4t"
            id="defraNav"
          >
            <ul>
              <li className="footer_info__enBSd">
                <a
                  href="https://www.gov.uk/guidance/sheep-and-goat-keepers-how-to-report-animal-movements"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Reporting sheep movements
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
