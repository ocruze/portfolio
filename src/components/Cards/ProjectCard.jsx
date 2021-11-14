import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="box-shadow rounded m-4 p-0">
      <div className="row">
        <div className="col-md p-3 px-4">
          <p className="fw-bold fs-5 text-primary">{props.title}</p>

          {props.short_desc ? <p>{props.short_desc}</p> : ""}

          {props.long_desc ? <p>{props.long_desc}</p> : ""}

          {props.source_code_url ? (
            <a href={props.source_code_url} className="btn btn-dark m-1">
              Source code
            </a>
          ) : (
            ""
          )}

          {props.live_url ? (
            <a href={props.live_url} className="btn btn-dark m-1">
              Live demo
            </a>
          ) : (
            ""
          )}
        </div>

        <div className="col-md">
          {props.preview_image_url ? (
            <img
              src={props.preview_image_url}
              alt=""
              srcset=""
              className="img-fluid"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
