import { TouchBarColorPicker } from 'electron';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'ImgScrapr'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headerStyle = {
//     color: 'black'
// }

export default Header