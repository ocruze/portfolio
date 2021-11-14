import { faGit, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = (props) => {
  const getGitIcon = (url) => {
    let icon = null;

    if (url.toLowerCase().includes("github")) {
      icon = <FontAwesomeIcon icon={faGithub} />;
    } else if (url.toLowerCase().includes("gitlab")) {
      icon = <FontAwesomeIcon icon={faGitlab} />;
    } else {
      icon = <FontAwesomeIcon icon={faGit} />;
    }

    return icon;
  };

  return (
    <div className="box-shadow rounded m-4 p-0">
      <div className="row">
        <div className="col-md-8 p-3 px-4">
          <div className="row">
            <p className="fw-bold fs-5 text-primary">{props.title}</p>
          </div>

          <div className="row">
            {props.short_desc ? <p>{props.short_desc}</p> : ""}
          </div>

          <div className="row">
            {props.long_desc ? <p>{props.long_desc}</p> : ""}
          </div>

          <div className="row">
            <div className="col">
              {props.source_code_url ? (
                <a
                  href={props.source_code_url}
                  className="btn btn-dark me-3"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {getGitIcon(props.source_code_url)}&nbsp;Source code
                </a>
              ) : (
                ""
              )}

              {props.live_url ? (
                <a
                  href={props.live_url}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faDesktop} />
                  &nbsp;Live demo
                </a>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row">
            <div className="col">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-success me-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center">
          {props.preview_image_url ? (
            <img src={props.preview_image_url} alt="" className="img-fluid" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
