import styled from "styled-components";

const StyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 1px 1px 10px gray;
    border-radius: 2rem;
    padding: 5rem;
    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #211c46;
      text-transform: uppercase;
    }
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #9f7dfd;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #9f7dfd;
      color: #211c45;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #7b53e7;
      }
    }
    span {
      color: #7b53e7;
      a {
        color: #211c45;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default StyledComponent;