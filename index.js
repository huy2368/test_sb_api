const express = require("express");
const app = express();

app.post("/api/v1/patches/check", (req, res) => {
  console.log("== patches check req" + req);
  res.send({
    message: "ok",
    patch_available: true,
    patch: 
      {
        number: 1,
        hash: "f1abc016a6a41e76f0d1c2b68998dd7fb2b3cd58694e753e405f5ce634ec2975",
        download_url:
          "https://raw.githubusercontent.com/huy2368/test-code-push/refs/heads/develop/dlc.vmcode",
        //download_url:"https://cdn.shorebird.cloud/api/v1/patches/935678ec-477f-48ac-90d9-81bbd30d6e64/android/aarch64/113119/dlc.vmcode"
      }
    ,
    rolled_back_patch_numbers: []
  });
});
app.get("/", function (req, res) {
  console.log("== root get req" + req);
  res.send("OK");
});
app.post("/", function (req, res) {
  console.log("== root post req" + req);
  res.send("OK");
});
app.post("/api/v1/patches/events", (req, res) => {
  console.log("== patches events req" + req);
  res.send('OK')
})
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
