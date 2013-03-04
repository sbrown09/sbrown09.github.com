  	var myLat = 0;
  	var myLong = 0;
  	var me = new google.maps.LatLng(myLat, myLong);
  	var mapOptions = {
		center: me, 
		zoom: 8, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map;
	var markers;
	var infowindow = new google.maps.InfoWindow();
	var places;
	var schedreq = new XMLHttpRequest();
function initialize() {
	map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
	pt = new google.maps.LatLng(42.395428, -71.142483);
				markers.push(new google.maps.Marker({position: pt, title: "Alewife Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.39674, -71.121815);
				markers.push(new google.maps.Marker({position: pt, title: "Davis Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.3884, -71.119149);
				markers.push(new google.maps.Marker({position: pt, title: "Porter Square Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.373362, -71.118956);
				markers.push(new google.maps.Marker({position: pt, title: "Harvard Square Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.365486, -71.103802);
				markers.push(new google.maps.Marker({position: pt, title: "Central Square Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.36249079, -71.08617653);
				markers.push(new google.maps.Marker({position: pt, title: "Kendall/MIT Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.361166, -71.070628);
				markers.push(new google.maps.Marker({position: pt, title: "Charles/MGH Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.35639457, -71.0624242);
				markers.push(new google.maps.Marker({position: pt, title: "Park St. Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.355518, -71.060225);
				markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.352271, -71.055242);
				markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.342622, -71.056967);
				markers.push(new google.maps.Marker({position: pt, title: "Broadway Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.330154, -71.057655);
				markers.push(new google.maps.Marker({position: pt, title: "Andrew Station", icon: 'RT.png'}));
					redStations.push(pt);
				pt = new google.maps.LatLng(42.320685, -71.052391);
				markers.push(new google.maps.Marker({position: pt, title: "JFK/UMass Station", icon: 'RT.png'}));
					redStations.push(pt);
					redBranchAshmont.push(pt);
					redBranchBraintree.push(pt);
				pt = new google.maps.LatLng(42.275275, -71.029583);
				markers.push(new google.maps.Marker({position: pt, title: "North Quincy Station", icon: 'RT.png'}));
					redBranchBraintree.push(pt);
				pt = new google.maps.LatLng(42.31129, -71.053331);
				markers.push(new google.maps.Marker({position: pt, title: "Savin Hill Station", icon: 'RT.png'}));
					redBranchAshmont.push(pt);
				pt = new google.maps.LatLng(42.300093, -71.061667);
				markers.push(new google.maps.Marker({position: pt, title: "Fields Corner Station", icon: 'RT.png'}));
					redBranchAshmont.push(pt);
				pt = new google.maps.LatLng(42.2665139, -71.0203369);
				markers.push(new google.maps.Marker({position: pt, title: "Wollaston Station", icon: 'RT.png'}));
					redBranchBraintree.push(pt);
				pt = new google.maps.LatLng(42.251809, -71.005409);
				markers.push(new google.maps.Marker({position: pt, title: "Quincy Center Station", icon: 'RT.png'}));
					redBranchBraintree.push(pt);
				pt = new google.maps.LatLng(42.29312583, -71.06573796);
				markers.push(new google.maps.Marker({position: pt, title: "Shawmut Station", icon: 'RT.png'}));
					redBranchAshmont.push(pt);
				pt = new google.maps.LatLng(42.233391, -71.007153);
				markers.push(new google.maps.Marker({position: pt, title: "Quincy Adams Station", icon: 'RT.png'}));
					redBranchBraintree.push(pt);
				pt = new google.maps.LatLng(42.284652, -71.064489);
				markers.push(new google.maps.Marker({position: pt, title: "Ashmont Station", icon: 'RT.png'}));
					redBranchAshmont.push(pt);
				pt = new google.maps.LatLng(42.2078543, -71.0011385);
				markers.push(new google.maps.Marker({position: pt, title: "Braintree Station", icon: 'RT.png'}));
					redBranchBraintree.push(pt);
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
					icon: 'RT.png'
				});
				markers.setMap(map);
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
			for(i=0;i<trips.length;i++){
				spot = new google.maps.LatLng(myLat, myLong);
				map.panTo(me);
				markers = new google.maps.Marker({
					position: me,
					title: "Here I Am!",
					icon: 'RT.png'
				});
				markers.setMap(map);
			}
		}
	}