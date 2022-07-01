import styled, { keyframes } from 'styled-components'

const logoAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const LogoLayout = styled.div`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background: url('triple2x.png');
  background-size: contain;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
  text-align: center;

  animation: ${logoAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
`

const Logo = () => {
  return <LogoLayout>2021년 12월 기준</LogoLayout>
}

export default Logo
