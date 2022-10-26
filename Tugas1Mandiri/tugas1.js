document.getElementsByTagName("head")[0].appendChild
(document.createElement("title"))
document.getElementsByTagName("title")[0].innerText = "Tugas1"

var username = document.createElement("input");
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Username");
document.body.appendChild(username);

document.write("<br>")

var password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Password");
document.body.appendChild(password);


document.write("<br><br>")

let body = document.getElementsByTagName("body")[0];
let btn = document.createElement("button");
body.appendChild(btn);
btn.innerText = "Login"

