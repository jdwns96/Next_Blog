//style
import { footnav, footnavInner, footnavList } from "./style";
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
            <span>
              <FontAwesomeIcon icon={faCopy} />
            </span>
            <span>포스트</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCommentAlt} />
            </span>
            <span>게시판</span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCog} />
            </span>
            <span>설정</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footnav;
