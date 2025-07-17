function circleArea(r) {
  if (typeof r !== 'number' || r < 0) throw new Error('Invalid radius');
  return Math.PI * r * r;
}

module.exports = circleArea;
