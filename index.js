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
        hash: "e647d0399cdbbd26cc4b9e35fcd144e198d36e2e478dd9d69e27b361bb0d754e",
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
