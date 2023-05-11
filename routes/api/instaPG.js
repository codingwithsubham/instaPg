const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");

const {
  SERVER_ERROR,
  STATUS_CODE_500,
  STATUS_CODE_200,
  SUCCESS,
  STATUS_CODE_400,
  GOLD_WALLET,
  INSTA_MEDIA,
  FAST_DIAL,
  WINZA,
} = require("../../common/constant/constants");
const { HEADER } = require("../../common/constant/api-constants");

// @route POST api/instapg
// @desc Recieve Webhook
// @access Public
router.post("/webhook", async (req, res) => {
  try {
    console.log("Req Webhook:: " + JSON.stringify(req.body));
    const { udf1, status } = req.body;
    if (status !== "failure") {
      //bot logic
      if(udf1 === GOLD_WALLET){
        //requesting to gold Wallet
        const postData = req.body;
        await axios.post(
          "https://digitalgold.onrender.com/api/pg/order-success",
          postData,
          HEADER
        );
        return res.status(STATUS_CODE_200).send(SUCCESS);
      } else if(udf1 === INSTA_MEDIA){
        //requesting to instaMedia
        const postData = req.body;
        await axios.post(
          "https://instamedia.onrender.com/api/pg/order-success",
          postData,
          HEADER
        );
        return res.status(STATUS_CODE_200).send(SUCCESS);
      } else if(udf1 === FAST_DIAL){
        //requesting to instaMedia
        const postData = req.body;
        await axios.post(
          "https://fast-dial.onrender.com/api/pg/order-success",
          postData,
          HEADER
        );
        return res.status(STATUS_CODE_200).send(SUCCESS);
      } else if(udf1 === WINZA){
        //requesting to instaMedia
        const postData = req.body;
        await axios.post(
          "https://winza.onrender.com/api/pg/order-success",
          postData,
          HEADER
        );
        return res.status(STATUS_CODE_200).send(SUCCESS);
      } 
    } else {
      return res
        .status(STATUS_CODE_400)
        .json({ errors: [{ msg: BAD_REQUEST }] });
    }
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

module.exports = router;
