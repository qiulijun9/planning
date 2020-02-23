import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.scss";

const Markdown = () => {
  const [editContent, setEditContent] = useState(""); // 编辑框内容
  return (
    <div className="markdown-wrapper">
      <header
        style={{ width: "100%", height: "50px", background: "#000" }}
      ></header>
      <div className="markdown-content">
        <textarea
          className="edit-box"
          placeholder="编辑文章..."
          value={editContent}
          onChange={e => {
            setEditContent(e.target.value);
          }}
        ></textarea>
        {/* <div className="divider" /> */}
        <div className="preview">
          <ReactMarkdown source={editContent} />
        </div>
      </div>
    </div>
  );
};
export default Markdown;
