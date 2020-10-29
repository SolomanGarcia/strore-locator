const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Store = require("./api/models/store");

mongoose.connect(
  "mongodb+srv://Soloman:@cluster0.v31tf.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json({ limit: "50mb" }));

app.post("/api/stores", (req, res) => {
  let dbStores = [];
  let stores = req.body;
  stores.forEach((store) => {
    dbStores.push({
      storeName: store.name,
      phoneNumber: store.phoneNumber,
      address: store.address,
      openStatusText: openStatusText,
      addressLines: store.addressLines,
      location: {
        type: "Point",
        coordinates: [store.coordinates.longitude, store.coordinates.latitude]
      }
    });
  });
  res.send();
});

app.get("/", (req, res) => res.send("Hello World"));

app.delete("/api/stores", (req, res) => {
  Store.deleteMany({}, (err) => {
    res.status(200).send(err);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
