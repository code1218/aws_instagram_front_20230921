import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const SLoader = css`
    display: inline-block;
    width: 80px;
    height: 80px;
    
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #dbdbdb;
        border-color: #dbdbdb transparent #dbdbdb transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`

function Loading(props) {
    return (
        <div css={SLayout}>
            <div css={SLoader}></div>
        </div>
    );
}

export default Loading;