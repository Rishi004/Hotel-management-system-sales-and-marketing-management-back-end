const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const CurrentApiRoutes = require("./routes/CurrentApiRoutes");
const BygoneApiRoutes = require("./routes/BygoneApiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/current", CurrentApiRoutes);
app.use("/bygone", BygoneApiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening port number ${PORT}`);
    });
});
