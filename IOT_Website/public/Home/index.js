//Weather Open Api
link="https://api.openweathermap.org/data/2.5/weather?q=London&appid=a921b229dfd9112aa1d4525c1a996fbc"
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.floor(obj.main.temp) - 273+"°C";
    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}
if(request.status==200){
    console.log("ERROR");
}
request.send();