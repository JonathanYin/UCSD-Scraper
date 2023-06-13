/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled('div')`
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
`;

const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
`;


const DarkModeToggle = ({ theme, toggleTheme }) => (
  <ToggleButton onClick={toggleTheme} theme={theme}>
    {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size="2x" /> : <FontAwesomeIcon icon={faSun} size="2x" />}
  </ToggleButton>
);

DarkModeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

const Sidebar = ({ theme, toggleTheme }) => {

    const lightThemeStyles = css`
      background-color: #f5f4fd;
      color: #00071d;
    `;
  
    const darkThemeStyles = css`
      background-color: #00071d;
      color: #ECF2FF;
    `;
  
    return (
      <SidebarContainer css={theme === 'light' ? lightThemeStyles : darkThemeStyles}>
        <h1>Sidebar</h1>
        {/* <DarkModeToggle
          onChange={toggleTheme}
          checked={theme === 'dark'}
          size={80}
        /> */}
        <DarkModeToggle
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </SidebarContainer>
    );
  };
  
Sidebar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
  };

export default Sidebar;
