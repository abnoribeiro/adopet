import styled from "styled-components";

interface PropsButton {
  sizeButton?: string;
}

export const ButtonInput = styled.button<PropsButton>`
  width: ${({sizeButton})=>sizeButton === 'defalt' ? '362px':'180px'};
  height: 48px;
  border-radius: 6px;
  background: #FC7071;
  color: #FFFFFF;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
