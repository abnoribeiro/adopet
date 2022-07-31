import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const ContainerSplashs = styled.div`
    .splash-top-image {
      position: absolute;
    }
    .splash-rigth-image {
      position: absolute;
      left: 0;
      top: 350px;

      width: 84.03px;
      height: 415px;
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    @media screen and (max-width: 720px) {
      .splash-top-image {
        max-width: 352.11px;
        max-height: 295px;
      }
    }
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  .logo {
    width: 142.54px;
    height: 34.36px;
    opacity: 1;
    transition: all 0.5s;
    transform: scale(1);

    path {
      fill:#3772FF;
    }

    @media screen and (min-width:720px) {

      opacity: 0;
      transition: all 0.5s;
      transform: scale(0);
    }
  }

  p {
    color: #3772FF;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    max-width: 248px;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 16px;

  }
`;

export const Subtitle = styled.h2`
  color: #FFFFFF;
  font-size: 26px;
  font-family: 'IBM Plex Sans';
  font-weight: 500;

  margin-top: 24px;
  margin-bottom: 16px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    @media screen and (max-width:720px) {
      width: 180px;
      height: 40px;
    }
  }
`;

export const ContainerFooter = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: -20px;

  .icon-cat-and-dog {
    margin-left: -30px;
  }
`;
