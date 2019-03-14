const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const House = require('../models/House')

// router.delete('/random/:deleteId', (req, res, next)=>{
//   console.log('DELETE RANDOM', req.params)
//   Country.remove({_id:req.params.deleteId}).then(deletedThing=>{
//     console.log('deleted', deletedThing)
//     res.json({deleted:deletedThing})
//   })
// })

router.get('/dashboard', isLoggedIn, (req, res, next) =>{
  console.log('INDEX')
  let houses = House.find().then(house =>{
    res.json({
      houses:house
    })
  })
})


router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

module.exports = router;
