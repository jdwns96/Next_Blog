import Link from "next/link";

//style
import { footnav, footnavInner, footnavList, link } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCopy, faCommentAlt, faCog } from "@fortawesome/free-solid-svg-icons";
// fluentui

const Footnav = () => {
  return (
    <nav css={footnav}>
      <div css={footnavInner}>
        <ul css={footnavList}>
          <li>
            <span>
              <FontAwesomeIcon icon={faUserTie} />
            </span>
            <span>소개</span>
          </li>
          <li>
            <Link href="/post">
              <a css={link}>
                <span>
                  <FontAwesomeIcon icon={faCopy} />
                </span>
                <span>포스트</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/board">
              <a css={link}>
                <span>
                  <FontAwesomeIcon icon={faCommentAlt} />
                </span>
                <span>게시판</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/set">
              <a css={link}>
                <span>
                  <FontAwesomeIcon icon={faCog} />
                </span>
                <span>설정</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footnav;
