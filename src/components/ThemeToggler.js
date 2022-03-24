import { func, string } from 'prop-types';

export const Toggle = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme} >
            Set {theme === "light" ? "Dark" : "Light"} Theme
        </button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}