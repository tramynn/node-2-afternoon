const express = require("express");
const mc = require("./controllers/messages_controller");
const app = express();

app.use(express.json());

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});