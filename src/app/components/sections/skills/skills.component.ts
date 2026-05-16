import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @Input() skills: any[] = [];
  
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  topSkills = [
    { name: '.NET Core & Framework', value: 95, current: 0 },
    { name: 'Angular Architecture', value: 90, current: 0 },
    { name: 'Azure & CI/CD Pipelines', value: 85, current: 0 }
  ];

  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.isVisible) {
        this.isVisible = true;
        this.animateSkills();
      }
    }, { threshold: 0.2 });

    observer.observe(this.skillsSection.nativeElement);
  }

  animateSkills(): void {
    this.topSkills.forEach(skill => {
      const duration = 2000;
      const startTime = performance.now();
      
      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        
        skill.current = Math.floor(easeProgress * skill.value);
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    });
  }
}
