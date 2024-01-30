import { NavLink } from 'react-router-dom';
const randm = require('../assets/rickandmorty.png');
export const Projects = () => {
    return(
        <section className="projectsContainer container">
            <br></br><br></br>
            <p className="titleSection">PROJECTS</p>
            <article className="borderSection">
                <aside className="item_project">
                    <NavLink exact activeClassName='active' className='projectName' to="/Rick&Morty">Rick & Morty Wiki</NavLink>
                    <img className="hidden" src={randm} alt="imagen Rick & Morty"/>
                </aside>
            </article>
        </section>
    );
}