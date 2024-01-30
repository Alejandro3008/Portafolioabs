export const ContactMe = ({color}) => {
    return(
        <section className="containerContact container">
            <br></br><br></br>
            <p className="titleSection">CONTACT ME</p>
            <article className="borderSection dropEmail">
                    <p>DROP ME AN <span><a href="mailto:ferralalejandro17@gmail.com" className="emailLink" style={{color: color}}>EMAIL</a></span></p>
            </article>
            <br></br>
            <br></br>
            <article className="borderSection socialMedia">
                    <a href="https://www.linkedin.com/in/alejandro-ferral-9aa245210/" target="_blank"  rel="noreferrer" className="link">| LINKEDIN |</a> <a href="https://github.com/Alejandro3008" target="_blank"  rel="noreferrer" className="link">| GITHUB |</a>
            </article>
        </section>
    )
}