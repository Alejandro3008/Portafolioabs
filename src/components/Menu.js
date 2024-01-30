import { NavLink } from 'react-router-dom';

export const Menu = ({color}) => {
    const displayMenu = () => {
        const $button = document.querySelector('.menu_button'),
        $menu = document.querySelector('.menu_navbar');
        $button.classList.toggle('open');
        $menu.classList.toggle('display');
    }
    return(
        <header className='header'>
            <section className='menu_container'>
                <div className='menu_logo'>
                    <svg width="225" height="283" viewBox="0 0 225 283" fill="none">
                        <rect y="101" width="20" height="182" fill={color}/>
                        <rect x="55" y="184" width="20" height="99" fill={color}/>
                        <rect x="55" y="101" width="20" height="48" fill={color}/>
                        <rect x="205" y="101" width="20" height="182" fill={color}/>
                        <rect x="165" y="263" width="40" height="20" fill={color}/>
                        <rect x="75" y="184" width="70" height="20" fill={color}/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M205 101H225C225 38.868 174.632 0 112.5 0C50.368 0 0 38.868 0 101H20C20 48.533 61.4137 18 112.5 18C163.586 18 205 48.533 205 101Z" fill={color}/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M144.996 101.49H165.25C165.25 71.0453 140.57 52 110.125 52C79.6803 52 55 71.0453 55 101.49H75.0038C75.2823 82.8383 90.844 72 110 72C129.156 72 144.718 82.8383 144.996 101.49Z" fill={color}/>
                    </svg>
                </div>
            </section>
        </header>
    )
}