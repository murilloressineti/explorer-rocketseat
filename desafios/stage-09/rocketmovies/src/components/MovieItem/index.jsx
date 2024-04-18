import { FiPlus, FiX } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';

export function MovieItem({ isNew, value, onClick, onChange, maxLength = 50, ...rest }) {
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState('auto');
  
    useEffect(() => {
      if (inputRef.current) {
        setInputWidth(`${inputRef.current.scrollWidth / 16}rem`);
      }
    }, [value]);
  
    const buttonClass = isNew ? 'button-add' : 'button-delete';
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue.length <= maxLength) {
        setInputWidth(`${inputRef.current.scrollWidth / 16}rem`);
        onChange(e);
      }
    };

  return (
    <Container isNew={isNew} className={isNew ? 'new' : 'not-new'}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        style={{ width: inputWidth }}
        maxLength={maxLength}
        {...rest}
      />
      <button type="button" onClick={onClick} className={buttonClass}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}