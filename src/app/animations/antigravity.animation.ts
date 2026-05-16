import { trigger, style, animate, transition, keyframes } from '@angular/animations';

export const antigravityAnimation = trigger('antigravity', [
  transition('* => *', [
    animate(
      '{{time}} ease-in-out',
      keyframes([
        style({ transform: 'translateY(0) rotate(0)', offset: 0 }),
        style({ transform: 'translateY(-15px) rotate(1deg)', offset: 0.5 }),
        style({ transform: 'translateY(0) rotate(0)', offset: 1.0 })
      ])
    )
  ], { params: { time: '6s' } })
]);
