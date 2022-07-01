import styled from 'styled-components'

const AwardItemLayout = styled.li<{ imageUrl: string }>`
  display: flex;
  align-items: center;
  height: 55px;
  padding-left: 65px;
  background: url('${(props) => props.imageUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
`

interface AwardItemProps {
  imageUrl: string
  children: React.ReactNode
}

const AwardItem = ({ imageUrl, children }: AwardItemProps) => {
  return <AwardItemLayout imageUrl={imageUrl}>{children}</AwardItemLayout>
}

export default AwardItem
