import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};
    padding: 10px 0;

    @media screen and (max-width: 768px){
        padding: 10px 0;
    }

    @media screen and (max-width: 440px){
        padding: 15% 0;
    }
    @media screen and (max-width: 370px){
        padding: 25% 0;
    }
    @media screen and (max-width: 330px){
        padding: 35% 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    margin-top: -15px;
`;

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas : ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const Column2 = styled.div`
    margin-bottom: -5px;
    padding: 0 5px;
`;

export const TextWrapper = styled.div`
    max-width: 100%;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 550;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`;

export const Subtitle = styled.p`
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 16.5px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 100%;
    height: 100%;
    padding-bottom: 25px;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const WorkH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    background-color: #fff;
    text-decoration: underline;
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;