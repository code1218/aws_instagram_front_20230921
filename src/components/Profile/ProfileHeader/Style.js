import { css } from '@emotion/react';

export const HeaderContainer = css`
    display: flex;
    margin-bottom: 44px;
    width: 100%;
`;

export const ProfileImgOutBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    margin-right: 46px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    width: 166px;
    height: 166px;
`;

export const ProfileImgInBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const UserInfoTop = css`
    display: flex;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
`;

export const UserInfoMid = css`
    display: flex;
    margin: 20px 0px;
    & > div > span {
        margin-right: 40px;
        margin-left: 10px;
        font-weight: 600;
    }
`;
