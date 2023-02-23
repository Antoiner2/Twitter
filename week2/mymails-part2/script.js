
document.querySelector('#msg-container').innerHTML += `
     <div class="row new-row">
  <img class="avatar" src="images/avatar-2.jpg" />
  <div class="text-container">
    <h6>John Doe</h6>
    <p>New message</p>
  </div>
  <span class="delete">&#x2716;</span>
</div>
`;


const messagesCount = document.querySelectorAll('p').length;
console.log(messagesCount);

let date = new Date();

document.querySelector('#footer').innerHTML += `

<span id="date">${date}</span>
`;
     


  