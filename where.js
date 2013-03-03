function main(){
	initialize();
	schedule();
}

function initialize() {
  if (navigator.geolocation){
  	myLat = position.coords.latitude;
  	myLong = position.coords.longitude;
  	var mapOptions = {
		center: new google.maps.LatLng(myLat, myLong), 
		zoom: 8, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
  }
  else{alert("Geolocation is not supported by this browser.");}
}

var schedreq = new XMLHttpRequest();
function schedule() {
	//Set up request
	schedreq.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json ",true);
	//Execute request
	schedreq.send(null);
	//Handle request (however you want)
	schedreq.onreadystatechange = callback;
	}
	
	//Handle the request
	function callback() {
		if (schedreq.readyState == 4 && schedreq.status == 200) {
			schedcode = schedreq.responseText;
			trips = JSON.parse(schedcode);
			alert(trips);
//			for(i=0;i<trips.length;i++){
//				
//			}
		}
	}