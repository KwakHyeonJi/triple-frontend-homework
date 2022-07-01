import styled from 'styled-components'

import ContentBox from './ContentBox'
import Logo from './Logo'

const BannerLayout = styled.article`
  display: flex;
  width: 1200px;
  height: 550px;
`

const BannerCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Banner = () => {
  return (
    <BannerLayout>
      <BannerCol>
        <Logo />
      </BannerCol>
      <BannerCol>
        <ContentBox />
      </BannerCol>
    </BannerLayout>
  )
}

export default Banner
