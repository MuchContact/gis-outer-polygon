function cross(o, a, b) {
   return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
}
 
/**
 * @param points An array of [X, Y] coordinates
 */
function convexHull(points) {
   points.sort(function(a, b) {
      return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
   });
 
   var lower = [];
   for (var i = 0; i < points.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
         lower.pop();
      }
      lower.push(points[i]);
   }
 
   var upper = [];
   for (var i = points.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
         upper.pop();
      }
      upper.push(points[i]);
   }
 
   upper.pop();
   lower.pop();
   return lower.concat(upper);
}
function convexWithAllPointsAsBreakPoint(points){
  points.sort(function(a, b) {
      return  a[0] - b[0];
   });  
  var upper = [];
  var lower = [];
  upper.push(points[0]);
  for (var i = 1; i < points.length; i++) {
      if (points[i][1]>=points[0][1]) {
         upper.push(points[i]);   
      }else{
         lower.push(points[i]);
      }
  }
  lower.reverse();
  return upper.concat(lower);
}