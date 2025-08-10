import React from "react";

const SnippetNotFound = () => {
  // We have this not-found.tsx indside our [id] so when ever we will visit some /snippets/1234 and if 1234 doesn't exit it will look for the nearest not-found,
  // If we will keep this 1 parent above other routes will be able to use it too.
  return (
    <div>
      <h1 className="text-xl bold">
        Sorry, but we couldn't find that particular snippet
      </h1>
    </div>
  );
};

export default SnippetNotFound;
