const express = require('express');
const cors = require('cors');
const { GetAllStudentsList } = require('./services/studentService')
const app = express();
//const { MongoClient, ServerApiVersion } = require('mongodb');
// const students = require('./students');
app.use(cors())
app.use(express.json())
app.listen(3000, () => {
  console.log('Server Runnng on Post 3000');
});
// Get Method
app.get('/', async (req, res) => {
  res.json("Api is working");
})
app.get('/students', async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;
  let startIndex = (page - 1) * limit;
  let endIndex = (page) * limit;
  var result = await GetAllStudentsList();
  res.json(result);
})

app.get('/students/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const studentsCollection = await client.db("School").collection("Students");
    const student = await studentsCollection.find({ id: id });
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the student." });
  }
});
// app.get('/students/:id', (req, res) => {
//   let id = req.params.id
//   let std = students.find(x => x.id == id)
//   res.json(std);
// })
app.get('/students/name/:name', (req, res) => {
  let name = req.params.name;
  let std = students.find(x => x.first_name.toUpperCase() === name);
  res.json(std);
});

// Post Method
app.post('/students', (req, res) => {

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
    email: req.body.email,
    age: req.body.age,
    phone_number: req.body.phone_number,
    address: req.body.address,
    city: req.body.city,
    major: req.body.major,
    gpa: req.body.gpa,
    graduation_date: req.body.graduation_date,
    gender: req.body.gender,

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
// Retrieving paginated data
app.get('/students', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  try {
    // Count the total number of documents in the collection
    const totalCount = await studentsCollection.countDocuments();

    // Find the students within the specified range
    const students = await studentsCollection
      .find()
      .skip(startIndex)
      .limit(limit)
      .toArray();

    results.students = students;

    if (startIndex > 0) {
      results.previousPage = page - 1;
    }

    if (endIndex < totalCount) {
      results.nextPage = page + 1;
    }

    results.totalPage = Math.ceil(totalCount / limit);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error ." });
  }
});


// //retrieving paginated data
// app.get('/students', (req, res) => {
//   let page = parseInt(req.query.page) || 1;
//   let limit = parseInt(req.query.limit) || 10;


//   let startIndex = (page - 1) * limit;
//   let endIndex = (page) * limit;
//   const results = {};

//   if (startIndex > 0) {
//     results.previousPage = page - 1;
//   }

//   if (endIndex < students.length) {
//     results.nextPage = page + 1;
//   }

//   results.students = students.slice(startIndex, endIndex);
//   results.totalPage = Math.ceil(students.length / limit);

//   res.json(results);
// });

