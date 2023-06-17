/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SettingsTitle = styled('h1')`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#ECF2FF')};
  transition: color 1s ease-in-out;
`;

export const SliderLabel = styled('div')`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#ECF2FF')};
  margin-bottom: 10px;
  transition: color 1s ease-in-out;
`;

export const SliderContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Slider = styled(motion.input)`
  cursor: pointer;
  appearance: none;
  width: 100%;
  height: 15px;
  background: ${({ theme }) => (theme === 'light' ? '#ddd' : '#444')};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 50px;

  ::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => (theme === 'light' ? '#4CAF50' : '#66ff00')};
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: ${({ theme }) =>
      theme === 'dark'
        ? '0 0 10px #66ff00, 0 0 20px #66ff00, 0 0 30px #66ff00, 0 0 40px #66ff00'
        : 'none'}; /* Glow in the dark */
  }

  :hover {
    opacity: 1;
  }

  :hover::-webkit-slider-thumb {
    background: ${({ theme }) => (theme === 'light' ? '#388E3C' : '#4dd200')};
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => (theme === 'light' ? '#4CAF50' : '#66ff00')};
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: ${({ theme }) =>
      theme === 'dark'
        ? '0 0 10px #66ff00, 0 0 20px #66ff00, 0 0 30px #66ff00, 0 0 40px #66ff00'
        : 'none'};
  }

  ::-moz-range-progress {
    background-color: ${({ theme }) =>
      theme === 'light' ? '#4CAF50' : '#66ff00'};
  }

  :hover::-moz-range-thumb {
    background: ${({ theme }) => (theme === 'light' ? '#388E3C' : '#4dd200')};
  }
`;

export const SidebarContainer = styled('div')`
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#f5f4fd' : '#00071d'};
  color: ${({ theme }) => (theme === 'light' ? '#00071d' : '#ecf2ff')};
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

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
  align-items: stretch; /* Add this line */
  width: 75%;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212A3E')};
  border: ${({ theme }) => (theme === 'light' ? 'none' : '1px solid #F1F6F9')};
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
`;

export const cardAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

export const TextContainer = styled('div')`
  flex-basis: 60%;
  padding: 20px;
  overflow: auto; /* Add this line */
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
  margin-right: 20px; // Add space to the right of the text
`;

export const ImageContainer = styled('div')`
  flex-basis: 40%;
  overflow: auto; /* Add this line */
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
  margin-left: 20px; // Add space to the left of the image
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const Subtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 10px;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => (theme === 'light' ? '#7E7E7E' : '#BDCDD6')};
  font-weight: 700;
  transform: translateY(25%);
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
`;

export const Title = styled.h1`
  margin: 15px 0 0 0;
  padding-top: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 44px;
  line-height: 45px;
  letter-spacing: 3px;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'light' ? '#2C2C2C' : '#ECF2FF')};
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
`;

export const Description = styled.p`
  margin-top: 35px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: ${({ theme }) => (theme === 'light' ? '#7e7e7e' : '#fff')};
  line-height: 22px;
  margin-bottom: 35px;
`;

export const LinkBtn = styled.a`
  width: 35%;
  color: ${({ theme }) => (theme === 'light' ? '#2C2C2C' : '#BDCDD6')};
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
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#00071d')};
  border: ${({ theme }) => (theme === 'light' ? 'none' : '1px solid #fff')};
  border-radius: 8px;
  overflow: hidden;
  width: 80px;
  height: 30px;
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
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

  &:last-child::after {
    content: none;
  }
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
`;

export const Divider = styled.div`
  height: 60%;
  width: 1.25px;
  background-color: ${({ theme }) => (theme === 'light' ? '#000' : '#FFF')};
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    border 1s ease-in-out;
`;
