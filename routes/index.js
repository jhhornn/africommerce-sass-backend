const express = require('express')
const productRoute = require('../src/products/productRoute')
const userRoute = require('../src/users/users')
const businessRouter = require('../src/users/business/buisnessRouter')
const categoryRoute = require('../src/categories/categoryRoute')
const brandRoute = require('../src/brand/brandRoute')
const reviewRouter = require('../src/review/reviewRouter')
const wishlistRouter = require('../src/wishList/wishList')
const orderRouter = require('../src/order/orderRouter')
const apiDocsRouter = require('../src/documentation')

// const passport = require('passport')

const rootRouter = express.Router()

/* GET home page. */
rootRouter.get('/', function (req, res) {
  res.render('index', { title: 'Express' })
})

rootRouter.use('/api-docs', apiDocsRouter)
rootRouter.use('/users', userRoute)
rootRouter.use('/products', productRoute)
rootRouter.use('/business', businessRouter)
rootRouter.use('/categories', categoryRoute)
rootRouter.use('/brand', brandRoute)
rootRouter.use('/reviews', reviewRouter)
rootRouter.use('/wishlist', wishlistRouter)
rootRouter.use('/order', orderRouter)

module.exports = rootRouter
