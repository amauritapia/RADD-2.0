let https = require('https');

makeRequest("get","/api/constants/heroes")
  .then(students => {
      // here is what you want
      console.log(students);  
  });


