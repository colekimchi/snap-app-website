import React from 'react'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import CPAB from '../../images/codepathandroidbanner.png'
import Icon3 from '../../images/icon3.svg'
import Flixter from '../../images/Flixter_v2_GIF.gif'
import SimpleTweet1 from '../../images/SimpleTweet_v1.gif'
import SimpleTweet2 from '../../images/SimpleTweet_v2.gif'
import{
    ShowcaseContainer,
    ShowcaseWrapper,
    ShowcaseH1,
    ShowcaseH2,
    ShowcaseCard,
    ShowcaseIcon,
    ShowcaseP,
    ShowcaseImage,
    ImageWrapper
} from './ShowcaseElements'

const Showcase = () => {
  return (
    <ShowcaseContainer id="projects">
      <ShowcaseH1> Projects / Experience </ShowcaseH1>
      <ShowcaseWrapper>
        <ShowcaseCard>
          <ShowcaseIcon src={CPAB}/>
          <ShowcaseH2>Codepath Android Remote</ShowcaseH2>
          <ShowcaseP>6-week remote intensive course covering multiple major aspects of android development. We built rudimental working versions of Twitter, Instagram, and a Movie rating app.</ShowcaseP>
        </ShowcaseCard>
        <ShowcaseCard>
          <ImageWrapper>
            <ShowcaseImage src={SimpleTweet1}/>
            <ShowcaseImage src={SimpleTweet2}/>
          </ImageWrapper>
          <ShowcaseH2>"Twitter" App</ShowcaseH2>
        </ShowcaseCard>
        <ShowcaseCard>
            <ShowcaseImage src={Flixter}/>
          <ShowcaseH2>Movie Rating App</ShowcaseH2>
        </ShowcaseCard>
        {/* <ShowcaseCard>
          <ShowcaseIcon src={Icon1}/>
          <ShowcaseH2>This Website</ShowcaseH2>
          <ShowcaseP>It's not much, but it's honest work.</ShowcaseP>
        </ShowcaseCard> */}
      </ShowcaseWrapper>
      

    </ShowcaseContainer>
  )
}

export default Showcase
