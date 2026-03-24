const express = require('express')
const multer = require('multer')
const uploadImage = require('./service/storage.service')
const postmodel = require('./models/post.models')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const upload = multer ({storage: multer.memoryStorage()})
app.post('/create-post',upload.single('image'), async (req, res) => {
    const result = await uploadImage(req.file.buffer)
    console.log(req.body)
    console.log(req.file)
    

const post = await postmodel.create({
    image: result.url,
    caption: req.body.caption
})
   return res.status(201).json({
    message: 'Post created successfully',
    post
   }) 
})


app.get('/posts', async (req, res) => {
    const posts = await postmodel.find()
    return res.status(200).json({
        message: 'Posts retrieved successfully',
        posts
    })
})
module.exports = app