import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { BackSplashFormTopImage, BackSplashFormRigthImage,IconLogo, } from '../../components/Icons'
import IconCatAndDog from '../../components/Icons/IconCatAndDog'
import { Wrapper, ContainerSplashs,MainContainer, Subtitle, ContainerButtons, ContainerFooter, Container } from './styles'


const Home: React.FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <ContainerSplashs>
        <BackSplashFormTopImage className='splash-top-image'/>
        <BackSplashFormRigthImage className='splash-rigth-image'/>
      </ContainerSplashs>
      <Container>
        <Header/>
        <MainContainer>
          <IconLogo className='logo'/>
          <Subtitle>Boas-vindas!</Subtitle>
          <p>
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
          </p>
          <ContainerButtons>
            <Button
              onClick={()=>{
                history.push('/login');
              }}
            >
              Já tenho conta
            </Button>
            <Button>
              Quero me cadastrar
            </Button>
          </ContainerButtons>
        </MainContainer>
      </Container>
      <ContainerFooter>
        <IconCatAndDog className='icon-cat-and-dog'/>
      </ContainerFooter>
      <Footer/>
    </Wrapper>
  )
}

export default Home
