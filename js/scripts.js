//css update 
const d = new Date();
let time = d.getTime();
document.getElementById("css").setAttribute("href","css/style.css?v=" + time);

let cookies = decodeURIComponent(document.cookie);
let cookieArray = cookies.split('; ');
let passwordPassed = cookieArray.indexOf("dcAuth=1");
console.log(passwordPassed);
console.log(cookieArray);
if (passwordPassed>-1){
	var element = document.getElementById("protected");
	element.classList.remove("d-none");
} else {
	const setPWD = prompt("JELSZÓ:", "");
		if(setPWD === "h@rminc"){
		  d.setTime(d.getTime() + (60*60*1000));
		  let expires = "expires="+ d.toUTCString();
		  document.cookie = "dcAuth=1; " + expires + ";path=/";
		  document.cookie = "consent=1; " + expires + ";path=/";
		  var element = document.getElementById("protected");
		  element.classList.remove("d-none");
	} else {
		alert("Hibás jelszó!");
		location.reload();
	}
}

function logout(){
	  document.cookie = "dcAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	  document.cookie = "consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	  location.reload();
}
