function main(){
	initialize();
	schedule();
}

function initialize() {
  if (navigator.geolocation){
  	var myLat = position.coords.latitude;
  	var myLng = position.coords.longitude;
	var request = new XMLHttpRequest();
	var me = new google.maps.LatLng(myLat, myLng);
	var myOptions = {
		zoom: 8 ,
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var me = new google.maps.LatLng(myLat, myLng);
	map.panTo(me);
				marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);

				// Open info window on click of marker
			//	google.maps.event.addListener(marker, 'click', function() {
			//		infowindow.setContent(marker.title);
			//		infowindow.open(map, marker);
			//	});
//
				// Calling Google Places API
//				var request = {
//					location: me,
//					radius: '500',
//					types: ['food']
//				};
//				service = new google.maps.places.PlacesService(map);
//				service.search(request, callback);
	};
  else{alert("Geolocation is not supported by this browser.");}
  	
//	var mapOptions = {
//		center: new google.maps.LatLng(myLat, myLong), 
//		zoom: 8, 
//		mapTypeId: google.maps.MapTypeId.ROADMAP
//	};
//	var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
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