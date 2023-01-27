// Маршруты для модели Page для обработки запросов с фронта.
const express = require('express')
const router = express.Router()
const Post = require('../model/post')

router.get('/', async (req, res) => {
  try {
    const array = await Post.find().lean()
    res.status(200).json(array)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/create', async (req, res) => {
  const obj = {}
  const body = req.body
  const file = req.files
  if (file) {
    file.image.mv('server/uploads/posts/' + file.image.name)
    obj.image = `http://localhost:3000/${file.image.name}`
  }

  for (const key in body) {
    if (body[key]) {
      obj[key] = body[key]
    }
  }
  const newObj = new Post(obj)
  try {
    await newObj.save()
    res.status(200).json({ message: 'Пост успешно добавлен!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router
