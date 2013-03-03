function main(){
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
	initialize();
//	schedule();
}

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
		});
				
    }
  else{alert("Geolocation is not supported by this browser.");}
}


function renderMap(){
			me = new google.maps.LatLng(myLat, myLong);
			map.panTo(me);
			marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);


				// Open info window on click of marker
//				google.maps.event.addListener(marker, 'click', function() {
//					infowindow.setContent(marker.title);
//					infowindow.open(map, marker);
//				});

				// Calling Google Places API
//				var schedreq = {
//					location: me,
//					radius: '500',
//					types: ['Red']
//				};
//				service = new google.maps.places.PlacesService(map);
//				service.search(schedreq, callback);
			}

//function schedule() {
//	//Set up request
//	schedreq.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json ",true);
//	//Execute request
//	schedreq.send(null);
//	//Handle request (however you want)
//	schedreq.onreadystatechange = callback;
//	}
//	
//	//Handle the request
//	function callback() {
//		if (schedreq.readyState == 4 && schedreq.status == 200) {
//			schedcode = schedreq.responseText;
//			trips = JSON.parse(schedcode);
//			alert(trips);
//			for(i=0;i<trips.length;i++){
//				
//			}
//		}
//	}