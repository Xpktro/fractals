window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;

  const imageData = context.createImageData(canvas.width, canvas.height);
  for(let i = 0; i < imageData.data.length; i += 1) {
      imageData.data[i] = Math.random() * 255;
  }
  context.putImageData(imageData, 0, 0);
}
