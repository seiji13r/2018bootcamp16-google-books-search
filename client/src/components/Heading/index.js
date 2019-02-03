import React from "react";

function Heading() {
  
  const jumbotronStyle = {
    marginTop: "90px"
  }

  return (
    <div className="jumbotron" style={jumbotronStyle}>
      <h1 className="text-center">React Google Books Search</h1>
      <h6 className="text-right">Build with React</h6>
    </div>
  );
}

export default Heading;
