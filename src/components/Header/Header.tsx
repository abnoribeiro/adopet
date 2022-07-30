import React from "react";
import { IconHouse,IconMessage,IconUserDefault,IconLogo } from "../Icons";
import { Wrapper, HeaderButton,ContainerUserProfile } from "./Header.styles";

const Header: React.FC = ()=>{
  return (
    <Wrapper>
      <IconLogo className="IconLogo"/>
      <HeaderButton
        onClick={()=>{
          console.log("HeaderButton")
        }}
      >
        <IconHouse/>
      </HeaderButton>
      <HeaderButton
        onClick={()=>{
          console.log("HeaderButton")
        }}
      >
        <IconMessage/>
      </HeaderButton>
      {/* <ContainerUserProfile>
        <HeaderButton
          onClick={()=>{
            console.log("HeaderButton")
          }}
        >
          <IconUserDefault/>
        </HeaderButton>
      </ContainerUserProfile> */}
    </Wrapper>
  );
}

export default Header;
