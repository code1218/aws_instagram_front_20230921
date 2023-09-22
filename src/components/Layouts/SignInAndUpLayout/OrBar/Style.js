import { css } from '@emotion/react';

export const SOrBar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 40px 14px;

    & > span {
        margin: 0px 18px;
        font-size: 12px;
        font-weight: 600;
        color: #777;
    }

    &::after, &::before {
        content: "";
        flex-grow: 1;
        border-bottom: 1px solid #dbdbdb;
    }
`;