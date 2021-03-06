const express=require( "express" );
const { getAnnouncement, getSingleAnnouncement, deleteAnnouncement, updateAnnouncement, createAnnouncement, getWinnerHistoryByRange, getTodaysWinners, sendWinner }=require( "../controllers/announcementController" );
const { protect } = require("../controllers/authController");
const Router=express.Router();


//Optimize:   ***** Routes ******
Router.post("/winnerhistory",getWinnerHistoryByRange).get("/winners",getTodaysWinners);
Router.get( '/currentWinner', sendWinner )
Router.use(protect);
Router.route("/").get( getAnnouncement ).post(createAnnouncement);
Router.route( "/:id" )
  .get( getSingleAnnouncement )
  .delete( deleteAnnouncement )
  .patch( updateAnnouncement )



module.exports=Router;