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
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id, 10) },
  });

  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
};

export default Snippets;
