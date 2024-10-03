import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy, afterNextRender } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[appVisible]', // The directive selector
})
export class VisibleDirective implements AfterViewInit, OnDestroy {
  @Output() isVisible = new EventEmitter<boolean>(); // Emits true/false when element is visible/invisible
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {
    //  // Initialize the IntersectionObserver
    //  afterNextRender(()=>{
    //   this.observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
    //     });
    //   }, { threshold: [0.1] }); // Adjust threshold as needed
  
    //   this.observer.observe(this.el.nativeElement);}) // Start observing the element
  }

  // onstructor(private el: ElementRef) {
  //   // Initialize the IntersectionObserver
  //   afterNextRender(()=>{
  //    this.observer = new IntersectionObserver((entries) => {
  //      entries.forEach((entry) => {
  //        this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
  //      });
  //    }, { threshold: [0.1] }); // Adjust threshold as needed
   

  ngAfterViewInit() {
    // Initialize the IntersectionObserver
    // afterNextRender(()=>{
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible.emit(entry.isIntersecting); // Emit true if visible, false otherwise
      });
    }, { threshold: [0.1] }); // Adjust threshold as needed

    this.observer.observe(this.el.nativeElement); // Start observing the element
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer when the directive is destroyed
    }
  }
}
