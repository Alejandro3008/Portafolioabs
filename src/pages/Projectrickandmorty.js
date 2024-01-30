import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ColorContext from '../context/ColorContext';
const portRM = require('../assets/websiteRM.PNG');

export const Projectrickandmorty = () =>{
    const {theme, handleTheme} = useContext(ThemeContext);
    const {color,handleColor} = useContext(ColorContext)
    return(
        <div className='image-bg'>
            <div className='bg-cover'> <aside className='coverBlur'></aside> </div>
            <div className='portada_img'>
                <aside className='container-my_info'>
                    <p className='name'>Alejandro Ferral</p>
                    <p className='city'>Querétaro, México</p>
                </aside>
                <aside className='img-container'>
                    <img className='imgPort' src={portRM} alt="imagen Rick & Morty"/>
                </aside>
            </div>
            <div className='information'>
                <p className='project_title'>Rick</p>
                <p className='project_title'>& Morty Wiki</p>
                <p className='project_resume'>
                    Rick & Morty Wiki is a project to practice the use of fetch using the Rick and Morty API also the use of different React JS 
                    and CSS libraries.
                </p>
                <span className='project_technologies'>Technologies</span>
                <span className='project_technologies_list'>Javascript,React JS, Bootstrap,Rect-Bootstrap,React-Router-Dom,SASS.</span>
                <a href="https://alejandro3008.github.io/RickandMortyWiki/" target="_blank"  rel="noreferrer" className='btn_website'> Website </a>
            </div>
        </div>
    );
}