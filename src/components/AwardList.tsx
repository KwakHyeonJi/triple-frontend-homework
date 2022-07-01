import styled, { keyframes } from 'styled-components'

import AwardItem from './AwardItem'

const awardListAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const AwardListLayout = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  animation: ${awardListAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`
const AwardList = () => {
  return (
    <AwardListLayout>
      <AwardItem imageUrl="play-store2x.png">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem imageUrl="badge-apple4x.png">
        2018 애플 스토어
        <br />
        오늘의 여행앱 선정
      </AwardItem>
    </AwardListLayout>
  )
}

export default AwardList
