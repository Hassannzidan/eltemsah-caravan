import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideMapPin } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-find-us',
  imports: [CommonModule, TranslateModule, NgIconsModule],
  templateUrl: './find-us.html',
  styleUrl: './find-us.css',
  viewProviders: [
    provideIcons({
      lucideMapPin,
    }),
  ],
})
export class FindUs {
  email: string = 'Temsah.caravan@gmail.com';
  enableMapScroll = false;

  destinationLat = 30.059611;
  destinationLng = 31.010531;

  // كشف نوع الجهاز
  isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  isAndroid(): boolean {
    return /Android/.test(navigator.userAgent);
  }

  openMapApp() {
    const lat = this.destinationLat;
    const lng = this.destinationLng;

    if (this.isIOS()) {
      // iOS - تطبيق Apple Maps أو Google Maps (لو موجود)
      window.location.href = `maps://?q=${lat},${lng}`;
    } else if (this.isAndroid()) {
      // Android - تطبيق Google Maps مباشرة
      window.location.href = `geo:${lat},${lng}?q=${lat},${lng}`;
    } else {
      // Fallback - المتصفح
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }
  }

  openDirections() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;

          const destLat = this.destinationLat;
          const destLng = this.destinationLng;

          if (this.isIOS()) {
            window.location.href = `maps://?saddr=${currentLat},${currentLng}&daddr=${destLat},${destLng}`;
          } else if (this.isAndroid()) {
            window.location.href = `google.navigation:q=${destLat},${destLng}`;
          } else {
            const url = `https://www.google.com/maps/dir/${currentLat},${currentLng}/${destLat},${destLng}`;
            window.open(url, '_blank');
          }
        },
        () => {
          alert('تعذر تحديد موقعك الحالي. يرجى التأكد من تفعيل GPS.');
        }
      );
    } else {
      alert('المتصفح لا يدعم خاصية تحديد الموقع الجغرافي.');
    }
  }
  // openDirections() {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const currentLat = position.coords.latitude;
  //       const currentLng = position.coords.longitude;

  //       const destinationLat = 30.059611;
  //       const destinationLng = 31.010531;

  //       const directionsUrl = `https://www.google.com/maps/dir/${currentLat},${currentLng}/${destinationLat},${destinationLng}`;
  //       window.open(directionsUrl, '_blank');
  //     },
  //     error => {
  //       alert('تعذر تحديد موقعك الحالي. يرجى التأكد من تفعيل GPS.');
  //     }
  //   );
  // } else {
  //   alert('المتصفح لا يدعم خاصية تحديد الموقع الجغرافي.');
  // }
  // }
}
