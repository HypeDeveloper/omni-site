import { Link, Outlet } from "react-router-dom";



export function Home (){
    return(
        <>
            <Nav/>

            <section className="home-hero1">
                <div className="home-wrap-hero1">
                    <div className="info-hero1">
                        <h1 className="title-hero1">
                            Seamlessly Manage Your
                        </h1>
                        <p className="titleSub">
                        Subscriptions
                        </p>
                        <div className="subText-hero1">
                            <p className="subText mar-2-t">
                                Toping up your data or bills just
                                got easier with us
                            </p>
                        </div>
                        <div className="actionBttn">
                            <button className="Bttn-Omni mar-2-t">
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    <div className="img-hero">
                        <div className="imgheroGridwrap">
                            <div className="imggrids">
                                <div className="imgrid1"></div>
                                <div className="imgrid2"></div>
                            </div>
                            <div className="imggrids">
                                <div className="imgrid3"></div>
                            </div>
                        </div>
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