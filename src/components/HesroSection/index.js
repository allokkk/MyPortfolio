import React from "react";
import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from "../../images/Hero1.jpg";
import HeroBgAnimation from '../HeroBgAnimation';
import { Link as MobileLink } from 'react-router-dom';

const HeroContainer = styled.div`
        background: #EDF4F2;
        display: flex;
        justify-content: center;
        position: relative;
        padding: 80px 30px;
        @media (max-width: 960px) {
            padding: 66px 16px;
        }
        @media (max-width: 640) {
            padding: 32px 16px;
        }
        z-index: 1;

        
`;


 const HeroBg = styled.div`
        position: absolute;
        display: flex;
        justify-content: end;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 1360px;
        overflow: hidden;
        padding: 0 30px;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);

        @media (max-width: 960px) {
            justify-content: center;
            padding: 0 0px;
        }
`;
const HeroInnerContainer = styled.div`
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1100px;
        @media (max-width: 960px) {
            flex-direction: column;
        }
`;

const HeroLeftContainer = styled.div`
        width: 100%;
        order: 1;
        @media (max-width: 960px) {
            order: 2;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 640px) {
            order: 2;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`;

const HeroRightContainer = styled.div`
        width: 100%;
        display: flex;
        order: 2;
        justify-content: end;
        gap: 12px;
        @media (max-width: 960px) {
            order: 1;
            justify-content: center;
            align-items: center;
            margin-bottom: 80px;
        }

        @media (max-width: 640px) {
            margin-bottom: 30px;
        }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: black;
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: black;
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height:     48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;


const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: black;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        width: 95%;
        max-width: 300px;
        text-align: center;
        padding: 16px 0;
        color:${({ theme }) => theme.white};
        border-radius: 20px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        transition: all 0.2s ease-in-out !important;
        background: hsla(271, 100%, 50%, 1);
        background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
        background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
        background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
        box-shadow:  20px 20px 60px #1F2634,
        -20px -20px 60px #1F2634;
        &:hover {
            transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634,
        filter: brightness(1);
        }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: 750px;
    border-radius: 0;  /* Removed border-radius to make it rectangular/square */
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }

`;



const Hero = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroImg} alt="Hero" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default Hero;