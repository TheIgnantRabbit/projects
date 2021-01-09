window.onload = function() {
  
}

var map;
var markers = [];
var infoWindow;


function initMap() {
    var martinsFerry = { 
        lat: 40.0899046568735, 
        lng: -80.73391977826985  
    };
    map = new google.maps.Map(document.getElementById("map"), {
      center: martinsFerry,
      zoom: 11,
      mapTypeId: "roadmap",
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
  }

function searchStores() {
  var foundStores = [];
  var zipCode = document.getElementById('zip-code-input').value;
  if(zipCode){
    for (var store of stores){
      var postal = store['address']['postalCode'].substring(0,5);
      var city = store['address']['city'].substring(0,);
      if(postal == zipCode){
        foundStores.push(store);
  } else if (zipCode == city){
    foundStores.push(store);
  }
  }
  
    }else {
      foundStores = stores;
  }
  clearLocations();
  displayStores(foundStores);
  showStoresMarkers(foundStores);
  setOnClickListener();
  setOnEnterListener();
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function setOnClickListener() {
  var storeElements = document.querySelectorAll('.store-container');
  storeElements.forEach(function(element, index){
    element.addEventListener('click', function(){
      new google.maps.event.trigger(markers[index], "click");
    })
  })
}

function displayStores() {
  var storesHtml ='';
  for(var [index, store] of stores.entries()){
    var name = store["name"];
    var address = store['addressLines'];
    var phone = store['phoneNumber'];
    storesHtml += `
            <div class="store-container">
              <div class="store-container-background">
                <div class="store-info-container">
                  <div class="store-address">
                    <span><b>${name}</b></span>
                    <span>${address[0]}</span>
                    <span>${address[1]}</span>
                  </div>
                  <div class="store-phone-number">${phone}</div>
                </div>
                <div class="store-number-container">
                  <div class="store-number">
                    ${index+1}
                  </div>
                </div>
              </div>
            </div>
    `
    document.querySelector('.stores-list').innerHTML = storesHtml;
    
  }
}

function showStoresMarkers(stores){
  var bounds = new google.maps.LatLngBounds();
  for(var [index, store] of stores.entries()){
    var latlng = new google.maps.LatLng(
      store["coordinates"]["latitude"],
      store["coordinates"]["longitude"]);
    var name = store["name"];
    var address = store["addressLines"][0];
    var openStatusText = store["openStatusText"];
    var phoneNumber = store["phoneNumber"];
    const googleMaps = store["googleMaps"];
    bounds.extend(latlng);
    createMarker(latlng, name, address, openStatusText, phoneNumber, index+1, googleMaps)
  }
  map.fitBounds(bounds);
  
}

function createMarker(latlng, name, address, openStatusText, phoneNumber, index, googleMaps) {
  var html = `
      <div class="store-info-window">
        <div class="store-info-name">
          ${name}
        </div>
        <div class="store-info-status">
          ${openStatusText}
        </div>
        <div class="store-info-address">
          <div class="circle">
            <i class="fas fa-location-arrow"></i>
          </div>
          <a href="${googleMaps}" target="_blank">${address}</a>
        </div>
        <div class="store-info-phone">
          <div class="circle">
            <i class="fas fa-phone-alt"></i>
          </div>
          <a href="tel:${phoneNumber}">${phoneNumber}
        </div>
      </div>
  `
  var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            label: index.toString(),
          });
          google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
          });
          markers.push(marker);
}