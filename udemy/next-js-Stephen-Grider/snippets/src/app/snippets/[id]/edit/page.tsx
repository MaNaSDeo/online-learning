import React from "react";

interface IEditSnippet {
  params: {
    id: string;
  };
}

const EditSnippet = (props: IEditSnippet) => {
  const id = parseInt(props.params.id);
  return <div>Editing snippet with id {id}</div>;
};

export default EditSnippet;
