import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-find-us',
  imports: [CommonModule],
  templateUrl: './find-us.html',
  styleUrl: './find-us.css'
})
export class FindUs {
  email:string = 'Temsah.caravan@gmail.com';
  enableMapScroll = false;


  openDirections() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;

        const destinationLat = 30.059611;
        const destinationLng = 31.010531;

        const directionsUrl = `https://www.google.com/maps/dir/${currentLat},${currentLng}/${destinationLat},${destinationLng}`;
        window.open(directionsUrl, '_blank');
      },
      error => {
        alert('تعذر تحديد موقعك الحالي. يرجى التأكد من تفعيل GPS.');
      }
    );
  } else {
    alert('المتصفح لا يدعم خاصية تحديد الموقع الجغرافي.');
  }
  }

}
