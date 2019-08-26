// creating an empty array to hold messages
let messages = [];
// initializing the id at 0
let id = 0;

// create method
const createMessage = (req, res) => {
    // destructure text and time of the req.body
    const { text, time } = req.body;
    // adding id, text, and time objects to the message 
    messages.push({ id, text, time });
    // assign a unique id to the message
    id++;
    // return the messaages array
    res.status(200).send(messages);
}

// read method
const readMessage = (req, res) => {
    // return the messages array
    res.status(200).send(messages);
}

// update method
const updateMessage = (req, res) => {
    // destructuring text of req.body
    const { text } = req.body;
    // storing the request of the params id to a new variable called updateId
    const updateId = req.params.id;
    // get index where the ids match
    // == used in case the id in the message objects are numbers and
    // the id from the req.params is a string
    // and store into a new variable called messageIndex
    const messageIndex = messages.findIndex(message => message.id == updateId);
    // get the object using the index
    let message = message[messageIndex];
    // updating the object
    message[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    // return the updated messages array
    res.status(200).send(messages);
}

// 
const deleteMessage = (req, res) => {
    // store params id request into a variable deleteId
    const deleteId = req.params.id;
    // delete the message using the value of id from the request url parameters
    const messageIndex = messages.findIndex(message => message.id == deleteId);
    messages.splice(messageIndex, 1);
    // return the messages array
    res.status(200).send(messages);
}

// exporting methods
module.exports = {
    createMessage: createMessage,
    readMessage: readMessage,
    updateMessage: updateMessage,
    deleteMessage: deleteMessage
}