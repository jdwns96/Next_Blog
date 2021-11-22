import { useRef } from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { bread, board, boardInner, boardHead, boardMain, boardSumnail, saveBtn } from "./style";

function Board(): JSX.Element {
  const editorRef = useRef<Editor>(null);

  const onSave = () => {
    const editorInstance = editorRef.current?.getInstance();
    const content_markdown = editorInstance?.getMarkdown();
    console.log(content_markdown);
    const content_html = editorInstance?.getHTML();
    console.log(content_html);
  };

  return (
    <>
      <div css={bread}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>포스트</span>
      </div>
      <div css={board}>
        <div css={boardInner}>
          <div css={boardHead}>
            <div className="board__tag">카테고리</div>
            <input className="board__title" placeholder="제목을 입력해주세요." />
          </div>
          <div css={boardMain}>
            <Editor
              initialValue=""
              // previewStyle="vertical"
              previewStyle="tab"
              height="600px"
              initialEditType="markdown"
              useCommandShortcut={true}
              ref={editorRef}
            />
          </div>
          <div css={boardSumnail}>썸네일 사진첨부</div>
          <button css={saveBtn} onClick={onSave}></button>
        </div>
      </div>
    </>
  );
}

export default Board;
