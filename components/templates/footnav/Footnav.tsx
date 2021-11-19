import { useMemo } from "react";
import Link from "next/link";

//style
import { footnav, footnavInner, footnavList, link } from "./style";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faGift, faCommentAlt, faCog, faHome } from "@fortawesome/free-solid-svg-icons";

const Footnav = () => {
  return (
    <nav css={footnav}>
      <div css={footnavInner}>
        <ul css={footnavList}>
          <li>
            <Link href="/profile">
              <a css={link}>
                <span>
                  {useMemo(
                    () => (
                      <FontAwesomeIcon icon={faCrown} />
                    ),
                    [],
                  )}
                </span>
                <span>프로필</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a css={link}>
                <span>
                  {useMemo(
                    () => (
                      <FontAwesomeIcon icon={faGift} />
                    ),
                    [],
                  )}
                </span>
                <span>포트폴리오</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a css={link}>
                <span>
                  {useMemo(
                    () => (
                      <FontAwesomeIcon icon={faHome} />
                    ),
                    [],
                  )}
                </span>
                <span>홈</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/post">
              <a css={link}>
                <span>
                  {useMemo(
                    () => (
                      <FontAwesomeIcon icon={faCommentAlt} />
                    ),
                    [],
                  )}
                </span>
                <span>포스트</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/set">
              <a css={link}>
                <span>
                  {useMemo(
                    () => (
                      <FontAwesomeIcon icon={faCog} />
                    ),
                    [],
                  )}
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
