import React, { PureComponent } from 'react'
import Styles from './canvas.css'
import url from '../../assets/favicon.ico'

class Canvas extends PureComponent {
  constructor() {
    super()
    this.state = {
      canvasDom: React.createRef(),
      canvasDom2: React.createRef(),
      canvasDom3: React.createRef(),
      canvasDom4: React.createRef(),
      h1Ref: React.createRef(),
    }
  }
  componentDidMount() {
    this.canvas1()
    this.canvas2()
    this.canvas3()
    this.canvas4()
  }

  canvas1() {
    let canvas = this.state.canvasDom.current
    canvas.width = 800
    canvas.height = 600
    let context = canvas.getContext('2d')

    context.beginPath();
    context.rect(0, 0, 800, 600);
    context.fillStyle = "#AA9033";

    context.fill()

    context.beginPath()
    for (let i = 0; i < 20; i++) {
      this.drawWhiteRect(context, 200 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i);
      this.drawBlackRect(context, 205 + 10 * i, 105 + 10 * i, 390 - 20 * i, 390 - 20 * i);
    }

    context.beginPath();
    context.rect(395, 295, 5, 5);
    context.fillStyle = "black";
    context.lineWidth = 5;

    context.fill()
    context.stroke()
  }

  canvas2() {
    let canvas = this.state.canvasDom2.current
    canvas.width = 800
    canvas.height = 400
    let context = canvas.getContext('2d')

    context.beginPath()
    context.moveTo(100, 30)
    context.lineTo(200, 30)
    context.lineCap = 'butt'
    context.lineWidth = 20;
    context.strokeStyle = "#000";
    context.stroke()

    context.beginPath()
    context.moveTo(100, 100)
    context.lineTo(200, 100)
    context.lineCap = 'round'
    context.lineWidth = 20;
    context.strokeStyle = "#000";
    context.stroke()

    context.beginPath()
    context.moveTo(100, 200)
    context.lineTo(200, 200)
    context.lineCap = 'square'
    context.lineWidth = 20;
    context.strokeStyle = "#000";
    context.stroke()

    context.beginPath()
    context.moveTo(99.5, 0)
    context.lineTo(99.5, 300)
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.stroke()

    context.beginPath()
    context.moveTo(199.5, 0)
    context.lineTo(199.5, 300)
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.stroke()
  }

  canvas3() {
    let canvas = this.state.canvasDom3.current
    canvas.width = 800
    canvas.height = 600
    let context = canvas.getContext('2d')

    context.beginPath()
    context.rect(100, 100, 300, 300)

    let grd = context.createLinearGradient(100, 100, 400, 400)
    grd.addColorStop(0, '#000')
    grd.addColorStop(0.5, '#fff')
    grd.addColorStop(1, '#000')

    context.fillStyle = grd

    context.fill()
  }

  canvas4() {
    let canvas = this.state.canvasDom4.current
    canvas.width = 800
    canvas.height = 600
    let context = canvas.getContext('2d')

    let img = new Image()
    img.src = url
    img.onload = function () {
      let pattern = context.createPattern(img, 'repeat')
      context.fillStyle = pattern
      context.fillRect(0, 0, 800, 600)
    }
  }

  drawBlackRect(cxt, x, y, width, height) {
    cxt.beginPath();
    cxt.rect(x, y, width, height);

    cxt.lineWidth = 5;
    cxt.strokeStyle = "black";

    cxt.stroke();
  }
  drawWhiteRect(cxt, x, y, width, height) {
    cxt.beginPath();
    cxt.rect(x, y, width, height);

    cxt.lineWidth = 5;
    cxt.strokeStyle = "white";

    cxt.stroke();
  }

  render() {
    return (
      <div>
        <h1 ref={this.state.h1Ref}>CANVAS</h1>
        <canvas ref={this.state.canvasDom} className={Styles.wrap}>你的浏览器不支持canvas</canvas>
        <canvas ref={this.state.canvasDom2} className={Styles.wrap}>你的浏览器不支持canvas</canvas>
        <canvas ref={this.state.canvasDom3} className={Styles.wrap}>你的浏览器不支持canvas</canvas>
        <canvas ref={this.state.canvasDom4} className={Styles.wrap}>你的浏览器不支持canvas</canvas>
      </div>
    )
  }
}

export default Canvas