const router = require("express").Router()


router.get('/', (req:any, res: any)=>{
    res.json("Hello server is up and running")
})

module.exports  = router
