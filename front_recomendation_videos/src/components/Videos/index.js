import React, { useState, useEffect } from "react";
import { Cards, WatchVideo, Container } from "./styles";
import GitIcon from "../../images/github_icon.png";
import LinkedinIcon from "../../images/linkedin_icon.png";

const Videos = ({ videos }) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    if (videos.length > 0) {
      setLink(videos[0].video_id);
    }
  }, [videos]);
  const scoreFormat = (score) => {
    score = 100 * score;
    return score.toFixed(2);
  };
  return (
    <Container>
      <WatchVideo>
        <header>
          <h1>Recomendador de vídeos.</h1>
        </header>
        <iframe title="current video player" src={link}></iframe>
      </WatchVideo>

      <Cards>
        {videos.map((video) => (
          <article key={video.video_id} onClick={() => setLink(video.video_id)}>
            <h6>{video.title}</h6>
            <p className="score">Score: {scoreFormat(video.score)}</p>
          </article>
        ))}
      </Cards>

      <div className="Footer">
        <a
          className="link-curso"
          href="https://www.mariofilho.com/curso/catfwotjtxt/"
        >
          Curso
        </a>
        <div className="Images">
          <a href="https://github.com/gabrielvss">
            <img src={GitIcon} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-vinicius-668a21176/">
            <img src={LinkedinIcon} alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Videos;
