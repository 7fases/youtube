if (document.cookie.indexOf("url") >= 0) {
// create usable cookies array
var pairs = document.cookie.split(";");
var cookies = [];
for( var c = 0; c < pairs.length; ++c)
{
    var pair = pairs[c].replace(/\s/g,"").split("=");
    cookies[ pair[0] ] = pair[1];
}

// create the iframe
document.getElementById("principal").src = cookies["url"];
// assign it the remembered url

// add the iframe to the div

// delete the cookie
document.cookie = "url=; expires=Thu, 02 Jan 1970 00:00:00 UTC";
}
