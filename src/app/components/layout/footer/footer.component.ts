import { Component } from '@angular/core';
import { RESUME_DATA } from '../../../data/resume.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  resume = RESUME_DATA;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.clearHash();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.clearHash();
    }
  }

  private clearHash(): void {
    setTimeout(() => {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }, 100);
  }
}
