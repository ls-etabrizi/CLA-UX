import { useRef, useState } from "react";
import { CodeInputItem } from "./CodeInputItem";

export const CodeInput = ({
  maxchar,
  length,
  onChange,
  setValid,
  setNonValid,
}) => {
  const [container, setContainer] = useState(new Array(length).fill(""));
  const items = useRef(new Array(length).fill(0));

  const handlePaste = (e) => {
    e.preventDefault();
    const str = e.clipboardData.getData("Text").split("");
    for (let i = 0; i < length; i++) {
      let strBox = str.slice(i * maxchar, (i + 1) * maxchar);
      if (strBox === "") {
        break;
      }
      items.current[i].value = strBox;
      if (i < length - 1 && strBox.length === maxchar) {
        items.current[i + 1].focus();
      }
    }
    setContainer(str.slice(0, 9));
  };

  const handleBack = (value, index) => {
    if (index > 0) {
      items.current[index - 1].focus();
    }
    let info = [...container];
    info[index] = value;
    setContainer(info);
    setValid(false);
    setNonValid(false);
  };


  const handleChange = (value, index) => {
    let info = [...container];
    info[index] = value;
    setContainer(info);
    if (value.length > 0 && value.length <= maxchar && index < length - 1) {
      items.current[index + 1].focus();
    }
    onChange(info.join(""));
  };

  return (
    <span onPaste={handlePaste}>
      {container.map((__, i) => (
        <CodeInputItem
          key={i}
          ref={(n) => (items.current[i] = n)}
          onChange={(v) => handleChange(v, i)}
          max={maxchar}
          indicator={i + 1}
          handleBack={(v) => handleBack(v, i)}
        />
      ))}
    </span>
  );
};

export default CodeInput;
