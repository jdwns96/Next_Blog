import React from "react";
import { curtain, curtainOff, nav, navOff, closeBtn, userBox, listBox } from "./style";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import type { RootState } from "@store";
import { useSelector, useDispatch } from "react-redux";
import { hambergerAction } from "@store/sidenav/action";

const Sidenav = () => {
  const dispatch = useDispatch();
  const { hamberger } = useSelector((store: RootState) => store.sidenav);

  const onCurtain = (e: React.MouseEvent) => {
    dispatch(hambergerAction());
  };

  return (
    <>
      <div css={hamberger ? curtain : curtainOff} onClick={onCurtain}></div>
      <nav css={hamberger ? nav : navOff}>
        <div css={closeBtn}>
          <span onClick={onCurtain}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div css={userBox}>유저</div>
        <hr />
        <ul css={listBox}>
          <li>프로필</li>
          <li>포트폴리오</li>
          <li>홈</li>
          <li>포스트</li>
          <li>설정</li>
        </ul>
      </nav>
    </>
  );
};

export default Sidenav;
