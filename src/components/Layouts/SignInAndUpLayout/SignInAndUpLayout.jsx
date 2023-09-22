import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function SignInAndUpLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                {children}
            </div>
        </div>
    );
}

export default SignInAndUpLayout;