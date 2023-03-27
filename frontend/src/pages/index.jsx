import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



export function Home (){
    return(
        <>
            <Nav/>

            <section className="home-hero1">
                <div className="home-wrap-hero1">
                    <div className="info-hero1">
                        <h1 className="header">
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

            <section className="about">
                <div className="about_wrap">
                    <div className="about_title">
                        <h1 className="header">
                        What Do <br />
We Do<span className="titleSub"> BEST</span>
                        </h1>
                    </div>
                    <p className="subText about_subText">
                        We help you stay connected and keep your essential services running smoothly with our hassle-free platform. Get instant recharge of airtime, data bundles, cable TV, and electricity bills payment all in one place.
                    </p>
                    <div className="about_imgWrap">
                        <div className="about_imgBox"></div>
                        <div className="about_imgBox"></div>
                        <div className="about_imgBox"></div>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="services_wrap">
                    <div className="services_info">
                        <div className="services_title">
                            <h1 className="header">
                                Our
                                <span className="titleSub"> OMNI</span> <br />
                                Services
                            </h1>
                        </div>
                        <p className="subText services_subText mar-2-t">
                            Manage and get the best deals on your favorite services like, airtime and data bundles, cable TV subscription plans, electricity bills and many more.
                        </p>
                        <div className="actionBttn mar-2-t">
                            <button className="Bttn-Omni">
                                Lets Pay A Bill
                            </button>
                        </div>
                    </div>
                    <div className="services_imgs">
                        <div className="topImg_serGrid">
                            <div className="serviceGrid_box"></div>
                            <div className="serviceGrid_box"></div>
                        </div>
                        <div className="bottomImg_serGrid">
                            <div className="serviceGrid_box"></div>
                            <div className="serviceGrid_box"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function Nav(){
    const navRef = useRef()
    const [c_Scroll, setScroll] = useState(window.scrollY)
    useEffect(()=>{
        if(c_Scroll > 20){
            navRef.current.style.background = 'black'
        }
        else{
            navRef.current.style.background = 'none'
        }
    }, [c_Scroll])
    onscroll = (e)=>{
        setScroll(window.scrollY)
    }
    
    return(
        <nav ref={navRef}>
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