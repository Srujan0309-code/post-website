const express = require('express')
const multer = require('multer')
const uploadImage = require('./service/storage.service')
const app = express()
app.use(express.json())
const upload = multer ({storage: multer.memoryStorage()})
app.post('/create-post',upload.single('image'), async (req, res) => {
    res.send('Post created successfully')
    console.log(req.body)
    console.log(req.file)
    const result = await uploadImage(req.file.buffer)
    console.log(result)
})
module.exports = app