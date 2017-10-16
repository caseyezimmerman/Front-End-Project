console.log("test")

$(document).ready(function() {

    // var googleMapsScript = document.head.children[1];
    // googleMapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`);
    // document.head.insertBefore(script, googleMapsScript);
    var head = document.head
    console.log(typeof(head.children[3]))
    console.dir(head)
        // head.childNodes.splice(0, 0, googleMapsScript)

    setTimeout(function() {
        // $('#myModal').modal('show')
    }, 2000)

    function initMap() {
        var uluru = {
            lat: -25.363,
            lng: 131.044
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        console.log(map)
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    var googleMapsScript = document.head.children[1];
    googleMapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`);
})