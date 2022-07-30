import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #3772FF;
`;

export const ContainerSplashs = styled.div`
    .splash-top-image {
      position: absolute;
      /* width: 100%;
      max-width: 560.97px;
      max-height: 470px; */
    }
    .splash-rigth-image {
      position: absolute;
      right: 0;
      top: 25%;

      width: 84.03px;
      height: 415px;
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
    width: 187px !important;
    height: 48px;
  }

  p {
    color: #FFFFFF;
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
`;

export const ContainerFooter = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: -20px;

  .icon-cat-and-dog {
    margin-left: -30px;
  }
`;
