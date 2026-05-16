import { Component, OnInit } from '@angular/core';
import { RESUME_DATA } from './data/resume.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  resume = RESUME_DATA;

  ngOnInit() {
    // Scroll to top on reload
    window.scrollTo(0, 0);
    
    // Clear hash from URL if it exists
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }
}
