"use client";
import React from "react";
import type { Snippet } from "@/generated/prisma";

interface ISnippetEditForm {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: ISnippetEditForm) => {
  return <div>Client component has a snippet with title {snippet.title}</div>;
};

export default SnippetEditForm;
