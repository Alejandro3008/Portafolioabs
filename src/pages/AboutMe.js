export const AboutMe = ({color}) => {
    return(
        <section className="containerAboutMe container">
                
                <p className="titleSection">WHAT I DO</p>
                <article className="aboutTxt borderSection">
                    <p>I am a <span style={{color: color}}>software engineer </span>based in Queretaro, México, focus on web development specially front-end. Currently working at Deloitte.</p>
                </article>
                
                <p className="titleSection">MY SKILLS</p>
                <article className="borderSection">
                    <section>
                    <div class="marquee">
                        <div class="marquee--inner">
                            <span className="spanCarousel">
                                <div class="orb">React</div><div class="orb">CSS</div><div class="orb">HTML</div><div class="orb">React</div><div class="orb">JavaScript</div><div class="orb">Github</div><div class="orb">Java</div>
                            </span>
                            <span className="spanCarousel">
                                <div class="orb">CSS</div><div class="orb">HTML</div><div class="orb">React</div><div class="orb">JavaScript</div><div class="orb">Github</div><div class="orb">Java</div><div class="orb">C++</div>
                            </span>
                        </div>
                        <div class="marquee--inner">
                            <span className="spanCarousel">
                                <div class="orb">React</div><div class="orb">CSS</div><div class="orb">HTML</div><div class="orb">React</div><div class="orb">JavaScript</div><div class="orb">Github</div><div class="orb">Java</div>
                            </span>
                            <span className="spanCarousel">
                                <div class="orb">CSS</div><div class="orb">HTML</div><div class="orb">React</div><div class="orb">JavaScript</div><div class="orb">Github</div><div class="orb">Java</div><div class="orb">C++</div>
                            </span>
                        </div>
                    </div>
                    </section>
                </article>
        </section>
    )
}