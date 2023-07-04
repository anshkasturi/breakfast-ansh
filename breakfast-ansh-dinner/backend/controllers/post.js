import {db} from "../db.js"

export const getPosts = (req, res) => {
    const q = req.query.location_category 
        ? "SELECT * FROM test_table WHERE loc_category=?" 
        : "SELECT * FROM test_table"
    
    db.query(q, [req.query.location_category], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    });
};

export const getPost = (req, res) => {
    const q = "SELECT * FROM test_table WHERE id=?" 
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};