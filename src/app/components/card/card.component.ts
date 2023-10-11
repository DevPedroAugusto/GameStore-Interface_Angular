import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','./card.componen.ajust.css']
})
export class CardComponent {
  @ViewChild('mouseTarget', { static: false }) mouseTarget!: ElementRef | undefined;

  @Input()
  gameName:string= ""

  @Input()
  gameDescription:string= ""

  @Input()
  gameCover:string= ""

  @Input()
  gameLabel:string =""

  @Input()
  gameType:string = "type"

  @Input()
  gamePrice:string = "price"

  ngAfterViewInit() {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngOnInit(){
    this.gameCover = ` assets/capas-mega-drive/${this.gameName}.jpg`
    this.gameLabel = this.gameName
  }

  private isMouseDown: boolean = false;
  private mouseX: number = 0;
  private mouseY: number = 0;

  onMouseEnter(){
    // console.log("mouse entrou");
    if (this.mouseTarget) {
      this.mouseTarget.nativeElement.style.cursor = 'grab';
    }
  }

  onMouseLeave(){
    console.log("Mouse saiu. Então uma hora ele entrou rs")
    if (this.mouseTarget) {
      this.mouseTarget.nativeElement.style.cursor = "pointer"
      this.mouseTarget.nativeElement.style.backgroundColor = "white"
    }
  }

  onMouseDown(event: MouseEvent){
    console.log("Pressionou")

    this.isMouseDown = true;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (this.mouseTarget){
      this.mouseTarget.nativeElement.style.cursor = "grabbing"
      this.mouseTarget.nativeElement.style.opacity = "90%"
    }
  }

  onMouseUp(){
    console.log("Soltou")
    this.isMouseDown = false;
    if (this.mouseTarget){
      this.mouseTarget.nativeElement.style.cursor = "grab"
      this.mouseTarget.nativeElement.style.opacity = "100%"
    }
  }

  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown && this.mouseTarget) {
      const deltaX = event.clientX - this.mouseX;
      const deltaY = event.clientY - this.mouseY;

      const currentLeft = parseInt(this.mouseTarget.nativeElement.style.left || '0', 10);
      const currentTop = parseInt(this.mouseTarget.nativeElement.style.top || '0', 10);

      const bodyCard = this.mouseTarget.nativeElement.parentElement;

      const containerWidth = bodyCard.offsetWidth;
      const containerHeight = bodyCard.offsetHeight;

      const newLeft = currentLeft + deltaX;
      const newTop = currentTop + deltaY;

      if (newLeft >= 0 && newLeft + this.mouseTarget.nativeElement.offsetWidth <= containerWidth) {
        this.mouseTarget.nativeElement.style.left = newLeft + 'px';
      }

      if (newTop >= 0 && newTop + this.mouseTarget.nativeElement.offsetHeight <= containerHeight) {
        this.mouseTarget.nativeElement.style.top = newTop + 'px';
      }

      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

}
