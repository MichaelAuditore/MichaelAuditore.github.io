var $name = document.getElementById("name"),
$email = document.getElementById("email"),
$subject = document.getElementById("subject"),
$sms = document.getElementById("message");


function sendinfo() {
    clean();
};

function clean(){
    $name.value = "";
    $email.value = "";
    $subject.value = "";
    $sms.value = "";
}