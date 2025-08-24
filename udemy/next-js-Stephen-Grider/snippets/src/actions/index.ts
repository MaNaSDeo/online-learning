"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect(`/`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: "Title must be longer",
  };
  // // Check the user's inputs and make sure they are valid
  // const title = formData.get("title") as string;
  // const code = formData.get("code") as string;

  // console.log("createSnippet", { title, code });

  // // Create a new record in the database
  // const snippet = await db.snippet.create({
  //   data: {
  //     title,
  //     code,
  //   },
  // });

  // console.log("snippet", snippet);

  // // Redirect the user back to the root route(for now, will redirect them to some more specific route when we will build them.)
  // redirect("/");
}
