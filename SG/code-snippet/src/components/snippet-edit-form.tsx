"use client";

import { editSnippet } from "@/actions";
import Editor from "@monaco-editor/react";

import type { Snippet } from "@prisma/client";
import { use, useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" defaultValue={snippet.title} />
      </div>
      <div>
        <Editor
          height="30vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={snippet.code}
          onChange={handleEditorChange}
        />
      </div>
      <button type="submit" onClick={editSnippetAction}>
        Update
      </button>
    </div>
  );
}
