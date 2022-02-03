const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const APP_URL = "http://localhost:3000";
const app = express();
const port = 3001;

//*********************configurations*********************
app.use(cors({ origin: APP_URL })); //accept from this address only
//app.set("X-Powered-By":""); //hide that we are using express
//app.use(fileUpload({ debug: true, preserveExtension: true })); //file upload made easy
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //allow application/x-www-form-urlencoded

function customHeaders(req, res, next) {
  // Switch off the default 'X-Powered-By: Express' header
  app.disable("x-powered-by");

  // OR set your own header here
  res.setHeader("X-Powered-By", "Blood, Sweat & Tears");
  res.setHeader("Content-Type", "application/json");
  next();
}

app.use(customHeaders);

//*********************Middlewares here*********************
//global middleaware
app.use((request, response, next) => {
  var remoteIp = request.socket.remoteAddress.match(
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/
  );
  if (remoteIp !== null) {
    //found an ip
    if (remoteIp !== "192.168.0.108") {
      //redirecting rouge client
      response.redirect(APP_URL);
      return;
    } else {
      next();
    }
  } else {
    //sometimes localhost ip is like ::1
    var result = request.socket.remoteAddress.match(/\:\:\d{1}/);
    if (result !== null) {
      //application ip detected
      next();
    }
  }
  res.setHeader("X-Powered-By", "Blood, Sweat & Tears");
  response.type("application/json"); //responding with json data
  next();
});

const authMiddleaware = (request, response, next) => {
  if (false) {
    console.log("failed", getClientIp(request));
    response.status(403).send("Unauthorized access");
  } else {
    //console.log(getClientIp(request));
    next();
  }
};

//*********************Routes*********************
//default
app.get("/api", (request, response) => {
  response.json({ message: "Server Ready todd serve ya" });
});

app.all("", (request, response) => {
  //console.log("Request has been bounced", request);
  response.json({ message: "Route Not found" });
  //response.redirect("http://localhost:3000/"); //Bounce anyone to our site
});

//starting the api backend
app.listen(port, () => console.log(`Server listening on port ${port}!`));
