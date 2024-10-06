import { Directive, ElementRef, EventEmitter, Output,  OnDestroy,  OnInit, Input } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[appVisible]', // The directive selector
})
export class VisibleDirective implements  OnDestroy, OnInit {
  @Output() isVisible = new EventEmitter<boolean>(); // Emits true/false when element is visible/invisible
  @Input() threshold =0.5;
  private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Initialize observer logic here
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
        });
      }, { threshold: [this.threshold] }); // Adjust threshold as needed
      console.log(`DIRECTIVE is initilized ${this.threshold}`);
      this.observer.observe(this.el.nativeElement); 
    }
  }
     // Initialize the IntersectionObserver
    //  afterNextRender(()=>{
    //   this.observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
    //     });
    //   }, { threshold: [0.1] }); // Adjust threshold as needed
  
    //   this.observer.observe(this.el.nativeElement);
    // }) // Start observing the element

  // onstructor(private el: ElementRef) {
  //   // Initialize the IntersectionObserver
  //   afterNextRender(()=>{
  //    this.observer = new IntersectionObserver((entries) => {
  //      entries.forEach((entry) => {
  //        this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
  //      });
  //    }, { threshold: [0.1] }); // Adjust threshold as needed
   

  // ngAfterViewInit() {
  //   // Initialize the IntersectionObserver
  //   if (isPlatformBrowser(this.platformId)) {
  //     // Only run this code in the browser
  //     if ('IntersectionObserver' in window) {
  //   this.observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
  //     });
  //   }, { threshold: [0.1] }); // Adjust threshold as needed

  //   this.observer.observe(this.el.nativeElement); // Start observing the element
  // }}
  // }
// ngAfterViewInit() {
  
    
//   }
  

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer when the directive is destroyed
    }
  }
}
