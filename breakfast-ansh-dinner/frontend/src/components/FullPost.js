import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import moment from "moment";
import axios from "axios"; 

export default function FullPost() {

    const [post, setPost] = useState({});

    const location = useLocation();

    const postId = location.pathname.split("/")[2];


    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchData();
    }, [postId]);

    return(
        <div className="full-post">
            <img src = "../images/test_photo.png" className="fp--image" />
            <div className="fp--title">{post.restaurant_name}</div>
            <div className="fp--author-info">
                <img src="../images/blank-profile.png" className="fp--author-img" x/>
                <div className="fp--author">{post.author}</div>
            </div>
            <div className="fp--stars">Stars: {post.stars}</div>
            <div className="fp--price">Price: {"$".repeat(post.price)}</div>
            <div className="fp--oneword">{post.oneword}</div>
            <div className="fp--posted">Posted {moment(post.dateposted).fromNow()}</div>
            <p className="fp--thoughts">{post.thoughts}</p>
        </div>
    )
}