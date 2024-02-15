

   
      
       

  // }else{
  //   data=req.body.data
  //   eventType= req.body.type
  // }

  

  

  
  // console.log(event)
  // console.log(event.type)

  
  // checking if the order exists of particular id
  // const orderExisted = await Order(db.sequelize,
  //   db.Sequelize.DataTypes).findOne({ where: { transaction_id: event.data.object.id } })

  //   console.log(orderExisted)
  //   console.log(orderExisted.id)
  // if (!orderExisted || transactionId !== orderExisted.transaction_id) {
  //   res.status(404).json({ message: 'Invalid input and Order not found'})
  //   // throw new Error('Invalid input and Order not found')
  // }

//  async function addStatusInOrder(stat){
//     // updating the status in database of order table
//     await Order(
//       db.sequelize,
//       db.Sequelize.DataTypes
//     ).update({ status: stat }, { where: { id: orderExisted.id } })
//   }

  // async function addWebhooklogs(data){
  //   await Webhook(
  //     db.sequelize,
  //     db.Sequelize.DataTypes
  //   ).create({
  //     order_id: orderExisted.id, action_description: data
  //   })
  // }

  // if (!event) {
  //   addWebhooklogs('Error in creating webhook')
  //   logger.error('Error in creating webhook', 'logsForWebhooks')
  //   throw new Error('Error in creating webhook')
  // }

  // switch (event.type) {
  //   case 'payment_intent.succeeded': {
  //     addStatusInOrder('Paid')
  //     addWebhooklogs('PaymentIntent was successful')
  //     logger.info('PaymentIntent was successful', 'logsForWebhooks')
  //     break
  //   }
  //   case 'payment_intent.created': {
  //     addStatusInOrder('Paid')
  //     addWebhooklogs('PaymentIntent was created successfully')
  //     logger.info('PaymentIntent was created successful', 'logsForWebhooks')
  //     break
  //   }
  //   case 'payment_intent.payment_failed': {
  //     addStatusInOrder('payment failed')
  //     addWebhooklogs('PaymentIntent was failed')
  //   }
  //   case 'payment_intent.partially_funded': {
  //     addStatusInOrder('failed')
  //     addWebhooklogs('partially funded')
  //   }
  //   case 'payment_intent.requires_action': {
  //     addStatusInOrder('failed')
  //     addWebhooklogs('Requires action while triggering')
  //   }
  //   default:
  //     // Unexpected event type
  //     addStatusInOrder('failed')
  //     addWebhooklogs('error while created PaymentIntent')
  //     logger.error('Error in creating event', 'logsForWebhooks')
  //     return res.status(400).end()
  // }

  // Return a 200 response to acknowledge receipt of the event
  // res.json({ received: true })