import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

function Results({ data }) {
  return (
    <div>
      {data.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
