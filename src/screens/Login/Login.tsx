import React from 'react'
// formik:
import { useFormik } from 'formik';
// import { Button } from '../../components/Button'
import { InputRounded } from '../../components'
import Logo from '../../assets/zoomLogo.png'

import {
  Wrapper,
  ContainerButton,
  ContainerMain,
  ContainerLogo,
  ContainerLogin,
  LogoProduct,
  PageTitle,
  PageDescription,
  SectionLogin
} from './styles'

const Login: React.FC = () => {
  const handleSubmit = ()=>{
    console.log("Teste")
  }
  return (
    <Wrapper>
      <ContainerMain>
        <ContainerLogo>
        </ContainerLogo>
        <ContainerLogin>
          <LogoProduct src={Logo} alt='logo zoom meeting'/>
          <SectionLogin method='PATH' onSubmit={handleSubmit}>
            <PageTitle>Bem vindo!</PageTitle>
            <PageDescription>
              Entre agora para participar de chats e reuniões, fazer chamadas e colaborar, tudo em um só lugar.
            </PageDescription>
            <InputRounded
              label='Endereço de e-mail'
              name='email'
              placeholder='nome@e-mail.com'
              value=''
              onFieldChange={(e)=>{
                console.log(e)
              }}
              error='Por favor, informe seu e-mail.'
              touched={false}
            />
            <InputRounded
              label='Senha'
              name='senha'
              value=''
              onFieldChange={()=>{
                console.log('')
              }}
              error='Por favor, informe sua senha.'
              placeholder='*******'
              touched={false}
            />
            </SectionLogin>
        </ContainerLogin>
      </ContainerMain>
    </Wrapper>
  )
}

export default Login
