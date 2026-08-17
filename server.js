      // POST

const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const { name, age, email } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age,
        email
    };

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});
               
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
      
             /// PATCH

app.patch("/user/:id", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, age, email } = req.body;

    if (name !== undefined) {
        user.name = name;
    }

    if (age !== undefined) {
        user.age = age;
    }

    if (email !== undefined) {
        user.email = email;
    }

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User updated successfully",
        user: user
    });
});
                  ///  Delete 

app.delete("/user/:id", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User deleted successfully",
        user: deletedUser
    });
});
       
       /// GET /user/getByName

       app.get("/user/getByName", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const name = req.query.name;

    const user = users.find(user => user.name === name);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

            /// GET /user

app.get("/user", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    res.json(users);
});

           /// GET /user/filter

app.get("/user/filter", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const minAge = Number(req.query.minAge);

    const filteredUsers = users.filter(user => user.age >= minAge);

    if (filteredUsers.length === 0) {
        return res.json({
            message: "No users found"
        });
    }

    res.json(filteredUsers);
});

            ///GET /user/:id

app.get("/user/:id", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.json({
            message: "User not found."
        });
    }

    res.json(user);
});