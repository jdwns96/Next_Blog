import React from "react";
import { curtain, curtainOff, nav, navOff } from "./style";

import type { RootState } from "@store";
import { useSelector, useDispatch } from "react-redux";
import { hambergerAction } from "@store/sidenav";

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
        <div>x</div>
        <div>유저</div>
        <div>테이블</div>
      </nav>
    </>
  );
};

export default Sidenav;
