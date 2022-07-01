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
	// 	document.getElementById("popupBg").style.display = "block";
    //     document.getElementById("popupContent").style.display = "block";
    // })
	var pop1 = document.getElementById("pop1");
	var pop2 = document.getElementById("pop2");
	var pop3 = document.getElementById("pop3");
	var pop4 = document.getElementById("pop4");
	var pop5 = document.getElementById("pop5");
	var popAll = document.querySelectorAll(".pop_icon");
	var popText = document.getElementById("popText");
	popAll.forEach((el)=>{
		el.addEventListener("click",()=>{
			document.getElementById("popupBg").style.display = "block";
			document.getElementById("popupContent").style.display = "block";
		})
	});
	pop1.addEventListener("click",()=>{
		popText.innerHTML ='<div class="form-text">[提高用電效率]兼顧節能與旅客舒適度，機場採精實用電策略。汰換高耗電量舊設備、改用高效率新機種	<br>[LED照明]航廈內外全面換裝新式LED燈泡，節電率提高74% <br>[空調設備更新]中央空調大型泵浦與變頻器更新，節電率提高40%</div><div class="the_video"><video width="350" controls autoplay disablePictureInPicture controlsList="nodownload" poster="https://picsum.photos/id/406/500/300" muted loop><source src="./images/file.mp4" type="video/mp4">出現這個訊息，表示您的瀏覽器不支援 HTML5 video 標籤。</video></div>';
    });
	pop2.addEventListener("click",()=>{
		popText.innerHTML ='<div class="form-text">[智慧省電模式]電扶梯、空調設施，依據尖峰離峰時段調整運轉<br>[電扶梯]沒有旅客使用時，自動緩速或休眠，節電率31%<br>[中央空調]室外溫度低/夜間/旅客量少情況下，啟動省電模式，關閉部分主機，節電率25.7%<br>[太陽能設備]</div><div class="the_video"><video width="350" controls autoplay disablePictureInPicture controlsList="nodownload" poster="https://picsum.photos/id/406/500/300" muted loop><source src="./images/file.mp4" type="video/mp4">出現這個訊息，表示您的瀏覽器不支援 HTML5 video 標籤。</video></div>';
    });
	pop3.addEventListener("click",()=>{
		popText.innerHTML ='<div class="form-text">太陽（又稱日），是太陽系中心的恆星，它幾乎是熱電漿與磁場交織著的一個理想球體。它的直徑大約是1,392,000（1.392×106）公里，相當於地球直徑的109.3倍；質量大約是2×1030千克（地球的333,000倍），約佔太陽系總質量的99.86%。從化學組成來看，太陽質量的大約四分之三是氫（~73%），剩下的幾乎都是氦（~25%），包括氧、碳、氖、鐵和其他的重元素質量少於2%。</div><div class="the_video"><video width="350" controls autoplay disablePictureInPicture controlsList="nodownload" poster="https://picsum.photos/id/406/500/300" muted loop><source src="./images/file.mp4" type="video/mp4">出現這個訊息，表示您的瀏覽器不支援 HTML5 video 標籤。</video></div>';
    });
	pop4.addEventListener("click",()=>{
		popText.innerHTML ='<div class="form-text">太陽（又稱日），是太陽系中心的恆星，它幾乎是熱電漿與磁場交織著的一個理想球體。它的直徑大約是1,392,000（1.392×106）公里，相當於地球直徑的109.3倍；質量大約是2×1030千克（地球的333,000倍），約佔太陽系總質量的99.86%。從化學組成來看，太陽質量的大約四分之三是氫（~73%），剩下的幾乎都是氦（~25%），包括氧、碳、氖、鐵和其他的重元素質量少於2%。</div><div class="the_video"><video width="350" controls autoplay disablePictureInPicture controlsList="nodownload" poster="https://picsum.photos/id/406/500/300" muted loop><source src="./images/file.mp4" type="video/mp4">出現這個訊息，表示您的瀏覽器不支援 HTML5 video 標籤。</video></div>';
    });
	pop5.addEventListener("click",()=>{
		popText.innerHTML ='<div class="form-text">太陽（又稱日），是太陽系中心的恆星，它幾乎是熱電漿與磁場交織著的一個理想球體。它的直徑大約是1,392,000（1.392×106）公里，相當於地球直徑的109.3倍；質量大約是2×1030千克（地球的333,000倍），約佔太陽系總質量的99.86%。從化學組成來看，太陽質量的大約四分之三是氫（~73%），剩下的幾乎都是氦（~25%），包括氧、碳、氖、鐵和其他的重元素質量少於2%。</div><div class="the_video"><video width="350" controls autoplay disablePictureInPicture controlsList="nodownload" poster="https://picsum.photos/id/406/500/300" muted loop><source src="./images/file.mp4" type="video/mp4">出現這個訊息，表示您的瀏覽器不支援 HTML5 video 標籤。</video></div>';
    });
    var close = document.getElementById("close");
    close.addEventListener("click",()=>{
		document.getElementById("popupBg").style.display = "none";
        document.getElementById("popupContent").style.display = "none";
    });
	var 
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