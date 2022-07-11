import "./Header.scss";
import { Button } from "../Button/Button";

export function Header ({ pages }) {
    return (
        <div className="header">
            <img src="/assets/logo.svg" alt="Adchitects Logo"/>

            <div className="menu">
                <ul>
                    <li><a href={pages[0]?.url}>Products</a></li>
                    <li><a href={pages[1]?.url}>Solutions</a></li>
                    <li><a href={pages[2]?.url}>About</a></li>
                </ul>
            </div>

            <Button label="Contact us" />
        </div>
    )
}