function transform(a) {
  return (2 * Math.PI * a) / 360;
}
function fixDecimal(n) {
  return Math.floor(n * 100) / 100;
}
function getSpot(
  n = 1,
  radius = 1, // 半径
  center = { x: radius, y: radius }, // 中心点
  start = { x: center.x, y: center.x + radius } // 第一个均分点
) {
  const equalAngle = 360 / n; // 均分角度
  const res = [start]; //  返回结果
  let index = 0; // 索引
  let calculate = [[1, 1], [1, -1], [-1, -1], [-1, 1]]; // 区域
  outer: while (++index < n) {
    let curAngle = index * equalAngle;

    if (curAngle === 90) {
      res[index] = {
        x: center.x + radius,
        y: center.y
      };
      continue outer;
    }
    if (curAngle === 180) {
      res[index] = {
        x: center.x,
        y: center.y - radius
      };
      continue outer;
    }
    if (curAngle === 270) {
      res[index] = {
        x: center.x - radius,
        y: center.y
      };
      continue outer;
    }
    if (curAngle === 360) {
      res[index] = {
        x: center.x,
        y: center.y + radius
      };
      continue outer;
    }
    let realAngle =
      curAngle % 180 > 90 ? 180 - (curAngle % 180) : curAngle % 180;
    let deviationX = Math.sin(transform(realAngle)) * radius;
    let deviationY = deviationX / Math.tan(transform((180 - realAngle) / 2));
    let cal = calculate[~~(curAngle / 90)];
    res[index] = {
      x: fixDecimal(center.x + cal[0] * deviationX),
      y: fixDecimal(center.y + cal[1] * deviationY)
    };
  }
  return res;
}

console.log(getSpot(1));
