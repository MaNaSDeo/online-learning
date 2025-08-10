import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log("home snippets", snippets);
  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return <div>{renderedSnippets}</div>;
}

/**
 * Target - Fetching data
 * - create a server compoenent -> a component that doesn't have 'use client' at the top, is automatically a server component.
 * - Mark the component as 'async'
 * - Make an HTTP request or directly access a database to get our data.
 * - Render our data correctly, or pass it to a child component
 */
