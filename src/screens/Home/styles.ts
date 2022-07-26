import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #3772FF;

    .splash-top-image {
      position: absolute;
      width: 100%;
      max-width: 560.97px;
      max-height: 470px;
      z-index: -1;
    }
    .splash-rigth-image {
      position: absolute;
      right: 0;
      top: 25%;
      z-index: -1;

      width: 84.03px;
      height: 415px;
    }
    .icon-cat-and-dog {
      position: absolute;
      bottom: 8.5rem;
    }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: red 1px solid;

  svg {
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
  }
`;

export const Subtitle = styled.h2`
  color: #FFFFFF;
  font-size: 26px;
  font-family: 'IBM Plex Sans';
  font-weight: 500;
`;
