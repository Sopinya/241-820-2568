const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json()); 

let users = [];
let counter = 1;

// path = /test
app.get('/test', (req, res) => {
  let user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };
  res.json(user);
});

// path = POST /user
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter++; // 
  users.push(user);

  res.json({
    message: 'User added successfully',
    user: user
  });
});

// path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
  const id = req.params.id; 
  const updateUser = req.body; 

  // หา user ที่มี id ตรงกับ id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id);

  if (updateUser.name) {
    users[selectedIndex].name = updateUser.name;
  }
  if (updateUser.age) {
    users[selectedIndex].age = updateUser.age;
  }

  // อัปเดต user ที่เจอ
  users[selectedIndex].name = updateUser.name || users[selectedIndex].name;
  users[selectedIndex].age = updateUser.age || users[selectedIndex].age;  


  res.json({
    message: 'User updated successfully',
    data: {
      user: users[selectedIndex],
      indexUpdated: selectedIndex
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
