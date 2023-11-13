const express = require("express");
const { registerUser,
        loginUser ,
        userAccount,
        userAccounts,
        updateInformation
} = require("../controller/userController");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/account/:id',userAccount)
router.get('/account',userAccounts)
router.patch('/account/update/:id',updateInformation)


module.exports = router;
