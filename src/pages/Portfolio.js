import { useContext } from 'react';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { Home } from './Home';
import ThemeContext from '../context/ThemeContext';
import ColorContext from '../context/ColorContext';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { ContactMe } from './Contact';

export const Portfolio = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const {color,handleColor} = useContext(ColorContext)
    return(
        <div className={theme}>
                <Menu color={color}/>
                <Home color={color}/>
                <AboutMe color={color}/>
                <Projects/>
                <ContactMe color={color}/>
                <Footer/>
        </div>
    )
}