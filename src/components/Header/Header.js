import "./Header.scss";
import Hamburger from 'hamburger-react'
import { Button } from "../Button/Button";
import { useState } from 'react';

export function Header ({ pages }) {

    const [isOpen, setOpen] = useState(false)

    // const mobileMenu = (isOpen) => {
    //     if (isOpen) {
    //         console.log('jawbfabwfuawf')
    //         return (
    //         )
    //     } else {
    //         return null;
    //     }
    // }

    return (
        <div className="header">
            <img src="./assets/logo.svg" alt="Adchitects Logo"/>
            <div className="header__menu">
                <ul>
                    <li><a href={pages[0]?.url}>Products</a></li>
                    <li><a href={pages[1]?.url}>Solutions</a></li>
                    <li><a href={pages[2]?.url}>About</a></li>
                </ul>
            </div>
            <div className="header__contact">
                <Button label="Contact us" />
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} direction={"right"}/>
            {/*{isOpen ?*/}
            {/*    <div className={isOpen ? 'header__mobile-menu active' : 'header__mobile-menu'}>*/}
            {/*        <ul>*/}
            {/*            <li><a href={pages[0]?.url}>Products</a></li>*/}
            {/*            <li><a href={pages[1]?.url}>Solutions</a></li>*/}
            {/*            <li><a href={pages[2]?.url}>About</a></li>*/}
            {/*        </ul>*/}
            {/*    </div> : null*/}
            {/*}*/}
            <div className={isOpen ? 'header__mobile-menu active' : 'header__mobile-menu'}>
            <ul>
                <li><a href={pages[0]?.url}>Products</a></li>
                <li><a href={pages[1]?.url}>Solutions</a></li>
                <li><a href={pages[2]?.url}>About</a></li>
            </ul>
        </div>
        </div>
    )
}