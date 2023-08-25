import { faGit, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

const ProjectCard = (props) => {
  const { t } = useTranslation();

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
        <div className="col-md col-lg-8 p-4 px-5">
          <div className="row">
            <p className="fw-bold fs-5 text-primary">{t(`pages.projects.${props.slug}.title`)}</p>
          </div>

          <div className="row">
            {t(`pages.projects.${props.slug}.short_desc`).length > 0 ? (
              <strong className="mb-1">{t(`pages.projects.${props.slug}.short_desc`)}</strong>
            ) : (
              ""
            )}
          </div>

          <div className="row">
            {t(`pages.projects.${props.slug}.long_desc`).length > 0 ? (
              <p>{t(`pages.projects.${props.slug}.long_desc`)}</p>
            ) : (
              ""
            )}
          </div>

          <div className="row">
            <div className="col">
              {props.source_code_url ? (
                <a
                  href={props.source_code_url}
                  className="btn btn-dark mt-2 me-3"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {getGitIcon(props.source_code_url)}&nbsp;Source code
                </a>
              ) : (
                ""
              )}

              {props.live_url ? (
                <a href={props.live_url} className="btn btn-dark mt-2" target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon icon={faDesktop} />
                  &nbsp;Live demo
                </a>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              {props.tags.map((tag, index) => (
                <span key={index} className="badge rounded-pill bg-success p-2 me-2 mt-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md col-lg-4 d-flex align-items-center justify-content-center justify-content-md-end">
          {props.preview_image_url ? (
            <img src={props.preview_image_url} alt="preview image" className="img-fluid" />
          ) : (
            ""
          )}

          {props.preview_video_yt_url ? (
            <ReactPlayer url={props.preview_video_yt_url} loop={true} controls={true} pip={false} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
