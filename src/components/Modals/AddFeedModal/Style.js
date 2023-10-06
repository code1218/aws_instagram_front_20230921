import { css } from '@emotion/react';

export const SelectFeedImgContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 396px;
    height: 396px;
`;

export const FileInput = css`
    display: none;
`;

export const ReviewContainer = css`
    width: 396px;
    height: 396px;
`;

export const ImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 396px;
    height: 366px;
    & > img {
        width: 100%;
    }
`;

export const FeedDetailContainer = (isShow) => css`
    transition: all 1s ease;
    width: ${isShow ? "339" : "0"}px;
    opacity: ${isShow ? "1" : "0"};
    height: 396px;
    overflow: hidden;
    background-color: black;
`;