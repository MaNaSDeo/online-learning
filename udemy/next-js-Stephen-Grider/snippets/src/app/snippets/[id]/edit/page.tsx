import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface IEditSnippet {
  params: {
    id: string;
  };
}

const EditSnippet = async (props: IEditSnippet) => {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
