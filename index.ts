const express = require("express");
const path = require("path");
const app = express();
const PORT = 80;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get("*", function(req: any, res: { sendFile: (arg0: any) => void }, next: any) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`
    ********************************
    *  Server started on port, ${PORT}  *
    ********************************
    `);
});
