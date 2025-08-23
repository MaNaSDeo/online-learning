"use client";

import React, { useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

interface ISnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: ISnippetEditForm) => {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    // "use server";
    // It is not allowed to define inline "use server" annotated Server Actions in Client Components.
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        // options={{minimap: false}}
        onChange={handleEditorChange}
        // className=""
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
