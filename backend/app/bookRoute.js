const express = require('express');
const router = express.Router();

const db = require('./database');

router.get("/getBooks", (req, res, next) => {
    fetchAllBooks().then(([rows, fields]) => {
        res.send(convertData(rows));
    }).catch((err) => {
        console.log(err);
    });
});

const fetchAllBooks = () => {
    return db.execute('SELECT * FROM books');
}

const convertData = (rows) => {
    return rows.map((row) => {
        return {
            name: row.name,
            image: row.image.toString('base64'),
            summary: row.summary
        }
    });
}

module.exports = router
