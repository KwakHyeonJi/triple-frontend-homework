import styled, { keyframes } from 'styled-components'

import CountUpAnimation from './CountUpAnimation'

const textListAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const TextItem = styled.li`
  color: rgb(58, 58, 58);
  font-size: 36px;

  strong {
    font-weight: bold;
  }

  & + & {
    margin-top: 20px;
  }
`

const TextListLayout = styled.ul`
  animation: ${textListAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-delay: 0.1s;
  animation-fill-mode: both;
`

const TextList = () => {
  return (
    <TextListLayout>
      <TextItem>
        <strong>
          <CountUpAnimation>{700}</CountUpAnimation>만 명
        </strong>
        의 여행자
      </TextItem>
      <TextItem>
        <strong>
          <CountUpAnimation>{100}</CountUpAnimation>만 개
        </strong>
        의 여행 리뷰
      </TextItem>
      <TextItem>
        <strong>
          <CountUpAnimation>{470}</CountUpAnimation>만 개
        </strong>
        의 여행 일정
      </TextItem>
    </TextListLayout>
  )
}

export default TextList
