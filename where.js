  	var myLat = 0;
  	var myLong = 0;
  	var me = new google.maps.LatLng(myLat, myLong);
  	var mapOptions = {
		center: me, 
		zoom: 8, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map;
	var marker;
	var infowindow = new google.maps.InfoWindow();
	var places;
	var schedreq = new XMLHttpRequest();
function initialize() {
	map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
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
			marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!",
					icon: 'RT.png'
				});
				marker.setMap(map);
			alw = new google.maps.LatLng(42.395428, -71.142483)
			alewife = new google.maps.Marker({
					position: alw,
					title: "Alewife Station",
					icon: 'RT.png'
				});
				alewife.setMap(map);
			dav = new google.maps.LatLng(42.39674, -71.121815)
			davis = new google.maps.Marker({
					position: dav,
					title: "Davis Station",
					icon: 'RT.png'
				});
				davis.setMap(map);	
			por = new google.maps.LatLng(42.3884, -71.119149)
			porter = new google.maps.Marker({
					position: por,
					title: "Porter Square Station",
					icon: 'RT.png'
				});
				porter.setMap(map);		

			}

function schedule() {
//	schedreq.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json ",true);
	schedreq.open("GET", "http://developer.mbta.com/RT_Archive/RealTimeHeavyRailKeys.csv",true);
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
				marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!",
					icon: 'RT.png'
				});
				marker.setMap(map);
			}
		}
	}