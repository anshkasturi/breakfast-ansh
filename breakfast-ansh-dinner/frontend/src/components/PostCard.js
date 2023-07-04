import ImageRating from "./ImageRating";
import {Link} from 'react-router-dom';

export default function Post_Card({id, img_link, restaurant_name, stars, price, oneword, address, author}) {
    var dollarSigns = "$".repeat(price);
    return(
        <div className="card">
            <Link className="link" to={`/post/${id}`}>
            <img src={"../images/test_photo.png"} alt="Here is the food" className="card--image"/>
            <h1 className="card--title"> {restaurant_name} </h1>
            <img src="./images/star.png" alt="stars" className="card--stars" />
            <div className="card--stats">
                <span>{dollarSigns}</span>
                <span>{oneword}</span>
            </div>
            <p className="card--address">{address}</p>
            <p>{author}</p>
            </Link>
        </div>
    )
}