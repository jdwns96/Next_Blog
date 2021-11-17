import React, { useMemo } from "react";
import Image from "next/image";
// style
import { head, headInner, headLogo, headHamberger, headLoginBox, loginBtn, memberBtn } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// fluent
import { DefaultButton, PrimaryButton } from "@fluentui/react";

import logo from "@styles/assets/logo.png";

import { useDispatch } from "react-redux";
import { hambergerAction } from "@store/sidenav";

const Header = () => {
  const dispatch = useDispatch();

  const onHamberger = (e: React.MouseEvent) => {
    dispatch(hambergerAction());
  };

  return (
    <header css={head}>
      <div css={headInner}>
        <div css={headLogo}>
          <Image src={logo} alt="logo" />
        </div>
        <div css={headHamberger} onClick={onHamberger}>
          {useMemo(
            () => (
              <FontAwesomeIcon icon={faBars} />
            ),
            [],
          )}
        </div>
        <div css={headLoginBox}>
          <DefaultButton text="로그인" css={loginBtn} />
          <PrimaryButton text="회원가입" css={memberBtn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
