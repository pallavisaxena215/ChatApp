const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r=await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "3082faca-d6e1-47f1-bae6-8729f7c16b44" } }
      );

      return res.status(r.status).json(r.data);
    
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
 
});

// Project ID:
// 3e4ea540-83cc-44b5-b759-c532475455b7
// Private Key:
// 3082faca-d6e1-47f1-bae6-8729f7c16b44 

app.listen(3001);