"use client";

import React, { useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";

interface ISnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: ISnippetEditForm) => {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    console.log("here is the current model value:", value);
    setCode(value);
  }

  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        // options={{minimap: false}}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;
