import React, { useEffect } from 'react';
import { useRef } from 'react';

const InputWithLabel = ({ id, value, type = "text", onInputChange, children, ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input
                autoFocus
                id={id}
                ref={inputRef}
                type={type}
                value={value}
                {...props} />
        </>
    )
};

export default InputWithLabel;





