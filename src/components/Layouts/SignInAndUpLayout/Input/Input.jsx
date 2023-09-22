import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function Input({ type, placeholder, name, changeAccount }) {
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        changeAccount(e.target.name, e.target.value);
    }

    useEffect(() => {
        setIsEmpty(!inputValue);
    }, [inputValue])

    return (
        <div css={S.SLayout}>
            <label css={S.SInput(isEmpty)}>
                <input type={type} name={name} onChange={handleInputChange} />
                <span>{placeholder}</span>
            </label>
            <div css={S.SStateBox}>

            </div>
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    name: ""
}

export default Input;