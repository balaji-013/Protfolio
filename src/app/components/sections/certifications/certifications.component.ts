import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html'
})
export class CertificationsComponent {
  @Input() certifications: any[] = [];
}
