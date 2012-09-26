/*
* PII reuse/storage checker.
*/

function is_passwd_reused(response) {
    if (response.is_password_reused == "yes") {
	//console.log("Password is reused");
	var alrt_msg = "Password reused in: \n";
	for (var i = 0; i < response.sites.length; i++) {
	    alrt_msg += response.sites[i] + "\n";
	}
	
	window.setTimeout(function() { alert(alrt_msg); } , 1);
	console.log(alrt_msg);
    }
}

function check_passwd_reuse(jevent) {
    var message = {};
    message.type = "check";
    message.domain = document.domain;
    message.passwd = jevent.target.value;
    chrome.extension.sendMessage("", message, is_passwd_reused);
}

$(':password').focusout(check_passwd_reuse);
