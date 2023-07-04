
export default function Header() {
    return(
        <div className="header">
            <div className="header--logo">
                <img src = "./images/bad_logo.png" alt="BAD Logo"></img>
            </div>
            <div className="header--info">
                {/* Sido sayss match welcome to a in BAD logo*/}
                <br /><h1>Welcome to Breakfast, Ansh, and Dinner, a Ansh Kasturi Restaurant Blog!</h1>
                <p className="header--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

