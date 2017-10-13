console.log("test")

$(document).ready(function() {
    setTimeout(function() {
        $('#myModal').modal('show')
    }, 2000)

    function initMap() {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map($('#map'), {
            zoom: 4,
            center: uluru
        });
        console.log(map)
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    var googleMapsScript = document.createElement('script');
    googleMapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`);
    document.head.appendChild(googleMapsScript);
})