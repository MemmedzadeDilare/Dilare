$(document).ready(function () {
    $("#email").blur(function () {
        let email = $("#email").val();
        if (email == "") {
            $("#first").removeClass("d-none");
            $("#email").addClass("red-border");
            console.log("test");
        } else {
            $("#email").addClass("green-border");
            
        }
    })
    $("#email").focus(function () {
        $("#first").addClass("d-none");
        $("#email").removeClass("red-border");
    })
    $("#email").keyup(function () {
        var h = $("#email").val();
        var l =h.indexOf("@");
        if (l==-1) {
            $("#emailHelp").removeClass("d-none");
            $("#first").removeClass("d-none");
            $("#email").addClass("red-border");
            $("#emailHelper").addClass("d-none");
        }else if(l==h.length-1){
            $("#emailHelper").removeClass("d-none");
            $("#emailHelp").addClass("d-none");
            $("#first").removeClass("d-none");
        }else{
            $("#emailHelp").addClass("d-none");
            $("#emailHelper").addClass("d-none");
            $("#email").removeClass("red-border");  
            $("#email").addClass("border-success");
            $("#first").addClass("d-none");
            $("#check").removeClass("d-none");
            
        }
    })

    $("#password").blur(function (e) {
        e.preventDefault;
        let password = $("#password").val();
        if (password == "") {
            $("#warning").removeClass("d-none");
            $("#password").addClass("red-border");
            console.log("test");
        } else {

        }
    })
    $("#password").focus(function () {
        $("#warning").addClass("d-none");
        $("#password").removeClass("red-border");
    })
    $("#password").keyup(function () {
        var g = $("#password").val();
        if (g.length < 6 || 12 < g.length) {
            $(".signg").removeClass("d-none");
            $("#warning").removeClass("d-none");
            $("#password").addClass("red-border");
        } else if (g.length >= 6 && 12 >= g.length) {
            $(".signg").addClass("d-none");
            $("#checkz").removeClass("d-none");
            $("#password").removeClass("red-border");
            $("#password").addClass("border-success");
        }
    });
    localStorage.setItem('myCat', 'Tom');


    $("#login").click(function(){
       window.location.assign("ugurlu.html")
    })
});