import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul className="left-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <ul className="right-links">
                <li>
                    <Link to="https://www.instagram.com"><img src="../images/instagram-logo.png" alt="Instagram" /></Link>
                </li>
                <li>
                    <Link to="https://www.github.com/anshkasturi"><img src="../images/github-logo.png" alt="GitHub" /></Link>
                </li>
            </ul>
        </nav>
    )
}