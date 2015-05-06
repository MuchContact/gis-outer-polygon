function testConvexHullForRectangle(){
	var pointArr = generateTemplatePointArray();
	assertEquals(4, convexHull(pointArr).length);
}
function testConvexHullForFivePoints(){
	var pointArr = generateTemplatePointArray();
	pointArr.push([0.5, 0.5]);
	assertEquals(4, convexHull(pointArr).length);	
}
function generateTemplatePointArray(){
	var pointArr = [];
	pointArr.push([0,0]);
	pointArr.push([0,1]);
	pointArr.push([1,1]);
	pointArr.push([1,0]);
	return pointArr;
}
function testArray2String(){
	var pointArr = generateTemplatePointArray();
	assertEquals("0,0,0,1,1,1,1,0", pointArr.toString());
}