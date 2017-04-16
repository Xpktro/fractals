window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;

  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = randColor();
  context.fill();
}

function randColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
