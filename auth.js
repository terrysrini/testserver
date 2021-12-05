const express =require('express');
const User = require("./model/user");
const router = express.Router();
router.get('/login', async function (req, res) {
  try {
    // Get user input
    const { name, password } = req.body;

    // Validate user input
    if (!(name && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ name });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, name },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  });


  module.exports = router;