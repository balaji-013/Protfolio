import { Component, Input } from '@angular/core';
import { antigravityAnimation } from '../../../animations/antigravity.animation';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [antigravityAnimation]
})
export class ExperienceComponent {
  @Input() experience: any[] = [];
}
