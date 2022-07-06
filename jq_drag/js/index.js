var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
window.onload = function () {
	init();
}

function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("49458D9D2E0848CA8716D52A38D4534D");
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
	loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
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
	const pop1 = document.getElementById("pop1");
	const pop2 = document.getElementById("pop2");
	const pop3 = document.getElementById("pop3");
	const pop4 = document.getElementById("pop4");
	const pop5 = document.getElementById("pop5");
	const pop6 = document.getElementById("pop6");
	const pop7 = document.getElementById("pop7");
	const popAll = document.querySelectorAll(".pop_icon_all");
	const popText = document.getElementById("popText");
	const popupTitleBig = document.getElementById("popupTitleBig");
	const popupTitleSmall = document.getElementById("popupTitleSmall");
	popAll.forEach((el) => {
		el.addEventListener("click", () => {
			document.getElementById("popupBg").style.display = "block";
			document.getElementById("popupContent").style.display = "block";
		})
	});
	pop1.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player"><iframe width="600" height="336" src="https://www.youtube.com/embed/vpAyy8YvccM"title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_title"><div class="popup_word_title">【提高用電效率】</div><div class="popup_word_content">兼顧節能與旅客舒適度，機場採精實用電策略。汰換高耗電量舊設備、改用高效率新機種。</div><div class="popup_word_nd"><div class="popup_word_title">-【LED照明】</div><div class="popup_word_content_nd">航廈內外全面換裝新式LED燈泡，節電率提高74%</div><div class="popup_word_title">-【空調設備更新】</div><div class="popup_word_content_nd">中央空調大型泵浦與變頻器更新，節電率提高40%</div></div></div>';
		popupTitleBig.innerText = '第一航廈';
		popupTitleSmall.innerText = 'LED 照明、空調設備更新';
	});
	pop2.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player"><iframe width="600" height="336" src="https://www.youtube.com/embed/vpAyy8YvccM"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_title">【智慧省電模式】</div><div class="popup_word_content">沒有旅客使用時，自動緩速或休眠，節電率31%</div><div class="popup_word_nd"><div class="popup_word_title">-【電扶梯】</div><div class="popup_word_content_nd">沒有旅客使用時，自動緩速或休眠，節電率31%</div><div class="popup_word_title">-【中央空調】</div><div class="popup_word_content_nd">室外溫度低/夜間/旅客量少情況下，啟動省電模式，關閉部分主機，節電率25.7%</div></div><div class="popup_word_title_nd">【太陽能設備】</div><div class="popup_word_content">第二航廈設置太陽能板、未來完成的第三航廈設置太陽能發電機組，供應部分用電，減少能源消耗</div></div>';
		popupTitleBig.innerText = '第二航廈';
		popupTitleSmall.innerText = '手扶梯電更新、中央空調、太陽能發電';
	});
	pop3.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player3"><iframe width="600" height="337.5" src="https://www.youtube.com/embed/Yq6EATDaOjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_title">興建中的第三航廈，在設計階段就納入了節能減碳的考量。包括：</div><div class=""><div class="popup_word_content">(1) 延伸懸挑的屋頂設計，遮陽避雨且提升舒適度，減少空調耗能。<br>(2) 增加植栽區，提升航廈綠意。<br>(3) 屋頂太陽能光電板，轉換電能龔照明用電使用。<br>(4) 汙水處理廠可過濾回收45%污水成再生水，循環再利用。</div></div></div>';
		popupTitleBig.innerText = '第三航廈';
		popupTitleSmall.innerText = '綠建築設計';
	});
	pop4.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player"><iframe width="600" height="337.5" src="https://www.youtube.com/embed/Yq6EATDaOjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_content_rd">2020年桃園機場以此項目榮獲綠色機場認證獎項。<br>機場公司推動自來水與污排水設施的智慧化管理。</div><div class="popup_word_content_rd">效率管理，全面換裝省水器材，讓當年度旅客用水量下降1.3%，也同時讓廢水放流水質更淨化，比國家排放標準更低50%。</div><div class="popup_word_content_rd">所產生之廢水經處理後亦回收澆灌機場內超過4,200棵樹木植栽使用。</div></div>';
		popupTitleBig.innerText = '污水處理廠';
		popupTitleSmall.innerText = '水資源管理';
	});
	pop5.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player5"><iframe width="600" height="337.5" src="https://www.youtube.com/embed/cqK6eip53Z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_content_rd">升級監測設備、廢氣處理設備，以及雙爐運作，讓焚化爐的廢氣排放標準更透明化，焚燒更有效率、降低汙染量。</div><div class="popup_word_content_rd">讓機場焚化爐符合國家排放標準，更額外再降低90%的排放量，有效減少空污、守護機場周邊環境。</div></div>';
		popupTitleBig.innerText = '焚化爐';
		popupTitleSmall.innerText = '焚化爐監測設備升級';
	});
	pop6.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player6"><iframe width="600" height="337.5" src="https://www.youtube.com/embed/1jqANvV6-O4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_content_rd">為了讓停靠的飛機保持電力與空調，運用空橋來傳輸電力與冷氣。取代傳統的柴油引擎電源車及氣源車(傳輸冷氣用)。</div><div class="popup_word_content_rd">每年可減少3萬噸碳排放，等同77座大安森林公園的碳吸附量。</div></div>';
		popupTitleBig.innerText = '空側';
		popupTitleSmall.innerText = '橋氣橋電';
	});
	pop7.addEventListener("click", () => {
		popText.innerHTML = '<div class="player" id="player7"><iframe width="600" height="337.5" src="https://www.youtube.com/embed/Yq6EATDaOjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="popup_word_all"><div class="popup_word_content_rd">將數量最多、頻繁進出行李處理場的柴油行李拖車，全面改換為電動車。</div><div class="popup_word_content_rd">且設置了43座專用充電樁，並陸續依地勤公司需求增設鍾。</div><div class="popup_word_content_rd">有效減少11%的空氣汙染物排放。</div></div>';
		popupTitleBig.innerText = '空側';
		popupTitleSmall.innerText = '空側車輛電動車化';
	});
	const close = document.getElementById("close");
	close.addEventListener("click", () => {
		document.getElementById("popupBg").style.display = "none";
		document.getElementById("popupContent").style.display = "none";
	});
	const nav_introduce = document.getElementById("nav_introduce");
	const nav_outlook = document.getElementById("nav_outlook");
	const popNavAll = document.querySelectorAll(".nav_title");
	const popNavTitle = document.getElementById("popNavTitle");
	const popNavText = document.getElementById("popNavText");
	const checked_btn = document.getElementById("nav-toggle");
	const closeNav = document.getElementById("closeNav");
	const activity_btn = document.getElementById("navTitleEnd");
	popNavAll.forEach((el) => {
		el.addEventListener("click", () => {
			checked_btn.checked = false;
			document.getElementById("popupNavBg").style.display = "block";
			document.getElementById("popupNavContent").style.display = "block";
		})
	});

	nav_introduce.addEventListener("click", () => {
		popNavText.innerHTML = '<div class="popup_nav_img"><img src="../img/t3-plan1.jpeg" alt=""></div><div class="popup_nav_word_all"><div class="popup_nav_word">• 桃園國際機場啟用40多年，在服務與設備升級的同時，更兼顧環保策略，實踐永續經營理念，推動機場節能減碳，預定在2050年達到淨零排放的目標。</div><div class="popup_nav_word">• 機場節能減碳在航廈設施、機坪作業車輛、水資源管理和焚化爐升級皆有具體作為。減碳成果持續獲獎，榮獲ISO 14064-1溫室氣體盤查、ISO 50001能源管理系統、ISO 14001環境管理系統，並連續4年獲得ACI綠色機場肯定。</div><div class="popup_nav_word">• 讓我們一起認識桃園機場綠色作為吧!</div></div>';
		popNavTitle.innerText = '桃園綠機場網頁介紹';
	});
	nav_outlook.addEventListener("click", () => {
		popNavText.innerHTML = '<div class="popup_nav_img popup_nav_img2"><img src="./img/PC/image_future.png" alt=""></div><div class="popup_nav_word_all"><div class="popup_nav_word"><h4>• 近期四大目標</h4><div style="margin-left: 20px;">-水足跡盤查<br>-空、陸側充電樁由現有 54 座增設至 180 座<br>-第三航廈建置太陽能發電機組<br>-評估購置再生能源或設置儲能設備可行性</div></div><div class="popup_nav_word"><h4>• 2025年前，取得機場碳認證（ACA）等級四之認證</h4></div><div class="popup_nav_word"><h4>• 在2050 年達到淨零排放的目標</h4></div></div>';
		popNavTitle.innerText = '未來展望';
	});
	closeNav.addEventListener("click", () => {
		document.getElementById("popupNavBg").style.display = "none";
		document.getElementById("popupNavContent").style.display = "none";
	});
	activity_btn.addEventListener("click",() => {
		location.href="https://tzu-chien-hung.github.io/airport_jq_grag/jq_drag/activity.html"
	});
	
	var
		//Registers the "tick" event listener.
		fnStartAnimation = function () {
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}
	//Code to support hidpi screens and responsive scaling.
	// AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}