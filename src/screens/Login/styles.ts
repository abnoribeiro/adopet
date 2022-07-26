import styled from 'styled-components';

import * as InputRounded from '../../components/InputRounded/InputRounded.styles';
import * as Button from '../../components/Button/Button.styles';

import arrow from '../../assets/arrow.png'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    font-family: 'Comfortaa';
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const ContainerLogo = styled.div`
  width: 50%;
  background-color: #dbe0e8;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ContainerLogin = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const SectionLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 512px;
  min-height: 550px;
  align-items: center;
  justify-content: center;
  margin: auto;

  ${InputRounded.Wrapper} {
    width: 100%;
  }

  ${Button.default} {
    margin-top: 24px;
    width: 100%;
    button {
      width: 100%;
      font-family: 'Comfortaa';
      font-size: 14px;
      font-weight: 900;
    }
  }
`;

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 24px;

  margin-bottom: 32px;
`;

export const PageDescription = styled.p`
  max-width: 350px;
  font-weight: 700;
  font-size: 16px;

  text-align: center;
`;

export const LogoProduct = styled.img`
  max-width: 120px;
`;



export const ContainerButton = styled.div`
`;
