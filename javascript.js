// const swup = new Swup();

// transition on scroll

function reveal() {
    var reveals = document.querySelectorAll(".reveal-right, .reveal-left");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Blogs

// document.addEventListener('click', expand);


function expand(blog_id){
  setTimeout(function () {
    window.open("./blogs/"+blog_id+".html","_self");
  }, 300);
  console.log(blog_id);
  const box = document.getElementById(blog_id);
  const content = document.getElementById(blog_id).querySelectorAll(".fixed");;
  const eye = document.getElementById(blog_id).querySelectorAll(".fa-eye");
  console.log(content);
  console.log(eye);
  content[0].style.visibility = "hidden";
  content[1].style.visibility = "hidden";
  eye[0].style.display = "none";
  box.style.transform = "scale(10,1)";
  id = blog_id;
  
  // content.style.display = "none";
  // contentx.style.cssText = `visilibilty : hidden; opacity: 1;`;
}

function shrink(){
  setTimeout(function () {
    window.open("../blogs.html","_self");
  }, 600);
  var content = document.getElementById("page");
  console.log(content);
  content.style.opacity = "0";
}

// function background(color_id){
//   if(color_id == "blue") color = "#F8F6CE";
//   console.log(color_id);
//   // document.body.style.backgroundImage = "linear-gradient(to right, "+color+" , #C0E7F5)";
//   document.body.style.backgroundColor = "#C0E7F5";
// }

function shrink_panel(){
  var blog = sessionStorage.getItem("blog_id");
console.log(blog);
}

  // active page

// const activePage = window.location.pathname;
// // console.log(activePage);
// const navLinks = document.querySelectorAll('nav a').
// forEach(link => {
//     // console.log(link.href);
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
// })