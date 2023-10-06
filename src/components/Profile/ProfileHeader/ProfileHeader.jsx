import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import defaultImg from "../../../assets/default.jpg";

function ProfileHeader(props) {
    return (
        <div css={S.HeaderContainer}>
            <div css={S.ProfileImgOutBox}>
                <div css={S.ProfileImgInBox}>
                    <img src={defaultImg} alt="" />
                </div>
            </div>
            <div>
                <div css={S.UserInfoTop}>
                    <div>username</div>
                    <button>프로필 편집</button>
                    <div>
                        <svg aria-label="옵션" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>옵션</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                </div>
                <div css={S.UserInfoMid}>
                    <div>게시물<span>15</span></div>
                    <div>팔로워<span>345</span></div>
                    <div>팔로우<span>421</span></div>
                </div>
                <pre>자기소개입니다.</pre>
            </div>
        </div>
    );
}

export default ProfileHeader;