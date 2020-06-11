import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e3dcdc;
  header {
    h1 {
      font-family: "Roboto", sans-serif;
      font-size: 40px;
      color: white;
      margin-top: 20px;
      font-weight: 500;
    }
  }
  .Footer {
    max-width: 700px;
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .link-curso {
      width: 80px;
      height: 40px;
      background: radial-gradient(ellipse at center, #2a2325 0%, #201d1e 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      text-decoration: none;
    }
    .Images {
      img {
        width: 40px;
        height: 40px;
        margin: 0 1vw;
      }
    }
  }
`;

export const Cards = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-content: center;

  h6 {
    padding: 4px 4px 0 4px;
  }

  article {
    flex=1;
    background: #fff;
    border: 2px #878181;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 6px #ccc;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    font-size: 16px;
    color: #999;
    margin: 5px auto 5px;
    line-heigth: 24px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
export default Cards;

export const WatchVideo = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background: radial-gradient(ellipse at center, #2a2325 0%, #201d1e 100%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 5px 6px #ccc;
  border-radius: 5px;

  iframe {
    width: 600px;
    height: 80%;
    margin: 20px 0 20px 0;
    padding: 0 20px;
    border: none;
  }
`;
