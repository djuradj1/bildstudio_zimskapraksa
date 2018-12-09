var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(-33.91722, 151.23064),
          mapTypeId: 'roadmap'
        });
       
       
        var marker = new google.maps.Marker({
          position:{lat: -33.915148, lng: 151.228053},
          map: map,
          icon:'images/marker.svg'
        });
      }


      