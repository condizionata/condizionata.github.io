var myElement = document.getElementById("img1");
let pz = new PinchZoom(myElement);
pz.enable();
// var pz = new PinchZoom.default(myElement, {
//     draggableUnzoomed: false,
//     minZoom: 1,
//     onZoomStart: function(object, event){
//         // Do something on zoom start
//         // You can use any Pinchzoom method by calling object.method()
//     },
//     onZoomEnd: function(object, event){
//         // Do something on zoom end
//     }
// })