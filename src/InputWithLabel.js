import React, { useRef, useEffect } from 'react';

function InputWithLabel({ id, value, onInputChange, type = 'text', children }) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                autoFocus
            />
        </>
    );
};

export default InputWithLabel;




