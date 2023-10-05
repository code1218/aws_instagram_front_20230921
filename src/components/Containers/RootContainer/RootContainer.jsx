import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Sidebar from '../../Sidebar/Sidebar';
import { useRecoilState } from 'recoil';
import { showModalState } from '../../../store/atoms/ModalState';

function RootContainer({ children }) {
    const [ showModal, setShowModal ] = useRecoilState(showModalState);

    return (
        <div css={S.SContainer}>
            {showModal}
            <Sidebar />
            {children}
        </div>
    );
}

export default RootContainer;