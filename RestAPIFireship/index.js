const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json);//middleware to be able to test responses whit JSON inputs

app.listen(PORT, () =>
  console.log(`I'm running in the port http://localhost:${PORT}`)
);

// GET
app.get('/tshirt', (req, res) => {
  // req -> incomming data
  // res -> outcoming data/response
  res.status(200).send({
    atashi: "💌 Oya Oya what's a cute takodachi doing over here?",
    another: "Emoji 🀄",
    watakushi: "📞 We are calling regarding your car's extended warranty"
  });
});

// POST
app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;//`params` because is withing the link!
  const { logo } = req.body;//`body` because is in the actuall page

  if (!logo) {
    res.status(418).send({ message: "I need a logo, give me a logo RN" });
  }

  res.send({ thirt: `Here's your t-shirt ${id} & ${logo}` });
});

