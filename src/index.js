$(document).ready(function () {
  $("#submit").click(function () {
    var user = $("#username").val();
    if (user == "") {
      // $('#show_error1').show();
      $("#show_error1").html("Name cannot be left blank");
      $("#show_error1").css("color", "red");
      $("#show_error1").css("font-size", "small");
    } else {
      $("#show_error1").hide();
    }

    var email = $("#email_add").val();
    // console.log("email is "+ email)
    if (email == "") {
      $("#show_error2").html("Name cannot be left blank");
      $("#show_error2").css("color", "red");
      $("#show_error2").css("font-size", "small");
    } else $("#show_error2").hide();

    var comnt = $("#comment").val();
    if (comnt == "") {
      $("#show_error6").html("Name cannot be left blank");
      $("#show_error6").css("color", "red");
      $("#show_error6").css("font-size", "small");
    } else {
      $("#show_error6").hide();
    }

    var edu = $("#education").val();
    // console.log('eduaction '+ edu)
    if (edu == "") {
      $("#show_error3").html("Name cannot be left blank");
      $("#show_error3").css("color", "red");
      $("#show_error3").css("font-size", "small");
    } else {
      $("#show_error3").hide();
    }

    // var x = $('#1radio').val();
    // var y = $('#2radio').val();
    // console.log("radio "+ x + y)
    // if($('x').is(':checked')){
    //     $('#show_error4').html('Name cannot be left blank');
    //     $('#show_error4').css('color','red');
    //     $('#show_error4').css('font-size','small')

    // }

    // else $('#show_error4').hide()

    // var gender =$('input:radio[name=gender]:checked');
    // console.log("gender" + gender)

    // if(gender ==null || gender== ""){

    //     $('#show_error4').html('Name cannot be left blank');
    //         $('#show_error4').css('color','red');
    //         $('#show_error4').css('font-size','small');

    // }
    // else{
    //     $("#show_error4").hide();
    // }

    var check = document.getElementById("male").checked;
    // console.log(check);
    if (check == true) {
      $("#show_error4").hide();
    } else {
      $("#show_error4").html("Name cannot be left blank");
      $("#show_error4").css("color", "red");
      $("#show_error4").css("font-size", "small");
    }

    var check2 = document.getElementById("female").checked;
    // console.log(check2);
    if (check2 == true) {
      $("#show_error4").hide();
    } else {
      $("#show_error4").html("Name cannot be left blank");
      $("#show_error4").css("color", "red");
      $("#show_error4").css("font-size", "small");
    }

    var check3 = document.getElementById("1check").checked;
    console.log(check3);
    if (check3 == true) {
      console.log(true);
      $("#show_error5").hide();
    } else {
      console.log(false);
      $("#show_error5").html("Name cannot be left blank");
      $("#show_error5").css("color", "red");
      $("#show_error5").css("font-size", "small");
    }

    var check4 = document.getElementById("2check").checked;
    console.log(check3);
    if (check4 == true) {
      console.log(true);
      $("#show_error5").hide();
    } else {
      console.log(false);
      $("#show_error5").html("Name cannot be left blank");
      $("#show_error5").css("color", "red");
      $("#show_error5").css("font-size", "small");
    }

    var check5 = document.getElementById("3check").checked;
    console.log(check3);
    if (check5 == true) {
      console.log(true);
      $("#show_error5").hide();
    } else {
      console.log(false);
      $("#show_error5").html("Name cannot be left blank");
      $("#show_error5").css("color", "red");
      $("#show_error5").css("font-size", "small");
    }
  });
});
