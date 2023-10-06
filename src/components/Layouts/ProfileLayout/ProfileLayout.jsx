import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function ProfileLayout({ children }) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default ProfileLayout;