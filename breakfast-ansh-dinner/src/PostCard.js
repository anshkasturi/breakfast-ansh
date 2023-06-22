
export default function Post_Card({cover, restaurant, stars, price, one_word, address}) {

    return(
        <div className="card">
            <img src={"./images/" + cover} alt="Here is the food" className="card--image"/>
            <h1 className="card--title"> {restaurant} </h1>
            <img src="./images/star.png" alt="stars" className="card--stars" />
            <div className="card--stats">
                <span>{price}</span>
                <span>{one_word}</span>
            </div>
            <p className="card--address">{address}</p>
        </div>
    )
}