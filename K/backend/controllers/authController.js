const fs = require("fs");
const path = require("path");

const societiesFile = path.join(__dirname, "../data/societies.json");

function loginSociety(req, res) {
  const { name, password } = req.body;

  const societies = JSON.parse(fs.readFileSync(societiesFile, "utf-8")).societies;
  const society = societies.find(
    (s) => s.name === name && s.password === password
  );

  if (society) {
    res.json({ success: true, message: "Login successful", society });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}

module.exports = { loginSociety };
