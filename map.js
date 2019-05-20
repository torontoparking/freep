

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(43.6531, -79.3773),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < park_data.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(park_data[i].lat_long[0], park_data[i].lat_long[1]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(park_data[i].hours_rate[0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }





    geocoder = new google.maps.Geocoder();

function codeAddress() {

    //In this case it gets the address from an element on the page, but obviously you  could just pass it to the method instead
    //var address = document.getElementById( 'address' ).value;
    var address = 'Temperance St.'

    geocoder.geocode( { 'address' : address }, function( results, status ) {
        if( status == google.maps.GeocoderStatus.OK ) {

            //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
            map.setCenter( results[0].geometry.location );
            var marker = new google.maps.Marker( {
                map     : map,
                position: results[0].geometry.location
            } );
        } else {
            alert( 'Geocode was not successful for the following reason: ' + status );
        }
    } );
}

codeAddress();

}