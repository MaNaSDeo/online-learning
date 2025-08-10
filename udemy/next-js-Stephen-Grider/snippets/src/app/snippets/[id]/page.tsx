import React, { FC } from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface ISnippetShowPage {
  params: {
    id: string;
  };
}

const Snippets: FC<ISnippetShowPage> = async (props) => {
  const { params } = props;

  // Artificial delay to show loading screen
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id, 10) },
  });

  if (!snippet) {
    return notFound();
  }
  const { id, title, code } = snippet;
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Snippets;
