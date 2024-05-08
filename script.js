let left_scroll = document.querySelector(".scroll_left")
left_scroll.addEventListener("click", scrollLeft)
let right_scroll = document.querySelector(".scroll_right")
right_scroll.addEventListener("click", scrollRight)

function scrollLeft() {
   let container = document.querySelector(".container")
   container.scrollLeft += 380;
}
function scrollRight() {
   let container = document.querySelector(".container")
   container.scrollLeft -= 380;
}


function teacher_scroll() {

   let left_scroll = document.querySelector(".scroll_left_teachers")
   left_scroll.addEventListener("click", scrollLeft)
   let right_scroll = document.querySelector(".scroll_right_teachers")
   right_scroll.addEventListener("click", scrollRight)

   function scrollLeft() {
      let container = document.querySelector(".teachers")
      container.scrollLeft += 380;
   }
   function scrollRight() {
      let container = document.querySelector(".teachers")
      container.scrollLeft -= 380;
   }
}
teacher_scroll()

function emailSend() {
   let name = document.getElementById("name").value
   let email = document.getElementById("email").value
   let querry = document.getElementById("querry").value
   let phone = document.getElementById("phone").value

   Email.send({
      Host: "smtp.elasticemail.com",
      Username: "oneman8368@gmail.com",
      Password: "ECC250A7CD798988C3E4C60EF89CFC0F5836",
      To: 'oneman8368@gmail.com',
      From: "oneman8368@gmail.com",
      Subject: "Querry from vigyaanam.com",
      Body: `Name:  ${name} <br>
      Email:   ${email} <br>
      Phone:   ${phone}<br>
      Querry:  ${querry}`
   }).then((message) => {
      if(message==="OK"){
      alert(`Message send successfully \nyou will get reply within 24 hours`);}
   else{
      alert(message)
   }
   }
   );
}
let array = document.getElementsByClassName("nav-color-blue");
Array.from(array).forEach(element => {
    element.addEventListener("click", () => {
        let canvas = document.getElementById("offcanvasDarkNavbar");
        canvas.classList.remove("show");
    });
});
