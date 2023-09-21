import { css } from '@emotion/react';

export const SLayout = css`
    transition: all 0.1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 0px;
    border-radius: 10px;
    padding: 12px;
    width: 48px;
    height: 48px;

    font-size: 24px;
    cursor: pointer;
    &:active {
        background-color: #eee;
        font-size: 23px;
        color: #555;
    }
`;