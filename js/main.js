// Information to reach API
const apiKey = '7fb5616a04b948ce933c860c68302579';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');
const copylinkButton = document.querySelector('#CopyLink');
const copy = document.querySelector("#copy");


// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  if(inputField.value=""||inputField.value.length == 0 || inputField.value == null){
    window.alert("Empty input !! Type your website");
    inputField.value="Type your website here"
    
  }
  else{

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      },
      body: data
    }).then(response=>{
        if(response.ok){
          return response.json()
        }
        throw new Error(window.alert("Invalid Website !! Please Check the Website and try again !!"),
        responseField.innerHTML="<p>Invalid Website !! </p><p> Please Check the Website and try again !!</p>");
        
  
    },networkError => {console.log(networkError.message)}
    ).then(jsonResponse=>{
       renderResponse(jsonResponse)
    })
  
    inputField.value=""
   
  
  }

}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  
  shortenUrl();
 
 
 
}

//const handleClick = ()=> {
  /* Save value of myText to input variable */
   //var input = copy.value;
  
    /* Copy the text inside the text field */
  
  //  input.focus();
  //  input.select();
  //  input.setSelectionRange(0, 99999);
  //  console.log("coppied code: " + input)
  //  navigator.clipboard.writeText("xyz")
  //  .then(() => {

  //  })
  //  .catch(() => {
  //    alert("something went wrong");
  //  });
   
  //  alert("Copied Text: " + input);

  //copy.select()
  //document.execCommand("copy");
 //}

  function myFunction() {

  copy.select();
  copy.setSelectionRange(0, 99999);
  responseField.value="Nothing to copy";
  
    navigator.clipboard.writeText(copy.value)
    .then(() => {
      copylinkButton.innerHTML ="Copied";
     
      
      
   })
   .catch(() => {
     alert("something went wrong");
   });
  
  
  
}


     
shortenButton.addEventListener('click', displayShortUrl);
//copylinkButton.addEventListener('click',handleClick);
document.body.addEventListener("click", function (evt) {
  console.dir(this);
  //note evt.target can be a nested element, not the body element, resulting in misfires
  console.log(evt.target);
  copylinkButton.innerHTML ="Copy Link";
});
