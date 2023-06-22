import test_food from "./img/national-fast-food-day.png";
import stars from "./img/star.png";

export default function Post_Card() {
    return(
        <div className="full_post">
            <img src={test_food} alt="Here is the food" className="full_post--image"/>
            <h1 className="full_post--Title"> Random Restaurant </h1>
            <img src={stars} alt="stars" className="full_post--stars" />
            <div className="full_post--Stats">
                <span>$$</span>
                <span>  </span>
                <span>Savory</span>
            </div>
            <h2 className="full_post--headline">This is an example of my first blog post.</h2>
            <p className="full_post--thoughts">Here are my thoughts on this food.</p>
        </div>
    )
}