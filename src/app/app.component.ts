import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngAfterViewInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    // var canvas1 = <HTMLCanvasElement>document.getElementById('canvas1');
    // var canvas2 = <HTMLCanvasElement>document.getElementById('canvas2');

    if (canvas.getContext('2d')) {
      var ctx = canvas.getContext('2d');
      // var ctx1 = canvas1.getContext('2d');
      // var ctx2 = canvas2.getContext('2d');

      ctx.fillStyle = 'green'; //
      ctx.fillRect(25, 25, 50, 50);

      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.stroke();

      // ctx1.fillStyle = 'FFF';
      // ctx1.moveTo(0, 0);
      // ctx1.lineTo(150, 150);
      // ctx1.stroke();
    }
  }
}
