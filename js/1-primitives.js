window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;

  context.lineWidth = 5;
  context.strokeStyle = randColor();
  context.beginPath();
  context.moveTo(50, 20);
  context.lineTo(120, 150);
  context.stroke();
}

function randColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
