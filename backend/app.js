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

app.get('/students', (req, res)=>{
    res.json(students);
})
app.get('/students/:id', (req, res)=>{
    let id = req.params.id
    let std = students.find(x=>x.id==id)
    res.json(std);
})
app.get('/students/name/:name', (req, res) => {
    let name = req.params.name;
    let std = students.find(x => x.first_name === name || x.last_name === name);
    res.json(std);
});

// Post Method
app.post('/students', (req, res)=>{
    // let first_name = req.body.first_name
    // let last_name = req.body.last_name
    // let email = req.body.email


    if(!req.body.first_name){
        res.status(400);
        return res.json({error: "first name is required..."})
    }
    if(!req.body.last_name){
        res.status(400);
       return res.json({error: "last name is required..."})
    }
    if(!req.body.email){
        res.status(400);
        return res.json({error: "email is required..."})
    }

    const user = {
        id: students.length +1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email

    }
    students.push(user);
    res.json(user);
})

// Put Method
app.put('/students/:id', (req, res)=>{
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email

    let index = students.findIndex((student)=>{
        return (student.id == Number.parseInt(id))
    })

    if (index >=0){
        let std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }
    else{
        res.status(400)
        res.end()
    }

})

// Delete Method
app.delete('/students/:id', (req, res)=>{
    let id = req.params.id;
    let index=  students.findIndex((student)=>{
        return (student.id == Number.parseInt(id))
    })

    if(index >=0){
        let std = students[index]
        students.splice(index, 1)
        res.json(std)
    }
    else{
        res.status(400)
        res.end()
    }

})