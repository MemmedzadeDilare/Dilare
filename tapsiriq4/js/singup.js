$(document).ready(function () {

    var arr={};
    $("#submit").click(function () {
        var input = $("#input").val();
        var email = $("#email").val();
        var pass = $("#password").val();
      var e= localStorage.setItem('email',email);
      var p= localStorage.setItem('password',pass);
      arr[0]=e;
      arr[1]=p;
    });
    
    $("#submit").click(function(){
      window.location.assign("login.html")
   })
});
