fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then(data => {
   console.log(data);
 });