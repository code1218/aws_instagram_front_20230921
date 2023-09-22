import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import logoImg from '../../../../assets/logo_main.png';

function Top({ children }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLogoBox}>
                <img css={S.SLogoImg} src={logoImg} alt="" />
            </div>
            {children}
        </div>
    );
}

export default Top;