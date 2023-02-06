import React, { useRef, useEffect } from 'react';

function InputWithLabel({ id, value, onInputChange, handleTitleChange, type = 'text', label }) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
            />
        </>
    );
}

export default InputWithLabel;




