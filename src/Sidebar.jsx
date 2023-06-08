/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DarkModeToggle from 'react-dark-mode-toggle'

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

const Sidebar = ({ theme, toggleTheme }) => {

    const lightThemeStyles = css`
      background-color: white;
      color: black;
    `;
  
    const darkThemeStyles = css`
      background-color: black;
      color: white;
    `;
  
    return (
      <SidebarContainer css={theme === 'light' ? lightThemeStyles : darkThemeStyles}>
        <h1>Sidebar</h1>
        <DarkModeToggle
          onChange={toggleTheme}
          checked={theme === 'dark'}
          size={80}
        />
      </SidebarContainer>
    );
  };
  
Sidebar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
  };

export default Sidebar;
