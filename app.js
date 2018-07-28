var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("landing");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});
