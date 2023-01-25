// Маршруты для модели Page для обработки запросов с фронта.
const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean()
    // const categories = await Category.find().lean()

    // for (const product of products) {
    //   const cat = categories.find(cat => cat._id == product.categoryId)
    //   if (!cat.products) {
    //     cat.products = []
    //   }

    //   if (cat.image === 'null') {
    //     cat.image = null
    //   }

    //   const setDescription = () => {
    //     let text = ''
    //     if (product.compound) {
    //       for (let i = 0; i < product.compound.length; i++) {
    //         text += `${product.compound[i].label}${i === product.compound.length - 1 ? '' : ', '}`
    //       }
    //     }
    //     return text
    //   }

    //   product.compound = JSON.parse(product.compound)
    //   product.modificators = JSON.parse(product.modificators)
    //   product.modificators = product.modificators.map(el => {
    //     el.price = Number(el.price)
    //     return el
    //   })

    //   product.price = JSON.parse(product.price)
    //   product.price = product.price.map(el => {
    //     el.price = Number(el.price)
    //     el.weight = Number(el.weight)
    //     return el
    //   })

    //   product.type = JSON.parse(product.type)
    //   product.new = Number(product.new)
    //   product.top = Number(product.top)

    //   product.quantity = 0

    //   if (!product.description) {
    //     product.description = setDescription()
    //   }

    //   cat.products.push(product)
    // }

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/create', async (req, res) => {
  console.log(req.body)
  const productObj = {}
  const body = req.body
  const file = req.files
  if (file) {
    file.image.mv('server/uploads/products/' + file.image.name)
    productObj.image = `http://localhost:3000/${file.image.name}`
  }

  for (const key in body) {
    if (body[key]) {
      productObj[key] = body[key]
    }
  }
  const product = new Product(productObj)
  try {
    await product.save()
    res.status(200).json({ message: 'Продукт успешно добавлен!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router
