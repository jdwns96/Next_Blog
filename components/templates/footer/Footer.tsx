import { useCallback } from "react";
// style
import { footer, footerInner, footerLicense, footerList, mode } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer css={footer}>
      <div css={footerInner}>
        <p css={footerLicense}>licenced by gle</p>
        <ul css={footerList}>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
        <div css={mode}>
          <span>dark mode</span>
          <button onClick={useCallback((e) => {}, [])}>mode</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
