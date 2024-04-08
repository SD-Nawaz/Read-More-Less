// Write your code here
import {useState} from 'react'

import {
  ReadMoreContainer,
  Button,
  Paragraph,
  BottomLine,
  Heading,
  Image,
} from './styledComponents'

const ReadMore = props => {
  const [toggle, setToogle] = useState(false)

  const {reactHooksDescription} = props
  const first170Characters = reactHooksDescription.slice(0, 170)

  const shortenedText = toggle ? reactHooksDescription.slice(170) : ''

  const buttonText = toggle ? 'Read Less' : 'Read More'

  const onClickReadMore = () => setToogle(prevState => !prevState)

  return (
    <ReadMoreContainer>
      <Heading>React Hooks</Heading>
      <BottomLine>Hooks are a new addition to React</BottomLine>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>
        {first170Characters}
        {shortenedText}
      </Paragraph>
      <Button type="button" onClick={onClickReadMore}>
        {buttonText}
      </Button>
    </ReadMoreContainer>
  )
}
export default ReadMore
