const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
const db = require('./db')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)


app.get('/api/students', async (req, res, next) => {
  try {
    const students = await db.models.Student.findAll()
    res.send(students)
  } catch (error) {
    next(error)
  }
})

app.get('/api/campuses', async (req, res, next) => {
  try {
    const campuses = await db.models.Campus.findAll()
    res.send(campuses)
  } catch (error) {
    next(error)
  }
})

app.get('/api/students/:id', async (req, res, next) => {
  try {
    const student = await db.models.Student.findByPk(req.params.id)
    res.send(student)
  } catch (error) {
    next(error)
  }
})

app.get('/api/campuses/:id', async (req, res, next) => {
  try {
    const campus = await db.models.Campus.findByPk(req.params.id)
    res.send(campus)
  } catch (error) {
    next(error)
  }
})

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = app;

