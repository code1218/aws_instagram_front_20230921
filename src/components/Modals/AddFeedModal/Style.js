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
    border-left: 1px solid #dbdbdb;
    width: ${isShow ? "339" : "0"}px;
    opacity: ${isShow ? "1" : "0"};
    height: 396px;
    overflow: hidden;
`;

export const ProfileContainer = css`
    display: flex;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 60px;
`;

export const ProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const FeedContent = css`
    border: none;
    outline: none;
    padding: 0px 16px;
    width: 100%;
    height: 300px;
    resize: none;
    overflow-y: auto;
`;