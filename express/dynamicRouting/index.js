// Copyright 2024 user
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const express = require("express");
const app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/user/:username",(req,res)=>{
    res.send(`welcome, ${req.params.username}`);
});

app.get("/user/:username/:age",(req,res)=>{
    res.send(`Age of user, ${req.params.username} is ${req.params.age} `);
});

app.listen(3000);