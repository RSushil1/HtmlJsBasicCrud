// get all students list
const { connectToDb, getDb } = require('../db');
const { ObjectId } = require('mongodb');


module.exports.GetAllStudentsList = function (page, limit) {
    // let db;
    // connectToDb((err)=>{
        
    //     db = getDb();    
    // })
    const startIndex = (page - 1) * limit;
    const endIndex = limit;
    const endPage = page*limit;

    let results = {};
    let students = [];
    let totalCount;
    
    const query = { id: { $gt: 0 } };
    const options = {
        // sort returned documents in ascending order by id
        sort: { id: 1 },
        // Include only the `id`,`first_name`,`last_name` and `email` fields in each returned document
        projection: { _id: 1, id: 1, first_name: 1, last_name: 1, email: 1 },
    };
    
    
    getDb().collection('Students')
    .countDocuments()
    .then(count => {
            totalCount = count;
            return  getDb().collection('Students')
                .find(query, options) // cursor toArray forEach
                .skip(startIndex)
                .limit(endIndex)
                .forEach(student => students.push(student))
                .then(() => {
                    results.students = students;
                   
                    if (startIndex > 0) {
                        results.previousPage = page - 1;
                    }

                    if (endPage < totalCount) {
                        results.nextPage = page + 1;
                    }

                    results.totalPage = Math.ceil(totalCount / endIndex);
                    return results;
                }).catch(() => {
                    console.error(error);
                    return error;
                })
                
        })
    
}

// get Student by id

// get student by name