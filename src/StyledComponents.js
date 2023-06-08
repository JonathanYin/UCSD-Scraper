/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const DisplayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const CardInfo = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 75%;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme === 'light' ? '#fff' : '#000'};
  border: ${({ theme }) => theme === 'light' ? 'none' : '1px solid #fff'};
`;

export const cardAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3
    } 
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
}

export const TextContainer = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 55vh;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Subtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 10px;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => theme === 'light' ? '#7E7E7E' : '#fff'};   
  font-weight: 700;
  transform: translateY(25%);
`;

export const Title = styled.h1`
  margin: 15px 0 0 0;
  padding-top: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 44px;
  line-height: 45px;
  letter-spacing: 3px;
  font-weight: 700;
  color: ${({ theme }) => theme === 'light' ? '#2C2C2C' : '#FFFFFF'};
`;

export const Description = styled.p`
  margin-top: 35px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme === 'light' ? '#7e7e7e' : '#fff'};
  line-height: 22px;
  margin-bottom: 35px;
`;

export const LinkBtn = styled.a`
  width: 35%;
  color: ${({ theme }) => theme === 'light' ? '#2C2C2C' : '#fff'};
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 11px;
  text-transform: uppercase;
  margin: 0;
  width: 35%;
  font-weight: 700;
  text-decoration: none;
`;

export const ArrowBtnContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme === 'light' ? 'white' : '#000'};
  border: ${({ theme }) => theme === 'light' ? 'none' : '1px solid #fff'};
  border-radius: 8px;
  overflow: hidden;
  width: 80px;
  height: 30px;
`;

export const ArrowBtn = styled.button`
  flex: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme === 'light' ? '#000' : '#FFF'}; 

  &:last-child::after {
    content: none;
  }
`;

export const Divider = styled.div`
  height: 60%;
  width: 1.25px;
  background-color: ${({ theme }) => theme === 'light' ? '#000' : '#FFF'};
`;
