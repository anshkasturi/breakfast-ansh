import mysql from "mysql"

export const db = mysql.createConnection({
    host: "34.172.127.207",
    user:"test",
    password:"testPassword",
    database:"test_db"
})

