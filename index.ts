const fs = require('fs');
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const PORT = 80;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname), {
  index: false,
}));

app.get("*", function(req: any, res: { sendFile: (arg0: any) => void }, next: any) {
  const mode = process.env.mode;
  const devPath = path.join(__dirname, "dev.html");
  const indexPath = path.join(__dirname, "index.html");
  if (mode === "development") {
    res.sendFile(devPath);
  } else {
    res.sendFile(indexPath);
  }
});

app.listen(PORT, () => {
  console.log(`
    ********************************
    *  Server started on port, ${PORT}  *
    ********************************
    `);
});
