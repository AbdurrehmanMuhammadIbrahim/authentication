

let signup =()=>{
    var email = document.getElementById("email").value
    var password= document.getElementById("pass").value
     firebase.auth().createUserWithEmailAndPassword(email, password)
 
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    var errorMessage = error.message;
  
    console.log(errorMessage)
  alert(errorMessage)
  });
  window.location.href="./home.html"
}


let signin =()=>{
    var email = document.getElementById("emails").value
    var password= document.getElementById("pass").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
     console.log(data)
    
    })
    .catch((error) => {
      
      var errorMessage = error.message;
      console.log(errorMessage)
     alert(errorMessage)
    });
    window.location.href="./home.html"

}