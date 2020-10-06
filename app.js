const express = require ("express");
const app = express();

app.get ("/health", (req,res) => res.send("Hello world"));

app.listen(3000, () => {
    console.log("App in 3000");
});