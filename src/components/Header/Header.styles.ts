import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 48px;
  gap: 58px;
  align-items: center;

  .IconLogo {
    min-height: 31px;
    min-width: 128px;
    transition: all 0.5s;
    transform: scale(1);
  }

  @media screen and (max-width:560px) {
    .IconLogo {
      position: absolute;
      opacity: 0;
      transition: all 0.5s;
      transform: scale(0);
    }
  }
`;

export const HeaderButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: transparent;
  outline: none;
`;

export const ContainerUserProfile = styled.div`
  width: 100%;
  text-align: end;
`;

