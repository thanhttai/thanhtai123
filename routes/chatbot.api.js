const express = require("express");
const {
textQuery,
eventQuery
} = require("../controllers/chatbot.controller");

const authenticationMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const router = express.Router();



router.post("/df_text_query",async(req, res) => {
    
    
       
        console.log('hâha')
        let responses = await textQuery(req.body.text, req.body.userID, req.body.parameters);
        console.log(responses, 'huhuh')
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "access-control-allow-origin,content-type")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
      
        res.send(responses[0].queryResult)
   
} );
router.post('/api/df_event_query',async(req, res) => {
    try {
        let responses = await eventQuery(req.body.event, req.body.userID, req.body.parameters);
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "access-control-allow-origin,content-type")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
        res.send(responses[0].queryResult)
    } catch (error) {
        console.log(error)
    }
})





module.exports = router;
