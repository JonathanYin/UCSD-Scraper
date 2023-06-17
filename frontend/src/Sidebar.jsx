/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {
  SidebarContainer,
  SettingsTitle,
  SliderContainer,
  SliderLabel,
  Slider,
  ToggleButton,
} from './StyledComponents';

const DarkModeToggle = ({ theme, toggleTheme }) => (
  <ToggleButton onClick={toggleTheme} theme={theme}>
    {theme === 'light' ? (
      <FontAwesomeIcon icon={faMoon} size="2x" />
    ) : (
      <FontAwesomeIcon icon={faSun} size="2x" />
    )}
  </ToggleButton>
);

DarkModeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

const Sidebar = ({ theme, toggleTheme, limit, setLimit }) => {
  return (
    <SidebarContainer theme={theme}>
      <SettingsTitle theme={theme}>Settings</SettingsTitle>
      <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />
      <SliderContainer>
        <SliderLabel theme={theme}>Number of Posts: {limit}</SliderLabel>
        <Slider
          type="range"
          min="5"
          max="100"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          theme={theme}
        />
      </SliderContainer>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
};

export default Sidebar;
