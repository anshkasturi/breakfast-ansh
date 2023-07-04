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
                    <a href="https://www.instagram.com"><img src="../images/instagram-logo.png" alt="Instagram" /></a>
                </li>
                <li>
                    <a href="https://www.github.com/anshkasturi"><img src="../images/github-logo.png" alt="GitHub" /></a>
                </li>
            </ul>
        </nav>
    )
}