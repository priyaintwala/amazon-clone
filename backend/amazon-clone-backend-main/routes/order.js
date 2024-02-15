const express = require('express')
// const { createOrder } = require('../controllers/order')
// const router = express.Router()
// const asyncRouteHandler = require('../util/asyncRouteHandler')

// router.post('/', asyncRouteHandler(createOrder))
const {
  placeOrder,
  getOrders,
  trackOrder,
  countOrders
} = require('../controllers/order')
const { requireSignIn } = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/place', placeOrder)
router.get('/history',requireSignIn, getOrders)
router.get('/track/:orderId', trackOrder)
router.get('/count',countOrders)

module.exports = router
