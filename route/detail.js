const express = require("express");
const router = express.Router();

const detailController = require("../controller/detail");

router
    .route("/")
    .get(detailController.getDetails)
    .post(detailController.createDetail);

router
    .route("/:id")
    .get(detailController.getDetail)
    .put(detailController.updateDetail)
    .delete(detailController.deleteDetail);

module.exports = router;