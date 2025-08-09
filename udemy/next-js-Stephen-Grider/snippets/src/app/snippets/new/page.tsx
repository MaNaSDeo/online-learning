import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // Needs to be a server action!
    "use server";

    // Check the user's inputs and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    console.log("createSnippet", { title, code });

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("snippet", snippet);

    // Redirect the user back to the root route(for now, will redirect them to some more specific route when we will build them.)
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <p className="font-bold m-3">Create a Snippet</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button className=" rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
