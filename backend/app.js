const express = require('express');
const students = require('./students');
const cors = require('cors')

const app = express();
app.use(cors())
// parse json
app.use(express.json())
// static assets
// app.use(express.static('./public'))

app.listen(3000, () => {
    console.log('Server Runnng on Post 3000');
});

// Get Method
app.get('/', (req, res) => {
    res.json("Hello Api");
})

// app.get('/students', (req, res) => {
//     res.json(students);
// })
app.get('/students/:id', (req, res) => {
    let id = req.params.id
    let std = students.find(x => x.id == id)
    res.json(std);
})
app.get('/students/name/:name', (req, res) => {
    let name = req.params.name;
    let std = students.find(x => x.first_name === name || x.last_name === name);
    res.json(std);
});

// Post Method
app.post('/students', (req, res) => {
    // let first_name = req.body.first_name
    // let last_name = req.body.last_name
    // let email = req.body.email


    if (!req.body.first_name) {
        res.status(400);
        return res.json({ error: "first name is required..." })
    }
    if (!req.body.last_name) {
        res.status(400);
        return res.json({ error: "last name is required..." })
    }
    if (!req.body.email) {
        res.status(400);
        return res.json({ error: "email is required..." })
    }

    const user = {
        id: students.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email

    }
    students.push(user);
    res.json(user);
})

// Put Method
app.put('/students/:id', (req, res) => {
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    let age = req.body.age
    let phone_number = req.body.phone_number
    let address = req.body.address
    let city = req.body.city
    let major = req.body.major
    let gpa = req.body.gpa
    let graduation_date = req.body.graduation_date
    let gender = req.body.gender

    let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        let std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        std.age = req.body.age
        std.phone_number = req.body.phone_number
        std.address = req.body.address
        std.city = req.body.city
        std.major = req.body.major
        std.gpa = req.body.gpa
        std.graduation_date = req.body.graduation_date
        std.gender = req.body.gender
        res.json(std)
    }
    else {
        res.status(400)
        res.end()
    }

})

// Delete Method
app.delete('/students/:student_id', (req, res) => {
    let id = req.params.student_id;
    let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        let std = students[index]
        students.splice(index, 1)
        res.json(std)
    }
    else {
        res.status(400)
        res.end()
    }

})

//retrieving paginated data
app.get('/students', (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;


    let startIndex = (page - 1) * limit;
    let endIndex = (page) * limit;
    let results = students.slice(startIndex, endIndex);

    res.json(results);

});