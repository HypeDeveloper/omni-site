import logo from  '../assets/images/omni.png'
import { Button } from './utils'


export function Navbar(){
    return(
        <nav>
            <div className="navWrap">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <div className="linksWrap">
                        <li><a href="">About</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Memberships</a></li>
                        <li><a href="">Contact</a></li>
                    </div>
                </div>
                <div className="actionBttn">
                    <Button text={'pay a bill'}/>
                </div>
            </div>
        </nav>
    )
}