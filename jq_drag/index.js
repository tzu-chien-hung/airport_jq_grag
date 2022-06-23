var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
window.onload = function () {
    init();
}

function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("49458D9D2E0848CA8716D52A38D4534D");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Untitled1();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
    stage.addChild(exportRoot);

    // var location = exportRoot.location;
    // location.addEventListener("click",()=>{
	// 	document.getElementById("myFormbg").style.display = "block";
    //     document.getElementById("myForm").style.display = "block";
    // })
	var pop = document.getElementById("pop");
	pop.addEventListener("click",()=>{
		document.getElementById("myFormbg").style.display = "block";
        document.getElementById("myForm").style.display = "block";
    })
    var close = document.getElementById("close");
    close.addEventListener("click",()=>{
		document.getElementById("myFormbg").style.display = "none";
        document.getElementById("myForm").style.display = "none";
    })

	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	// AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}