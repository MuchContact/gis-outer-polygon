var source;
function clear(){
	var result = source;
	source = [];
	return result;
}
function extractPointsFromVectorLayer(layer){
	source = [];
	for(var i=0; i< layer.features.length; i++){
		var feature = layer.features[i];
		var tmpArr = [];
		tmpArr.push(feature.geometry.x);
		tmpArr.push(feature.geometry.y);
		source.push(tmpArr);
	}
}
function generateWKTPolygon(){
	var polygonArr = hull(source, 1);
	var polygon = "POLYGON((";
	for (var i = 0; i < polygonArr.length-1; i++) {
		polygon += polygonArr[i][0] + " " + polygonArr[i][1] + ",";
	}
	var lastIndex = polygonArr.length-1;
	if(lastIndex>=0){
		polygon += polygonArr[lastIndex][0] + " " + polygonArr[lastIndex][1] ;
	}
	polygon += "))";
	return polygon;
}
function drawPolygon(polygonLayer){
	var polygon = generateWKTPolygon();
	polygonLayer.addFeatures([
		new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(polygon)),
	]);
}