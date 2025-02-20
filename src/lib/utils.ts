import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollTo(elementId: string) {
  console.log('Attempting to scroll to:', elementId);
  
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      console.log('Element found, scrolling...');
      // Account for fixed header if you have one
      const yOffset = -80; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else {
      console.log(`Element with id="${elementId}" not found!`);
    }
  }, 100);
}
