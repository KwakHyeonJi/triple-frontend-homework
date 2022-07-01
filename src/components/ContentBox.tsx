import styled from 'styled-components'

import TextList from './TextList'
import AwardList from './AwardList'

const ContentBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const ContentBox = () => {
  return (
    <ContentBoxLayout>
      <TextList />
      <AwardList />
    </ContentBoxLayout>
  )
}

export default ContentBox
