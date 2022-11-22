const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");

// execute database connection
dbConnect();
// Curb Cores Error by adding a header here
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = require("./auth");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

app.post("/register", (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      user
        .save()

        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })

        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
          console.log("wrong password");
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});
app.post("/contact", (request, response) => {
  User.findOne({ email: request.body.email })

    .then(() => {
      const user = new User({
        name: request.body.name,
        email: request.body.email,

        message: request.body.message,
      });

      user
        .save()

        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })

        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
      });
    });
});
app.post("/Home", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    .then(() => {
      const user = new User({
        email: request.body.email,
        date: request.body.date,
        time: request.body.time,
      });
      user
        .save()

        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })

        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", auth, (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});

module.exports = app;
