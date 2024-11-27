$(document).ready(function () {
    // validate signup form on keyup and submit
    $("#formsubmit_1").validate({
        rules: {
            first_name_1: "required",
            last_name_1: "required",
            email_1: "required",
            phone_1: "required",
            class: "required",
            previous_class: "required"

        },
        messages: {
            first_name_1: "Please enter your firstname",
            last_name_1: "Please enter your lastname",
            email_1: "Please enter your email",
            phone_1: "Please enter phone number",
            class: "please enter class",
            previous_class: "please enter previous class"

        },
        submitHandler: function () {
            $("div.error").hide();

            var first_name_1 = $('#first_name_1').val();
            var last_name_1 = $('#last_name_1').val();
            var email = $('#email_1').val();
            var phone_1 = $('#phone_1').val();
            var Class = $('#class').val();
            var Previous_class = $('previous_class').val();

            localStorage.setItem('first_name', first_name_1);
            localStorage.setItem('last_name', last_name_1);
            localStorage.setItem('email_1', email_1);
            localStorage.setItem('phone_1', phone_1);
            localStorage.setItem('class', Class);
            localStorage.setItem('previous_class', Previous_class);

            $("#form2").show();
            $("#form1").hide();
            $("#form3").hide();
        }
    });
});


