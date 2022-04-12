import { Component, EventEmitter, Inject, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
declare const google: any;

import { Output } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

  @Output() Pos = new EventEmitter<{Lat:number, Lon: number}>();

  editPosition(Lat: number, Lon: number) {
    this.Pos.emit({Lat, Lon});
  }

  SearchPlacesForm :NgForm[] =  [];

  public shippingAddress: string = "";

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) {

  }

  ngOnInit(): void {
    this.loadMap();

  }

  private loadMap() {
    this.initMap();
  }

  private loadScript(url: any) {

    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    })

  }

  initMap() {

    let infoWindow = new google.maps.InfoWindow;
    const map = new google.maps.Map(this.document.getElementById("map") as HTMLInputElement, {
      center: {
        lat: 21.2046704,
        lng: 72.8358745
      },
      zoom: 13
    });

    const locationButton = document.createElement("button");

    locationButton.textContent = "Ma position";
    locationButton.classList.add("custom-map-control-button");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            //infoWindow.setPosition(pos);
            //infoWindow.setContent("Location found.");
            marker.setPosition(pos);
            marker.setVisible(true);
            infoWindow.open(map);
            map.setCenter(pos);

            //Recuperation des informations de l'adresse pour l'inserer dans les champs lat et lon
            this.editPosition(pos.lat,pos.lng)

          },
          () => {
            //handleLocationError(true, infoWindow, map.getCenter()!);
          }
        );
      } else {
        // Browser doesn't support Geolocation
        //handleLocationError(false, infoWindow, map.getCenter()!);
      }
    });


    const input = this.document.getElementById("txtSearchPlaces") as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.bindTo("bounds", map); // Set the data fields to return when the user selects a place.

    autocomplete.setFields([
      "address_components",
      "geometry",
      "icon",
      "name"
    ]);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = this.document.getElementById("infowindow-content") as HTMLInputElement;
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        alert('No details available for input:' + input.value);
        return;
      } // If the place has a geometry, then present it on a map.

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);

      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      let address = "";

      //Recuperation des informations de l'adresse pour l'inserer dans les champs lat et lon
      this.editPosition(place.geometry.location.lat(),place.geometry.location.lng())

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
          "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
          "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
          ""
        ].join(" ");
      }

      const icon:any = "place-icon"
      //infowindowContent.children[icon].src = place.icon;
      //infowindowContent.children["place-name"].textContent = place.name;
      //infowindowContent.children["place-address"].textContent = address;
      //infowindow.open(map, marker);

    });

  }


}
