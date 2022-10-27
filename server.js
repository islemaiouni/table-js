const PORT = 3000;
import express from 'express';

const app = express();
app.use(cors());
app.use(express);
const axios = require("axios").default;


app.get('/flight' (req, res)) {
    const options = {
        method: 'GET',
        url: 'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
        headers: {
            'X-RapidAPI-Key': '9d9d5fd02amsh1aa3463f4f205c5p18e9d9jsn3beaa1550054',
            'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
        }
    };

    axios.request(options).then(function(response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function(error) {
        console.error(error);
    });

    else {
        if (err) {

            console.log(err)
        }

    }



