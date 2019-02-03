import React from "react";

function BookComponent(props) {
  
  return (
    <div className="row border border-light p-2 m-3" id={props.item}>
      <div className="col-md-9">
        <div className="row d-none">Id: {props.id_googlebooks}</div>
        <div className="row"><strong className="text-info mr-1">Title:</strong> {props.title}</div>
        <div className="row"><strong className="text-info mr-1">Authors:</strong> {props.authors}</div>
        <div className="row"><strong className="text-info mr-1">Synopsis:</strong> {props.description}</div>
        <div><a className="btn btn-info mt-2" href={props.link} target="_blank" rel="noopener noreferrer">Check Details</a></div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={props.image} alt={props.image}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookComponent;
