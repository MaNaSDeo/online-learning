import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log("home snippets", snippets);
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}

/**
 * Target - Fetching data
 * - create a server compoenent -> a component that doesn't have 'use client' at the top, is automatically a server component.
 * - Mark the component as 'async'
 * - Make an HTTP request or directly access a database to get our data.
 * - Render our data correctly, or pass it to a child component
 */
