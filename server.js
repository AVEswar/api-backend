const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client/build')));
// POST method endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]+$/.test(item));

    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "venkata_eswar_18102003",
        email: "venkataeswar.21bce9063@vitapstudent.ac.in",
        roll_number: "21BCE9063",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//   });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
