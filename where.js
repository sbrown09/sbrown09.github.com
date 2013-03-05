  	var myLat = 0;
  	var myLong = 0;
  	var me = new google.maps.LatLng(myLat, myLong);
  	var mapOptions = {
		center: me, 
		zoom: 12, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map;
	var markers;
	var infowindow = new google.maps.InfoWindow();
	var places;
	var schedreq = new XMLHttpRequest();
	var Stations = [];
	var Branch = [];
	var infoWindow;
function initialize() {
	map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
	pt = new google.maps.LatLng(42.395428, -71.142483);
	markers = new google.maps.Marker({position: pt, title: "Alewife Station", icon: 'RT.png'});
	Stations[0] = pt;
	Stations[0]['name']="Alewife Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.39674, -71.121815);
	markers = new google.maps.Marker({position: pt, title: "Davis Station", icon: 'RT.png'});
	Stations[1] = pt;
	Stations[1]['name']="Davis Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.3884, -71.119149);
	markers = new google.maps.Marker({position: pt, title: "Porter Square Station", icon: 'RT.png'});
	Stations[2] = pt;
	Stations[2]['name']="Porter Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.373362, -71.118956);
	markers = new google.maps.Marker({position: pt, title: "Harvard Square Station", icon: 'RT.png'});
	Stations[3] = pt;
	Stations[3]['name']="Harvard Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.365486, -71.103802);
	markers = new google.maps.Marker({position: pt, title: "Central Square Station", icon: 'RT.png'});
	Stations[4] = pt;
	Stations[4]['name']="Central Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.36249079, -71.08617653);
	markers = new google.maps.Marker({position: pt, title: "Kendall/MIT Station", icon: 'RT.png'});
	Stations[5] = pt;
	Stations[5]['name']="Kendall/MIT Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.361166, -71.070628);
	markers = new google.maps.Marker({position: pt, title: "Charles/MGH Station", icon: 'RT.png'});
	Stations[6] = pt;
	Stations[6]['name']="Charles/MGH Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.35639457, -71.0624242);
	markers = new google.maps.Marker({position: pt, title: "Park St. Station", icon: 'RT.png'});
	Stations[7] = pt;
	Stations[7]['name']="Park St. Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.355518, -71.060225);
	markers = new google.maps.Marker({position: pt, title: "Downtown Crossing Station", icon: 'RT.png'});
	Stations[8] = pt;
	Stations[8]['name']="Downtown Crossing Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.352271, -71.055242);
	markers = new google.maps.Marker({position: pt, title: "South Station", icon: 'RT.png'});
	Stations[9] = pt;
	Stations[9]['name']="South Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.342622, -71.056967);
	markers = new google.maps.Marker({position: pt, title: "Broadway Station", icon: 'RT.png'});
	Stations[10] = pt;
	Stations[10]['name']="Broadway Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.330154, -71.057655);
	markers = new google.maps.Marker({position: pt, title: "Andrew Station", icon: 'RT.png'});
	Stations[11] = pt;
	Stations[11]['name']="Andrew Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.320685, -71.052391);
	markers = new google.maps.Marker({position: pt, title: "JFK/UMass Station", icon: 'RT.png'});
	Stations[12] = pt;
	Stations[12]['name']="JFK/UMass Station";
	Branch[0] = pt;
	Branch[0]['name']="JFK/UMass Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.275275, -71.029583);
	markers = new google.maps.Marker({position: pt, title: "North Quincy Station", icon: 'RT.png'});
	Stations[13] = pt;
	Stations[13]['name']="North Quincy Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.31129, -71.05333);
	markers = new google.maps.Marker({position: pt, title: "Savin Hill Station", icon: 'RT.png'});
	Branch[1] = pt;
	Branch[1]['name']="Savin Hill Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.300093, -71.061667);
	markers = new google.maps.Marker({position: pt, title: "Fields Corner Station", icon: 'RT.png'});
	Branch[2] = pt;
	Branch[2]['name']="Fields Corner Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.2665139, -71.0203369);
	markers = new google.maps.Marker({position: pt, title: "Wollaston Station", icon: 'RT.png'});
	Stations[14] = pt;
	Stations[14]['name']="Wollaston Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.251809, -71.005409);
	markers = new google.maps.Marker({position: pt, title: "Quincy Center Station", icon: 'RT.png'});
	Stations[15] = pt;
	Stations[15]['name']="Quincy Center Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.29312583, -71.06573796);
	markers = new google.maps.Marker({position: pt, title: "Shawmut Station", icon: 'RT.png'});
	Branch[3] = pt;
	Branch[3]['name']="Shawmut Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.233391, -71.007153);
	markers = new google.maps.Marker({position: pt, title: "Quincy Adams Station", icon: 'RT.png'});
	Stations[16] = pt;
	Stations[16]['name']="Quincy Adams Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.284652, -71.064489);
	markers = new google.maps.Marker({position: pt, title: "Ashmont Station", icon: 'RT.png'});
	Branch[4] = pt;
	Branch[4]['name']="Ashmont Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.2078543, -71.0011385);
	markers = new google.maps.Marker({position: pt, title: "Braintree Station", icon: 'RT.png'});
	Stations[17] = pt;
	Stations[17]['name']="Braintree Station";
	markers.setMap(map);
	
	redLine = new google.maps.Polyline({
		path:Stations,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	})
	redLine.setMap(map);
	branch = new google.maps.Polyline({
		path:Branch,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	})
	branch.setMap(map);
	
	getme();
}

function getme(){
	if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLong = position.coords.longitude;
			renderMap();
			schedule();
		});
				
    }
  else{alert("Geolocation is not supported by this browser.");}
}


function renderMap(){
			me = new google.maps.LatLng(myLat, myLong);
			map.panTo(me);
			markers = new google.maps.Marker({
					position: me,
					title: "Here I Am!",
				});
				markers.setMap(map);

//			if (closestPt != null) {
//				closestLine = new google.maps.Polyline({
//					path: [me, closestPt],
//					strokeColor: "#000000",
//					strokeOpacity: 0.5,
//					strokeWeight: 15
//				});
//				closestLine.setMap(map);
//			}
Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

var lat2 = myLat; 
var lon2 = myLong;
dist = 0;
for(i = 0; i<Stations.length; i++){
var lat1 = Stations[i]['ib']; 
var lon1 = Stations[i]['jb']; 

var R = 6371; // km 
//has a problem with the .toRad() method below.
var x1 = lat2-lat1;
var dLat = x1.toRad();  
var x2 = lon2-lon1;
var dLon = x2.toRad();  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; 
var closest;
var closest1;
var closest2;
var dist = 999999;
if(d < dist){
	closest1 = Stations[i]['name'];
	dist = d;
	alert(closest1 + " is " +dist);
}
}
for(j = 0; j< Branch.length; j++){
var lat1 = Branch[j]['ib']; 
var lon1 = Branch[j]['jb']; 

var R = 6371; // km 
//has a problem with the .toRad() method below.
var x1 = lat2-lat1;
var dLat = x1.toRad();  
var x2 = lon2-lon1;
var dLon = x2.toRad();  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var q = R * c; 
var distance = 100;
if(q < distance){
	closest2 = Branch[j]['name'];
	distance = q;
}
alert(q + closest2);
}
if(closest1>closest2){
	closest = closest1;
}
if(closest1<closest2){
	closest = closest2;
}

			infoWindow = new google.maps.InfoWindow({
				content: "Closest T Station is " + closest + " and it is " + dist + " miles away.",
				position: me
			});
			infoWindow.open(map);
//			google.maps.event.addListener(markers, 'click', function() {
//				infowindow.open(map,markers);
  //			});
}

function schedule() {
	schedreq.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json ",true);
	schedreq.send(null);
	schedreq.onreadystatechange = callback;
	alert("sent")
	}

	function callback() {
		if (schedreq.readyState == 4 && schedreq.status == 200) {
			schedcode = schedreq.responseText;
			trips = JSON.parse(schedcode);
			alert(trips);

		}
	}