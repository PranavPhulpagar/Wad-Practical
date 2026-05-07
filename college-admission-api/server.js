const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Student = require('./models/Student');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB')

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});

// -------------------
// CREATE API (POST)
// -------------------

app.post('/addStudent', async (req, res) => {

    try{

        const student = new Student(req.body);

        await student.save();

        res.status(201).json({
            message: "Student Added Successfully",
            student
        });

    }catch(err){

        res.status(500).json({
            error: err.message
        });
    }

});

// -------------------
// GET API
// -------------------

app.get('/students', async (req, res) => {

    try{

        const students = await Student.find();

        res.status(200).json(students);

    }catch(err){

        res.status(500).json({
            error: err.message
        });
    }

});

// -------------------
// PUT API
// -------------------

app.put('/updateStudent/:id', async (req, res) => {

    try{

        const updatedStudent =
        await Student.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.status(200).json({
            message: "Student Updated Successfully",
            updatedStudent
        });

    }catch(err){

        res.status(500).json({
            error: err.message
        });
    }

});

// -------------------
// DELETE API
// -------------------

app.delete('/deleteStudent/:id', async (req, res) => {

    try{

        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Student Deleted Successfully"
        });

    }catch(err){

        res.status(500).json({
            error: err.message
        });
    }

});

// Server
const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});