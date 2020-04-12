const route = require('express').Router()
const orderModel = require('../models/orders/orderModel')

route.post('/saveorder', orderModel.saveOrder)
route.get('/getorders', orderModel.getOrders)
route.get('/getorders/:id', orderModel.getOrder)


module.exports = route