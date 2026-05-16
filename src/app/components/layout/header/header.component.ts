import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode = true;
  currentThemeColor = '#ea580c';

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('theme-color') || '#ea580c';
    
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.currentThemeColor = savedColor;
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
    if (!this.isDarkMode) {
      this.applyColorTheme(this.currentThemeColor);
    } else {
      this.removeColorTheme();
    }
  }

  setThemeColor(color: string): void {
    this.currentThemeColor = color;
    localStorage.setItem('theme-color', color);
    if (!this.isDarkMode) {
      this.applyColorTheme(color);
    }
  }

  onColorChange(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.setThemeColor(color);
  }

  private applyColorTheme(primaryHex: string): void {
    const container = this.adjustBrightness(primaryHex, 180); // Lighter
    const onContainer = this.adjustBrightness(primaryHex, -100); // Darker
    const surfaceDim = this.adjustBrightness(primaryHex, 200); // Extremely light for sections
    const surfaceContainer = this.adjustBrightness(primaryHex, 190); // Slightly darker than dim
    
    // Set with !important to ensure override of [data-theme="light"] block in CSS
    const root = document.documentElement;
    root.style.setProperty('--primary', primaryHex, 'important');
    root.style.setProperty('--surface-tint', primaryHex, 'important');
    root.style.setProperty('--outline', primaryHex, 'important');
    root.style.setProperty('--primary-container', container, 'important');
    root.style.setProperty('--on-primary-container', onContainer, 'important');
    root.style.setProperty('--surface-dim', surfaceDim, 'important');
    root.style.setProperty('--surface-container', surfaceContainer, 'important');
    
    // Also update background-rgb if possible for gradients
    const rgb = this.hexToRgb(primaryHex);
    if (rgb) {
       // We don't want to change the whole background to orange, 
       // but maybe some theme-aware RGB variables could be useful.
    }
  }

  private hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private adjustBrightness(hex: string, amt: number): string {
    let usePound = false;
    if (hex[0] === "#") {
      hex = hex.slice(1);
      usePound = true;
    }
    const num = parseInt(hex, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
  }

  private removeColorTheme(): void {
    const root = document.documentElement;
    root.style.removeProperty('--primary');
    root.style.removeProperty('--surface-tint');
    root.style.removeProperty('--outline');
    root.style.removeProperty('--primary-container');
    root.style.removeProperty('--on-primary-container');
    root.style.removeProperty('--surface-dim');
    root.style.removeProperty('--surface-container');
  }

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
    // Small delay to ensure scroll started before URL change
    setTimeout(() => {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }, 100);
  }
}
