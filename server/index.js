const express = require("express");
const mc = require("./controllers/messages_controller");
const app = express();

app.use(express.json());

// post request
app.post('/api/messages', mc.createMessage);

// get request
app.get('/api/messages', mc.readMessage);

// put request
// url params of id
app.put('/api/messages/:id', mc.updateMessage);

// delete request
// url params of id
app.delete('/api/messages/:id', mc.deleteMessage);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});