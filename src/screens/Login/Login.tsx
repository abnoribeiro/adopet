import React from 'react'
// formik:
import { useFormik } from 'formik';
// import { Button } from '../../components/Button'
import { Header} from '../../components'
import Logo from '../../assets/zoomLogo.png'

import {
  Container,
  ContainerButtons,
  ContainerFooter,
  ContainerSplashs,
  MainContainer,
  Subtitle,
  Wrapper,
} from './styles'
import { BackSplashFormRigthImage, BackSplashFormTopImage, IconLogo } from '../../components/Icons';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import IconCatAndDog from '../../components/Icons/IconCatAndDog';
import { Footer } from '../../components/Footer';

const Login: React.FC = () => {
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
          <p>
          Já tem conta? Faça seu login:
          </p>
          <ContainerButtons>
            <Button
              onClick={()=>{
                // history.push('/sign-up');
              }}
            >
              Entrar
            </Button>
          </ContainerButtons>
        </MainContainer>
      </Container>
      {/* <Footer/> */}
    </Wrapper>
  )
}

export default Login
