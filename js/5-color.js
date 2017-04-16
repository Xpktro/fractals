class Graph {
  constructor(canvasId, range=4, center={x: 0, y: 0}, canvasWidth=400, canvasHeight=400) {
    this.canvas        = document.getElementById(canvasId);
    this.canvas.width  = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context       = this.canvas.getContext('2d');
    this.imageData     = this.context.createImageData(canvasWidth, canvasHeight);
    this.range         = range;
    this.center        = center;
  }

  indexToCoord(index) {
    index /= 4;
    const coordinates  = {
      x: index % this.canvas.width,
      y: (this.canvas.height - 1) - Math.floor(index / this.canvas.width)
    };
    coordinates.x = (coordinates.x/this.canvas.width * this.range) - this.range/2 + this.center.x;
    coordinates.y = (coordinates.y/this.canvas.height * this.range) - this.range/2 + this.center.y;
    return coordinates;
  }

  render(predicate) {
    for(let i = 0; i < this.imageData.data.length; i += 4) {
      const result = predicate(this.indexToCoord(i))
      ,      onSet = result[0]
      , iterations = result[1]
      ,      color = onSet ? 0 : iterations/400;
      this.imageData.data[i]     = color * 2000;
      this.imageData.data[i + 1] = color * 255;
      this.imageData.data[i + 2] = color * 5000;
      this.imageData.data[i + 3] = 255;
    }
    this.context.putImageData(this.imageData, 0, 0);
  }
}


window.onload = () => {
  const graph = new Graph('canvas', 2.5, {x: -0.7, y: 0});
  graph.render((coordinates) => {
    let c_real      = coordinates.x
      , c_imaginary = coordinates.y
      , z_real      = c_real
      , z_imaginary = c_imaginary
      , iterations  = 400
      , i           = 0;

    for(; i < iterations; i++) {
      if(z_real ** 2 + z_imaginary ** 2 > 4) {
        return [false, i];
      }

      //                    z ** 2                                         + c
      let newz_real      = (z_real * z_real) - (z_imaginary * z_imaginary) + c_real
        , newz_imaginary = ((z_real * z_imaginary) * 2)                    + c_imaginary;

      z_real      = newz_real;
      z_imaginary = newz_imaginary;
    }
    return [true, i];
  });
}
