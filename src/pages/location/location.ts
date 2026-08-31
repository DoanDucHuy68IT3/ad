import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {

  private sanitizer = inject(DomSanitizer);

  office = {
    name: 'AIoT Technology',
    address: 'Hà Nội, Việt Nam',
    phone: '+84 123 456 789',
    email: 'contact@aicamera.vn',
    workingTime: 'Thứ 2 - Thứ 6: 08:00 - 17:30'
  };

  mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Hanoi,Vietnam&output=embed'
    );

}