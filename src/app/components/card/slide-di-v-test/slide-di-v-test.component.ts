import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-di-v-test',
  templateUrl: './slide-di-v-test.component.html',
  styleUrls: ['./slide-di-v-test.component.css']
})

export class SlideDiVTestComponent {
  @ViewChild('minhaDiv') minhaDiv!: ElementRef;
  private isDragging: boolean = false;
  private initialX!: number;
  private offsetLeft!: number;
  private maxWidth: number = 200; // Defina o tamanho máximo desejado

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialX = event.clientX;
    this.offsetLeft = this.minhaDiv.nativeElement.offsetLeft;

    // Defina o estilo do cursor como 'grabbing'
    // this.minhaDiv.nativeElement.style.cursor = 'grabbing';
    this.minhaDiv.nativeElement.style.cursor = 'grab';


    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.initialX;
      const newLeft = this.offsetLeft + dx;

      if (newLeft >= 0 && newLeft <= this.maxWidth) {
        this.minhaDiv.nativeElement.style.left = newLeft + 'px';
      }
    }
  }

  onMouseUp() {
    this.isDragging = false;

    // Restaure o estilo do cursor para 'pointer'
    this.minhaDiv.nativeElement.style.cursor = 'grabbing';

    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseEnter() {
    // Adicione a classe 'grab' quando o mouse entra no elemento
    this.minhaDiv.nativeElement.style.cursor = 'grab';
  }

  onMouseLeave() {
    // Remova a classe 'grab' quando o mouse sai do elemento
    this.minhaDiv.nativeElement.style.cursor = 'pointer';
  }
}
