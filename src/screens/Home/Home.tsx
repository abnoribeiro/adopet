import React from 'react'
import { Header } from '../../components'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { BackSplashFormTopImage, BackSplashFormRigthImage,IconLogo } from '../../components/Icons'
import IconCatAndDog from '../../components/Icons/IconCatAndDog'

import { Wrapper, MainContainer, Subtitle } from './styles'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <BackSplashFormTopImage className='splash-top-image'/>
      <BackSplashFormRigthImage className='splash-rigth-image'/>
      <Header/>
      <MainContainer>
        <IconLogo className='logo'/>
        <Subtitle>Boas-vindas!</Subtitle>
        <p>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
        </p>
        <Button
          type='button'
          callbackFunc={()=>{
            console.log("Ja tenho conta")
          }}
        >
          Já tenho conta
        </Button>
        <Button
          type='button'
          callbackFunc={()=>{
            console.log("Quero me cadastrar")
          }}
        >
          Quero me cadastrar
        </Button>
      </MainContainer>
      <IconCatAndDog className='icon-cat-and-dog'/>
      <Footer/>
    </Wrapper>
  )
}

export default Home
