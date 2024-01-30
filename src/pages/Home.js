export const Home = ({color}) => {

    return(
        <section className="home_container container">
            <div className="flexcontainer">
                <article className="" id="titleHome">
                    <p>WELCOME TO</p>
                </article>
                <article className="" id="titleHome">
                    <p>THE WORKSPACE </p>
                </article>
                <article className="" id="titleHome">
                    <p className="">OF <span className="special_name" style={{color: color}}>ALEJANDRO F.</span></p>
                </article>
            </div>
        </section>
    )
}