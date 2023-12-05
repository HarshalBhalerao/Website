import React, { useState } from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, Img, ImgWrap, ArrowForward, ArrowRight } from './InfoElements';
import { Button, List } from '../ButtonElements';

const InfoSection = ({ lightBg, imgStart, id, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, buttonExist, liExist, li1, li2, li3 }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => { setHover(!hover); };

    const openSite = () => {
        window.open("https://soaexhibitions.ca", "_blank") //to open new page
    }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <hr className="info-divider" />
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <List visible={liExist ? 1 : 0}>{li1}</List>
                                <List visible={liExist ? 1 : 0}>{li2}</List>
                                <List visible={liExist ? 1 : 0}>{li3}</List>
                                <Button onClick={openSite}
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    visible={buttonExist ? 1 : 0}
                                >{buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                                </Button>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
