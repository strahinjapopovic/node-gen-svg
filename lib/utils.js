function generateSVG(data) {
  const shape = data.shape;
  const circle =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${data.bgcolor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.txt}</text>
  </svg>`;

  const triangle =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points="150,10 250,190 50,190" x="150" y="120" fill="${data.bgcolor}"/>
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.color}">${data.txt}</text>
  </svg>`;

  const square =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect width="150" height="150" x="75" y="25" fill="${data.bgcolor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.txt}</text>
  </svg>`;

  switch (shape) {
    case "circle":
      return circle
      break;
    case "triangle":
      return triangle
      break;
    case "square":
      return square
      break;
    default:
      return circle;
  }
}

export default generateSVG;