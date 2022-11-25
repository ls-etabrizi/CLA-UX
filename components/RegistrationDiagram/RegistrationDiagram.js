import React from "react";
import { LsLink } from "../LsLink";

import styles from "./RegistrationDiagram.module.scss";

const RegistrationDiagram = () => {
  return (
    <div className={styles["diagram"]}>
      <ol>
        <li>
          <span className={styles["diagram__cph-icon"]}></span>
          <div className={styles["diagram__content"]}>
            <h3>Your CPH Number</h3>
            <p>
              You will need a CPH number and be registered as a keeper.{" "}
              <LsLink url="support">
                I don't know my CPH number or have been registered as a keeper?
              </LsLink>
            </p>
          </div>
        </li>
        <li>
          <span className={styles["diagram__email-phone-icon"]}></span>
          <div className={styles["diagram__content"]}>
            <h3>APHA Access Details</h3>
            <p>We will ask you to verify your details. This could be the email or the mobile number used, when you registered as a keeper with APHA. </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default RegistrationDiagram;
