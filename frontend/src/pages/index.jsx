import { Link, Outlet } from "react-router-dom";



export function Home (){
    return(
        <>
            <Nav/>

            <section className="home-hero1">
                <div className="home-wrap-hero1">
                    <div className="info-hero1">
                        <h1 className="title-hero1">
                        Seamlessly Manage Your <br />
                        <span className="titleSub">
                            Subscriptions 
                        </span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export function Nav(){
    return(
        <nav>
                <div className="navWrap">
                    <div className="logo">
                        <p>Omni</p>
                    </div>
                    <div className="links">
                        <Link to='/'>About</Link>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Download</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className="actionBttn">
                        <button className="Bttn-Omni">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
    )
}