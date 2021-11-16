import { useMemo } from "react";
// style
import { head, headInner, headLogo, headHamberger, headLoginBox, memberBtn } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
// fluent
import { DefaultButton, PrimaryButton } from "@fluentui/react";

const Header = () => {
  return (
    <header css={head}>
      <div css={headInner}>
        <div css={headLogo}>icon</div>
        <div css={headHamberger}>
          {useMemo(
            () => (
              <FontAwesomeIcon icon={faHamburger} />
            ),
            [],
          )}
        </div>
        <div css={headLoginBox}>
          <DefaultButton text="로그인" />
          <PrimaryButton text="회원가입" css={memberBtn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
