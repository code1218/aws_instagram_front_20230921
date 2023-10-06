import { css } from '@emotion/react';

export const BodyNav = css`
    display: flex;
    justify-content: center;
    border-top: 1px solid #dbdbdb;
    width: 100%;

    & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px;
        border-top: 1px solid #000;
        height: 53px;
        font-size: 12px;
        cursor: pointer;
    }
`;

export const FeedList = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & > div:nth-child(3n) {
        margin-right: 0px;
    }
`;

export const FeedBox = css`
    margin-right: 4px;
    margin-bottom: 4px;
    width: 215px;
    height: 215px;
    background-color: #eee;
    cursor: pointer;
`;