const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const PORT = 80;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get("*", function(req: any, res: { sendFile: (arg0: any) => void }, next: any) {
  const mode = process.env.mode;
  console.log(mode);
  if (mode === "development") {
    res.sendFile(path.join(__dirname, "index.dev.html"));
  } else {
    res.sendFile(path.join(__dirname, "index.prod.html"));
  }
});

app.listen(PORT, () => {
  console.log(`
    ********************************
    *  Server started on port, ${PORT}  *
    ********************************
    `);
});
