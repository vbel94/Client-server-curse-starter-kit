const express = require('express');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




var customers = [  //array of customers
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  {id: 3, firstName: 'Mary', lastName: 'Swanson'},
];
 //get customers  
app.get('/api/customers', (req, res) => { 
  res.json(customers);
});
 // post add new customer
app.post('/api/Addcustomers', function (req, res) {

  var user_id = req.body.id;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  customers.push({id: customers.length+1, firstName: firstName, lastName: lastName});
  res.send(user_id + ' ' + firstName + ' ' + lastName);
  console.log(customers);
});


// post del customer
app.post('/api/Delcustomers', function (req, res) {

  var  user_id= req.body.id;
  for (var i = 0; i < customers.length; i++) { 
    if (customers[i].id === user_id) {
      (i !== -1)
      
      customers.splice(i,1);
  
    }
  }



});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);