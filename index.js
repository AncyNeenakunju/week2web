

 
    
  function myFunction(z) {
    
    var c=document.getElementById('main');
    var d=document.getElementById('sh');
    var e=document.getElementById('bus');
    var f=document.getElementById('educ');
    var g=document.getElementById('mobi');
    var h=document.getElementById('res');
    var i=document.getElementById('adob');
    var i=document.getElementById('adobe');
    
    
     if (z.matches) { // If media query matches
     c.style.backgroundColor="white";
     c.style.color="black";
     d.style.border="thin solid lightgrey"
     e.style.border="thin solid lightgrey"
     }
     else{

      c.style.backgroundColor="rgb(220, 53, 69)";
      c.style.display="flex";
      d.style.border="none";
     }
  }

  
  var z = window.matchMedia("(max-width: 1200px)")
  myFunction(z) // Call listener function at run time
  z.addListener(myFunction) 
  function myFunction2(x){
  var d=document.getElementById('sh');
  var e=document.getElementById('bus');
  var f=document.getElementById('educ');
  var g=document.getElementById('mobi');

  var h=document.getElementById('res');
  var i=document.getElementById('adob');
  var j=document.getElementById('adobe');
  var k=document.getElementById('sup');

  if (x.matches) { // If media query matches
    
    d.style.border="thin solid lightgrey"
    e.style.border="thin solid lightgrey"
    f.style.border="thin solid lightgrey"
    g.style.border="thin solid lightgrey"
    h.style.border="thin solid lightgrey"
    i.style.border="thin solid lightgrey"
    j.style.border="thin solid lightgrey"
    k.style.border="thin solid lightgrey"
    }
    else{
    d.style.border="none";
    }

  }

  var x = window.matchMedia("(max-width: 750px)")
  myFunction2(x) // Call listener function at run time
  x.addListener(myFunction2) 
function functionSign(){
  location.replace("sign.html");
}