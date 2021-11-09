import { head, headInner } from "./style";

const Header = () => {
  return (
    <header className="head" css={head}>
      <div className="head__inner" css={headInner}></div>
    </header>
  );
};

export default Header;
