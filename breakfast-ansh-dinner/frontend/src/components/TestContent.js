import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from "axios";


const TestContent = () => {
    const [posts, setPosts] = useState([]);
    const location_category = useLocation().search
    console.log(location_category)

    useEffect(() => {
    const fetchAllPosts = async () => {
        try {
            const res = await axios.get(`/posts${location_category}`);
            console.log(res)
            setPosts(res.data)
        } catch (err) {
            console.log(err);
        }
    };
    fetchAllPosts();
    }, []);

    return(
        <div>
            {posts.map(post=>(
                <Link to = {`post/${post.id}`}>
                    <h1>{post.restaurant_name}</h1>
                </Link>
            ))}
            Hello you have reached test content
        </div>
    )
}

export default TestContent