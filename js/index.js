function clicked() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/starcakes-datapacks/kxffie");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById("downloadData").innerHTML = this.response.value;
    }
    xhr.send();
}

function loaded() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/starcakes-datapacks/kxffie");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById("downloadData").innerHTML = this.response.value;
    }
    xhr.send();
}