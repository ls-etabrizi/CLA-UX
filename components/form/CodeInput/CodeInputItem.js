import { forwardRef } from "react";


import styles from './CodeInputItem.module.scss'

export const CodeInputItem = forwardRef(({ onChange, handleBack, max, indicator }, ref) => {
  const keyUp = (e) => {
    switch (e.keyCode) {
      case 8: {
        if (!e.target.value) handleBack(e.target.value);
        break;
      }
      case 9: {
        e.preventDefault();
        break;
      }
      default: {
        onChange(e.target.value);
      }
    }
  };

  return (
    <span>
    {(indicator === 3 || indicator === 6) && <span className="division">/</span>}
    <input className={`${styles['ls-input__item']}`} ref={ref} maxLength={max} type="tel" onKeyUp={keyUp}  />
    </span>
  );
});

