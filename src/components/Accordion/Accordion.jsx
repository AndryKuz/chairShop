import { useRef, useState } from "react";
import cl from "./Accordion.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = () => {
  const [valueInput, setValueInput] = useState('');
  const [isValueEmpty, setIsValueEmpty] = useState(null);
  const [isFocused, setIsFocused] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const itemRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = ({ target: { value } }) => {
    setValueInput(value);
  
  };

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(true);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (valueInput.trim() === '') {
      inputRef.current.classList.add(cl.emptyPlaceholder);
    } else {
      inputRef.current.classList.remove(cl.emptyPlaceholder);
    }
    setIsOpen(false);
  };
  return (
    <>
      <button className={cl.header} onClick={handleClick}>
        coupon cod
        <MdKeyboardArrowDown
          className={`${cl.arrowAccordion} ${
            isOpen ? cl.activeArrowAccordion : ""
          }`}
        />
      </button>
      <div
        className={cl.collapse}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className={cl.body} ref={itemRef}>
          <div>
            <input
              type="text"
              name="cupon"
              value={valueInput}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={`cupon cod*`}
              ref={inputRef}
            />
          </div>
          <div className={cl.butApply}>
            <button
              className={`button-dis ${cl.buttonActive}`}
              disabled={!valueInput}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
