import { useCallback } from "react";
// fluentui
import { Toggle, TooltipHost, Icon } from "@fluentui/react";
// style
import { footer, footerInner, footerLicense, footerList, mode } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
// component
import Mode from "@components/mode/Mode";

const Footer = () => {
  return (
    <footer css={footer}>
      <div css={footerInner}>
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
        <p css={footerLicense}>lisenced by gle</p>
        <div css={mode}>
          <Toggle
            label={
              <div>
                <span>MODE</span>
                <TooltipHost content="Info tooltip">
                  <Icon iconName="Info" />
                </TooltipHost>
              </div>
            }
            inlineLabel
            onText="dark"
            offText="light"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
