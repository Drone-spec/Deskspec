var totalRecords, totalRecordsecordsTemp, showNRecords, nResultPageLinks, cur, prevPage, tempTresults;
var searchKey;
var searchPageType;
var searchKeyCaption;
var firstPageOfPages = "";
var lastPageOfPages = "";
var recentPaginationInitCall = "";
function initResultPages(tresults, npages, keyWord, searchItemType, searchItemCaption) {
	recentPaginationInitCall = "initResultPages('" + tresults + "','" + npages + "','" + keyWord + "','" + searchItemType + "','" + searchItemCaption + "')";
	var rem, quo;
	searchKey = keyWord;
	searchPageType = searchItemType;
	searchKeyCaption = searchItemCaption;
	totalRecords = Number(tresults);
	tempTresults = totalRecords;
	nResultPageLinks = Number(npages);
	showNRecords = 10;
	totalRecordsecordsTemp = Number(tresults);
	totalRecords = Math.round(totalRecords / showNRecords);
	if (tresults < 101) {
		document.getElementById("paginationNextButtonId").disabled = "disable";
		document.getElementById("paginationLastButtonId").disabled = "disable";
	} else {
		document.getElementById("paginationLastButtonId").disabled = false;
		document.getElementById("paginationNextButtonId").disabled = false;
	}
	if (Number(totalRecordsecordsTemp % showNRecords) > 0 && Number(totalRecordsecordsTemp % showNRecords) < showNRecords / 2) {
		totalRecords++;
	}
	cur = totalRecords > nResultPageLinks ? nResultPageLinks : totalRecords;
	big = 1;
	end = cur;
	prevPage = "p_1_10";
	if (tempTresults > showNRecords) {
		document.getElementById("paginationCount").innerHTML = showNRecords + "/" + tempTresults;
	} else {
		document.getElementById("paginationCount").innerHTML = tempTresults + "/" + tempTresults;
	}
	getPages(big, end);
	setColors(prevPage, "ROYALBLUE", "WHITE");
	document.getElementById("paginationPreviousButtonId").disabled = "disable";
	document.getElementById("paginationFirstButtonId").disabled = "disable";
}
function firstPage() {
	var tempCur = cur / 10;
	for (var i = 0;i < tempCur - 1;i++) {
		previousPage(0);
	}
	getResultPage("p_1_10");
	document.getElementById("paginationPreviousButtonId").disabled = "disable";
	document.getElementById("paginationFirstButtonId").disabled = "disable";
	document.getElementById("paginationNextButtonId").disabled = false;
	document.getElementById("paginationLastButtonId").disabled = false;
}
function lastPage() {
	for (var i = 0;i < totalRecords;i++) {
		nextPage(0);
	}
	getResultPage(lastPageOfPages);
	document.getElementById("paginationNextButtonId").disabled = "disable";
	document.getElementById("paginationLastButtonId").disabled = "disable";
	document.getElementById("paginationFirstButtonId").disabled = false;
	document.getElementById("paginationPreviousButtonId").disabled = false;
}
function nextPage(linkImmediateFlag) {
	cur = Number(cur);
	nResultPageLinks = Number(nResultPageLinks);
	totalRecords = Number(totalRecords);
	if (totalRecords < nResultPageLinks) {
		getPages(1, totalRecords);
		return;
	}
	if (cur + nResultPageLinks < totalRecords) {
		big = end + 1;
		end = end + nResultPageLinks;
		cur = cur + nResultPageLinks;
		getPages(big, end);
	} else {
		if (cur >= totalRecords - cur && totalRecords - cur != 0) {
			big = end + 1;
			end = end + totalRecords - cur;
			cur = totalRecords;
			getPages(big, end);
		}
	}
	prevPage = "";
	if (linkImmediateFlag != 0) {
		getResultPage(firstPageOfPages);
	}
	document.getElementById("paginationPreviousButtonId").disabled = false;
	document.getElementById("paginationFirstButtonId").disabled = false;
}
function previousPage(linkImmediateFlag) {
	cur = Number(cur);
	nResultPageLinks = Number(nResultPageLinks);
	totalRecords = Number(totalRecords);
	if (cur == nResultPageLinks || totalRecords < nResultPageLinks) {
		return;
	}
	if (cur >= totalRecords) {
		end = big - 1;
		big = big - nResultPageLinks;
		if (totalRecords % nResultPageLinks == 0) {
			cur = cur - nResultPageLinks;
		} else {
			cur = cur - totalRecords % nResultPageLinks;
		}
		getPages(big, end);
	} else {
		if (totalRecords - cur > 0) {
			big = big - nResultPageLinks;
			end = end - nResultPageLinks;
			cur = cur - nResultPageLinks;
			getPages(big, end);
		}
	}
	prevPage = "";
	if (linkImmediateFlag != 0) {
		getResultPage(lastPageOfPages);
	}
	if (cur <= 10) {
		document.getElementById("paginationFirstButtonId").disabled = "disable";
		document.getElementById("paginationPreviousButtonId").disabled = "disable";
	}
	document.getElementById("paginationNextButtonId").disabled = false;
	document.getElementById("paginationLastButtonId").disabled = false;
}
function getPages(m, n) {
	var flag = 0;
	var pagerow = "<TABLE id=paginationTable cellspacing=2 cellpadding=0 border=1>";
	pagerow += "<TR>";
	for (var i = m;i <= n;i++) {
		if (Number(i * showNRecords) > totalRecordsecordsTemp) {
			pageRangeId = i * showNRecords - (showNRecords - 1) + "_" + (i * showNRecords - showNRecords + Number(totalRecordsecordsTemp) % showNRecords);
		} else {
			pageRangeId = i * showNRecords - (showNRecords - 1) + "_" + i * showNRecords;
		}
		if (prevPage == "") {
			prevPage = pageRangeId;
		}
		pagerow += "<TD id=p_" + pageRangeId + " class=paginationResultPageLinks onmouseover='focusPage(this.id)' onmouseout='unfocusPage(this.id)' onclick='getResultPage(this.id)' >" + i + "</TD>";
		lastPageOfPages = "p_" + pageRangeId;
		if (flag == 0) {
			firstPageOfPages = "p_" + pageRangeId;
			flag = 1;
		}
	}
	pagerow += "</TR>";
	pagerow += "</TABLE>";
	document.getElementById("paginationThumbs").innerHTML = pagerow;
	if (n == totalRecords) {
		document.getElementById("paginationNextButtonId").disabled = "disable";
		document.getElementById("paginationLastButtonId").disabled = "disable";
	}
}
function getResultPage(resultPageId) {
	var pageInfo, startPage, endPage, tempEle;
	latestSearchResultFunCall = "getResultPage('" + resultPageId + "')";
	pageInfo = resultPageId.split("_");
	startPage = pageInfo[1];
	endPage = pageInfo[2];
	if (prevPage != "") {
		setColors(prevPage, "WHITE", "BLACK");
	}
	document.getElementById("paginationCount").innerHTML = "" + endPage + "/" + tempTresults;
	if (Number(pageInfo[1]) >= 1) {
		requestResultPage(Number(startPage), Number(endPage));
	}
	setColors(resultPageId, "ROYALBLUE", "WHITE");
	prevPage = resultPageId;
}
function requestResultPage(pageStartId, pageEndId) {
	var ajaxRequest = zXmlHttp.createRequest();
	showTopNotification();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				searchResults.renderJSONSearchResults(ajaxRequest.responseText, searchKeyCaption, Math.round(pageStartId / 10 + 1), global.variables.sortSearchBy);
				historyIsItResultDetails = 1;
				parityHistory.setInHistory();
			} else {
				hideTopNotification();
				alert("Unable to get requested set of articles. Please try again!: \n\n" + ajaxRequest.responseText.substring(1, 2E3));
			}
		}
	};
	pageStartId = pageStartId - 1;
	if (searchPageType == "keyword") {
		var requestURL = ROOT_DB_URL + "search.action?searchType=" + searchPageType + "&searchString=" + searchKey + "&nodeLabel=" + escape(searchKeyCaption) + "&articlePageID=" + Number(pageStartId / 10 + 1) + searchResults.getSortByType() + "&nullParam=" + (new Date).getTime();
		ajaxRequest.open("GET", requestURL, true);
		_gaq.push(["_trackPageview", requestURL]);
		ajaxRequest.send(null);
	} else {
		if (searchPageType == "author") {
			var requestURL = ROOT_DB_URL + "search.action?searchType=" + searchPageType + "&searchString=" + searchKey + "&nodeLabel=" + escape(searchKeyCaption) + "&articlePageID=" + Number(pageStartId / 10 + 1) + searchResults.getSortByType() + "&nullParam=" + (new Date).getTime();
			ajaxRequest.open("GET", requestURL, true);
			_gaq.push(["_trackPageview", requestURL]);
			ajaxRequest.send(null);
		} else {
			if (searchPageType == "ontology") {
				var requestURL = ROOT_DB_URL + "search.action?searchType=ontology&nodeID=" + searchKey + "&nodeLabel=" + escape(searchKeyCaption) + "&articlePageID=" + Number(pageStartId / 10 + 1) + searchResults.getSortByType() + "&nullParam=" + (new Date).getTime();
				ajaxRequest.open("GET", requestURL, true);
				_gaq.push(["_trackPageview", requestURL]);
				ajaxRequest.send(null);
			}
		}
	}
}
function setPaginationPage(id) {
	if (prevPage != id) {
		setColors(id, "WHITE", "BLACK");
	} else {
		prevPage = id;
	}
}
function focusPage(pageId) {
	if (prevPage != pageId) {
		setColors(pageId, "ROYALBLUE", "WHITE");
	}
}
function unfocusPage(pageId) {
	if (prevPage != pageId) {
		setColors(pageId, "WHITE", "BLACK");
	}
}
function setColors(elementId, bgClr, fontClr) {
	var tempEle;
	tempEle = document.getElementById(elementId);
	if (tempEle != null) {
		tempEle.style.backgroundColor = bgClr;
		tempEle.style.color = fontClr;
	}
}
function showPagination() {
	document.getElementById("paginationDivComponent").style.display = "";
}
function hidePagination() {
	document.getElementById("paginationDivComponent").style.display = "none";
}
//gappb
//Copyright 2019 and Patent Pending. 2020-07-01 15:13:11
var logNotif = new logger("notif.js");
var recurRulesMsgURLs = null;
var jBarData = null;
var anyMsgSent = false;
var topLeftNotifier;
var bottomNotifier;
$(document).ready(function() {
	logNotif = new logger("notif.js");
	initAppMsgs();
	if (typeof kiui !== "undefined") {
		topLeftNotifier = kiui.notifier({position:"top"});
		bottomNotifier = kiui.notifier({position:"bottom"});
	}
});
function isOnUIPage() {
	return typeof isOnUIPage !== "undefined";
}
function initAppMsgs() {
	try {
		logNotif.info("initAppMsgs()");
		if (!chrome.extension.hasOwnProperty("getBackgroundPage")) {
			gaEvent(gappRef, gaVals.label.NotifUI, "msgForNotifsURLs is EMPTY");
			return;
		}
		var data = isOnUIPage() ? chrome.extension.getBackgroundPage().msgForNotifsURLs : msgForNotifsURLs;
		if (isEmpty(data)) {
			return;
		}
		var coreData = JSON.parse(data);
		if (coreData != null && coreData.msg) {
			recurRulesMsgURLs = coreData.msg.urls;
			jBarData = coreData.jBarHeaderData[gappId] ? coreData.jBarHeaderData[gappId] : coreData.jBarHeaderData["default"];
			if (jBarData) {
				setTimeout(setJbarData, 100);
			}
		} else {
			logNotif.warn("Msg data not yet available");
		}
	} catch (err) {
		gaEvent(gappRef, gaVals.label.NotifUI, "Message" + gaVals.value.failedProcess);
		logNotif.error("initAppMsgs(): " + err.message);
	}
}
function initNativeAppMsgs() {
	initAppMsgs();
	checkAppMessages();
}
function setJbarData() {
	$(".jbar-wrap > p").html(jBarData);
	$(".jbar-wrap").append('<div class="jbarMktgDiv"></div>');
}
function checkAppMessagesFromUI() {
	chrome.runtime.sendMessage("notif-get", function(data) {
		logNotif.info("checking notifications from UI: " + data);
		var dbmsg = data.msg;
		if (dbmsg != undefined && !$.isEmptyObject(dbmsg)) {
			processMessages(dbmsg, "POPUP");
		} else {
			logNotif.warn("Either invalid msg data or empty");
		}
	});
}
function processMessages(msgs, source) {
	if (msgs == null || msgs == undefined || msgs.length == 0) {
		logNotif.warn("No messages found!");
		return;
	}
	var allAppMsges, thisAppMsg, globalAppMsg;
	var mktgMsges = [];
	var myAppId = getAppExtID();
	var isThisExcluded = false;
	allAppMsges = thisAppMsg = globalAppMsg = null;
	try {
		var excludeIds = msgs["global"]["exclude"];
		var isGlobalMsgExpire = msgs.global.expire ? dateInYyMmDd() > Number(msgs.global.expire) : false;
		if (excludeIds.indexOf(myAppId) >= 0) {
			isThisExcluded = true;
		}
		if (!isThisExcluded && !isGlobalMsgExpire && msgs.global.show) {
			try {
				globalAppMsg = msgs["global"];
				if (msgs.global.mktgShow && msgs.global.mktgMsgs) {
					mktgMsges = msgs.global.mktgMsgs;
				}
			} catch (err) {
				logNotif.error(err.message);
			}
		}
		var appMsgs = msgs["private"];
		allAppMsges = [];
		for (var m in appMsgs) {
			try {
				if (appMsgs[m].expire) {
					if (dateInYyMmDd() > Number(appMsgs[m].expire)) {
						continue;
					}
				}
				if (!appMsgs[m].show) {
					continue;
				}
				var appIds = appMsgs[m]["ids"];
				for (var id in appIds) {
					if (appIds[id] == myAppId) {
						thisAppMsg = appMsgs[m];
						allAppMsges.push(thisAppMsg);
						if (thisAppMsg.mktgShow && thisAppMsg.mktgMsgs) {
							mktgMsges = mktgMsges.concat(thisAppMsg.mktgMsgs);
						}
					}
				}
			} catch (error0) {
				logNotif.error(error0.message);
			}
		}
	} catch (error1) {
		gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.failedProcess);
		logNotif.error(error1.message);
	}
	var finalAppMsges = [];
	if (allAppMsges) {
		finalAppMsges = finalAppMsges.concat(allAppMsges);
	}
	if (globalAppMsg) {
		finalAppMsges = finalAppMsges.concat(globalAppMsg);
	}
	if (source == "BG" && finalAppMsges.length > 0) {
		chrome.browserAction.setBadgeText({text:"" + finalAppMsges.length});
	} else {
		for (var apm in finalAppMsges) {
			postMessages(finalAppMsges[apm]);
		}
		if (mktgMsges && mktgMsges.length > 0) {
			manageMktgMessages(mktgMsges);
		}
	}
}
function postMessages(appMsg) {
	if (appMsg && appMsg.show) {
		var currentHour = (new Date).getHours();
		if (currentHour >= 9 && currentHour <= 23) {
			if (appMsg.repeat) {
				finalNotification(appMsg);
				return;
			} else {
				var lastmsgid = db.get("lastmsgid");
				if (lastmsgid == null || lastmsgid.indexOf(appMsg["msgid"]) < 0) {
					finalNotification(appMsg);
					db.append("lastmsgid", appMsg["msgid"]);
					if (lastmsgid && lastmsgid.length > 300) {
						db.set("lastmsgid", appMsg["msgid"]);
					}
				} else {
					logNotif.warn("** Either invalid message or already notified");
				}
			}
		}
	}
}
function getAppExtID() {
	var appid = TESTING ? "DrNNAAA" : gappId;
	return appid;
}
function finalNotification(appMsg) {
	var notifcationType = appMsg.notifcation;
	if (notifcationType == "UI") {
		finalNotificationUI(appMsg);
	} else {
		if (notifcationType == "NonUI") {
			finalNotificationNative(appMsg);
		} else {
			if (notifcationType == "BOTH") {
				finalNotificationUI(appMsg);
				finalNotificationNative(appMsg);
			} else {
				if (notifcationType == "AUTO") {
					if (gappType == "extType1") {
						finalNotificationUI(appMsg);
					} else {
						if (gappType == "extType2") {
							finalNotificationNative(appMsg);
						} else {
							finalNotificationUI(appMsg);
						}
					}
				} else {
					finalNotificationUI(appMsg);
				}
			}
		}
	}
}
function finalNotificationUI(appMsg, elementSelector) {
	elementSelector = ".ExifViewer";
	var notifColor = appMsg.type == "success" ? "#8bc34a" : appMsg.type == "error" ? "#fb5555" : appMsg.type == "info" ? "#8cc0ef" : "#9e9e9e";
	var finalMsg = "<b>" + appMsg["title"] + "</b>: " + appMsg["msg"];
	$("div.ExifVewerTabData").prepend($('<div id="notifId"/>').html(finalMsg).css({"font-family":"sans-serif", "color":notifColor, "font-size":"12px", "box-shadow":"0px 0px 15px " + notifColor, "padding":"3px"}));
	$("div#notifId").append($("<div/>").html("<button id=notifCloseBtnId>Close</button>").css("text-align", "right"));
	$("#notifCloseBtnId").click(function(e) {
		$("#notifId").remove();
		gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.closed);
	});
	gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.shown);
	if (appMsg.repeat == false) {
		chrome.runtime.sendMessage("notif-reset", function(data) {
			logNotif.warn("msg obj reset");
		});
	}
	return;
	if (!isEmpty(appMsg["autoclose"]) && Number(appMsg["autoclose"]) > 0) {
		$.notify.defaults({autoHide:true});
	} else {
		$.notify.defaults({autoHide:false});
	}
	if (!isEmpty(appMsg["msg"]) && !isEmpty(appMsg["type"]) && !isEmpty(appMsg["pos"])) {
		if (elementSelector) {
			$(elementSelector).notify(appMsg["msg"], appMsg["type"], {position:appMsg["pos"]});
		} else {
			$.notify(appMsg["msg"], appMsg["type"], {position:appMsg["pos"]});
		}
	} else {
		if (!isEmpty(appMsg["msg"]) && !isEmpty(appMsg["type"]) && isEmpty(appMsg["pos"])) {
			$.notify(appMsg["msg"], type);
		} else {
			$.notify(appMsg["msg"]);
		}
	}
	$("span[data-notify-text]").html($("span[data-notify-text]").text());
	$("div.notifyjs-container").attr("title", "Click to close it");
	$("div.notifyjs-bootstrap-base").prepend('<div style="position: relative; float: right;"><img src="' + chrome.extension.getURL("img/close.png") + '" width=12px height=12px></div>');
	$("div.notifyjs-bootstrap-base").css({"font-weight":"normal", "white-space":"normal"});
	$("div.notifyjs-bootstrap-base").addClass("nowrap");
	$("div.notifyjs-corner").css({"margin":"0px !important"});
	setTimeout(function() {
		$("div.notifyjs-container").css({"margin":"-6px", "transition-duration":"0.3s"});
	}, 500);
	$("div.notifyjs-corner").on("click", function() {
		$("body").undim();
	});
	setTimeout(function() {
		if (!isEmpty(appMsg["width"])) {
			var mw = Number(appMsg["width"]);
			$('div[data-role="notification"]').css("width", mw);
			mw = ($(window).width() - mw) / 2;
			$('div[data-role="notification"]').css("left", mw);
		}
		if (!isEmpty(appMsg["pos"]) && appMsg["pos"] == "topmiddle") {
			$('div[data-role="notification"]').css("top", ($(window).height() - $('div[data-role="notification"]').height()) / 2);
		}
	}, 5);
	anyMsgSent = true;
	gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.shown);
}
function finalNotificationNative(appMsg) {
}
function manageMktgMessages(mktgMsgs) {
	try {
		if (mktgMsgs.length < 1) {
			return;
		}
		var i = randomNumber(0, mktgMsgs.length - 1);
		$(".jbarMktgDiv").html(mktgMsgs[i]).hide().fadeIn();
		setInterval(function() {
			$(".jbarMktgDiv").html(mktgMsgs[++i % mktgMsgs.length]).hide().fadeIn();
		}, TESTING ? 2000 : 4000);
	} catch (e) {
		gaEvent(gappRef, gaVals.label.NotifMktg, gaVals.value.failedProcess);
	}
}
//gappe
var authorDirTabComponentHTML;
var dialogFormComponentHTML;
var formComponentHTML;
var formComponentHTMLID = 0;
var formComponentHTMLArrayID = new Array;
var tempFlag, tempStr;
var components = {getAuthorDirTabHTMLComponent:function() {
	authorDirTabComponentHTML = "<DIV id=authorTabComponent>";
	authorDirTabComponentHTML += "<TABLE cellSpacing=0 border=0 width=100% style='margin: 0px; border-collapse: collapse'>";
	authorDirTabComponentHTML += "<TR>";
	for (var i = 65;i < 65 + 26;i++) {
		authorDirTabComponentHTML += "\n<TD id=authorTabId" + (i - 65 + 1) + " class=authorTabClass onmouseover=tabAuthDir.setAuthorTabFocus(this.id) onmouseout=tabAuthDir.resetAuthorTabFocus(this.id) onclick=tabAuthDir.setAuthorTabDivdata(this.id," + (i - 65 + 1) + ")>" + String.fromCharCode(i) + "</TD>";
	}
	authorDirTabComponentHTML += "</TR>";
	authorDirTabComponentHTML += "<TR style='background-color: LIGHTSTEELBLUE; color: white;'>";
	for (var i = 1;i <= 26;i++) {
		authorDirTabComponentHTML += "<TD id=authorTabSecondCharId" + i + " class=secondCharLinks>a</TD>";
	}
	authorDirTabComponentHTML += "</TR>";
	authorDirTabComponentHTML += "</TABLE>";
	authorDirTabComponentHTML += "</DIV>";
	authorDirTabComponentHTML += "<DIV id=authorTabComponentResults style='width:100%; border: 2px solid LIGHTSTEELBLUE;'></DIV>";
	return authorDirTabComponentHTML;
}, getFormHTMLComponent:function(formTitle, formHTML) {
	formComponentHTMLID = formComponentHTMLID + 1;
	formComponentHTMLArrayID[formComponentHTMLID] = 1;
	formComponentHTML = "<TABLE align=center id='formPanelBoxTable' border='1' cellspacing='0' width=99%>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD class='formPanelBoxTableHeader'>" + formTitle + "</TD>";
	formComponentHTML += "<TD class='formPanelBoxTableHeader' style='border-left: 0px; width=1%' align= right><img id=formPanelBoxTableImage" + formComponentHTMLID + " src='" + ROOT_URL + "images/arrow-up.gif' onclick=components.hideFormHTMLComopnent(" + formComponentHTMLID + ") style='cursor: pointer' alt='Close this content' /></TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD colspan=2 class='formPanelBoxTableFrame'>";
	formComponentHTML += "<DIV id=formPanelBoxTableDiv" + formComponentHTMLID + ">" + formHTML + "</DIV>";
	formComponentHTML += "</TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "</TABLE>";
	return formComponentHTML;
}, getPlainFormHTMLComponent:function(formTitle, formHTML) {
	formComponentHTML = "<TABLE align=center id='plainFormPanelBoxTable' border='1' cellspacing='0'>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD class='planFormPanelBoxTableHeader'>" + formTitle + "</TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD colspan=2 class='formPanelBoxTableFrame'>";
	formComponentHTML += "<DIV>" + formHTML + "</DIV>";
	formComponentHTML += "</TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "</TABLE>";
	return formComponentHTML;
}, getFormHTML2Component:function(formTitle, formHTML) {
	formComponentHTML = "<TABLE align=center border='0' cellspacing='0' width=99% style='padding: 0px;'>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD style='font: bold 12px Arial;'>" + formTitle + "</TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "<TR>";
	formComponentHTML += "<TD>";
	formComponentHTML += "<DIV style='border-top: 1px solid silver;'>" + formHTML + "</DIV>";
	formComponentHTML += "</TD>";
	formComponentHTML += "</TR>";
	formComponentHTML += "</TABLE>";
	return formComponentHTML;
}, hideFormHTMLComopnent:function(formHTMLID) {
	var rem = formComponentHTMLArrayID[Number(formHTMLID)] % 2;
	if (rem == 0) {
		document.getElementById("formPanelBoxTableDiv" + formHTMLID).style.display = "";
		document.getElementById("formPanelBoxTableImage" + formHTMLID).src = ROOT_URL + "images/arrow-up.gif";
		document.getElementById("formPanelBoxTableImage" + formHTMLID).alt = "Close this content";
	} else {
		document.getElementById("formPanelBoxTableDiv" + formHTMLID).style.display = "none";
		document.getElementById("formPanelBoxTableImage" + formHTMLID).src = ROOT_URL + "images/arrow-down.gif";
		document.getElementById("formPanelBoxTableImage" + formHTMLID).alt = "Open this content";
	}
	formComponentHTMLArrayID[Number(formHTMLID)]++;
}, getDialogBoxHTMLComponent:function() {
	dialogFormComponentHTML = "<table cellspacing='0' cellpadding='0' border='0'>";
	dialogFormComponentHTML += "<tr>";
	dialogFormComponentHTML += "<td width='10' background='images/pf-images/pf-top-left.gif'/>";
	dialogFormComponentHTML += "<td class='announce_header' id='dialogBoxDivTitleId'/>";
	dialogFormComponentHTML += "<td class='announce_header' width='20px'>";
	dialogFormComponentHTML += "<input type='button' id='loginCloseButton' value='X' onclick='components.closeDialogBox()' />";
	dialogFormComponentHTML += "</td>";
	dialogFormComponentHTML += "<td colspan='2' width='10' align=middle background='images/pf-images/pf-top-right.gif' />";
	dialogFormComponentHTML += "</tr>";
	dialogFormComponentHTML += "<tr>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-middle-left.gif'/>";
	dialogFormComponentHTML += "<td class='announce_content'>";
	dialogFormComponentHTML += "\x3c!-- External HTML content have to be imported here --\x3e";
	dialogFormComponentHTML += "<DIV id='dialogBoxDivDataId'/>";
	dialogFormComponentHTML += "</td>";
	dialogFormComponentHTML += "<td class='announce_content'/>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-middle-right.gif'/>";
	dialogFormComponentHTML += "</tr>";
	dialogFormComponentHTML += "<tr height='12'>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-bottom-left.gif'/>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-bottom-middle.gif'/>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-bottom-middle.gif'/>";
	dialogFormComponentHTML += "<td background='images/pf-images/pf-bottom-right.gif'/>";
	dialogFormComponentHTML += "</tr>";
	dialogFormComponentHTML += "</table>";
	return dialogFormComponentHTML;
}, showDialogBox:function(loginHTMLData, title, dWidth, dHeight, dLeft, dTop) {
	document.getElementById("backgroundFilter").style.height = document.body.scrollHeight;
	document.getElementById("backgroundFilter").style.width = document.body.scrollWidth;
	components.hideDialogBoxBackground();
	var dialogObj = document.getElementById("popupWindow");
	dialogObj.innerHTML = components.getDialogBoxHTMLComponent();
	dialogObj.style.display = "block";
	document.getElementById("dialogBoxDivDataId").innerHTML = loginHTMLData;
	document.getElementById("dialogBoxDivTitleId").innerHTML = title;
	if (dWidth > 0) {
		dialogObj.style.width = dWidth;
	}
	if (dHeight > 0) {
		dialogObj.style.height = dHeight;
	}
	if (getBrowserName() == "Safari" || getBrowserName() == "Mozilla" || getBrowserName() == "Firefox") {
		dialogObj.style.top = parseInt((screen.availHeight - dialogObj.offsetHeight) / 2);
	} else {
		dialogObj.style.top = parseInt((document.body.offsetHeight - dialogObj.offsetHeight) / 2);
	}
	dialogObj.style.left = parseInt((document.body.offsetWidth - dialogObj.offsetWidth) / 2);
}, hideDialogBoxBackground:function() {
	document.getElementById("backgroundFilter").style.height = document.body.scrollHeight;
	document.getElementById("backgroundFilter").style.width = document.body.scrollWidth;
	document.getElementById("backgroundFilter").style.display = "block";
}, showDialogBoxBackground:function() {
	document.getElementById("backgroundFilter").style.display = "none";
}, closeDialogBox:function() {
	document.getElementById("popupWindow").innerHTML = "";
	document.getElementById("popupWindow").style.display = "none";
	components.showDialogBoxBackground();
}, afterResize:function() {
	document.getElementById("headerBgImage").style.height = "118px";
	document.getElementById("headerBgImage").style.width = "980px";
	var wid = "980px";
	var marginHorizontal = "10px";
	if (getBrowserName() == "Safari" || getBrowserName() == "Mozilla" || getBrowserName() == "Firefox" || getBrowserName() == "Opera" || getBrowserName() == "Chrome") {
		marginHorizontal = "13px";
	}
	if (document.getElementById("curveWhite")) {
		document.getElementById("curveWhite").style.width = wid;
		document.getElementById("curveWhite").style.marginRight = marginHorizontal;
		document.getElementById("curveWhite").style.marginLeft = marginHorizontal;
		document.getElementById("curveWhite").style.marginTop = "1%";
		document.getElementById("curveWhite").style.marginBottom = "1%";
	}
	if (document.getElementById("curveGray")) {
		document.getElementById("curveGray").style.width = wid;
		document.getElementById("curveGray").style.marginRight = marginHorizontal;
		document.getElementById("curveGray").style.marginLeft = marginHorizontal;
		document.getElementById("curveGray").style.marginTop = "1%";
		document.getElementById("curveGray").style.marginBottom = "1%";
	}
	if (document.getElementById("headerBgDiv")) {
		document.getElementById("headerBgDiv").style.marginRight = marginHorizontal;
		document.getElementById("headerBgDiv").style.marginLeft = marginHorizontal;
	}
	if (getBrowserName() == "Firefox") {
		document.getElementById("logoTable").style.background = "url('images/background_header.gif') no-repeat;";
		document.getElementById("logoTable").style.width = "960px";
		document.getElementById("logoTable").style.height = "126px";
	}
}, penel:function() {
}};
function panel() {
	this.getCurrentIssues = getCurrentIssues;
	this.renderCurrentIssues = renderCurrentIssues;
	this.getMonthIssues = getMonthIssues;
	this.renderMonthIssues = renderMonthIssues;
	this.getTopArticles = getTopArticles;
	this.renderTopArticles = renderTopArticles;
	this.getOtherResources = getOtherResources;
	this.renderOtherResources = renderOtherResources;
	this.getNewsLetters = getNewsLetters;
	this.getOnlineTutorials = getOnlineTutorials;
	this.getOtherResources = getOtherResources;
	this.getHTMLPage = getHTMLPage;
	this.renderHTMLPage = renderHTMLPage;
	this.getHelpPages = getHelpPages;
	this.getHelpLinkPages = getHelpLinkPages;
	this.getAds = getAds;
	this.renderAds = renderAds;
	this.getShoppingCartCheckoutHTMLPage = getShoppingCartCheckoutHTMLPage;
	this.getFeedbackHTMLPage = getFeedbackHTMLPage;
	this.renderFeedbackHTMLPage = renderFeedbackHTMLPage;
}
function getCurrentIssues(issueHtmlFile) {
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				components.penel.renderCurrentIssues(ajaxRequest.responseText);
			} else {
				alert("Unable to get response!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + issueHtmlFile;
	ajaxRequest.open("GET", requestURL);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderCurrentIssues(data) {
	var issueDetails = data.split("|");
	var issueDetailsHtml = "<P class=rightPanelIssueBoxLinksClass>";
	tempFlag = 0;
	if (data.length > 0) {
		tempFlag = 1;
		issueDetailsHtml += data;
	}
	issueDetailsHtml += "</P>";
	if (tempFlag == 0) {
		document.getElementById("rightPanelIssueBoxOuterDiv").style.display = "none";
		return;
	}
	document.getElementById("rightPanelIssueBoxOuterDiv").innerHTML = issueDetailsHtml;
	components.penel.showCurrentIssues();
	searchResults.emptySearchResults();
}
function getMonthIssues(issueHtmlFile) {
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				components.penel.renderMonthIssues(ajaxRequest.responseText);
			} else {
				alert("Unable to get response!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + issueHtmlFile;
	ajaxRequest.open("GET", requestURL);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderMonthIssues(data) {
	var issueDetails = data.split("|");
	var issueDetailsHtml = "";
	tempFlag = 0;
	if (data.length > 0) {
		tempFlag = 1;
		issueDetailsHtml += data;
	}
	issueDetailsHtml += "";
	if (tempFlag == 0) {
		document.getElementById("rightPanelIssueBoxOuterDiv").style.display = "none";
		return;
	}
	issueDetailsHtml = '<div style="background-color: whitesmoke;"><div class="t"><div class="b"><div class="l"><div class="r"><div class="bl"><div class="br"><div class="tl"><div class="tr">' + issueDetailsHtml;
	issueDetailsHtml = issueDetailsHtml + "</div></div></div></div></div></div></div></div></div>";
	document.getElementById("currentMonthIssueDivId").innerHTML = issueDetailsHtml;
	document.getElementById("currentMonthIssueDivId").style.borderColor = "red";
	components.penel.showMonthIssues();
}
function getTopArticles(articleType) {
	var ajaxRequest = zXmlHttp.createRequest();
	showNotification("topArticlesNote", "Loading...", 0);
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				components.penel.renderTopArticles(ajaxRequest.responseText, articleType);
			} else {
				hideNotification("topArticlesNote");
				showFallBackNotification("rightPanelTopArticleBoxDiv", "Unable to get top articles from server", 'components.penel.getTopArticles("' + articleType + '")');
			}
		}
	};
	var requestURL = ROOT_DB_URL + "downloads.action?articleType=" + articleType;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderTopArticles(data, articleType) {
	var articleObject;
	var i, j, resultHTML;
	hideNotification("topArticlesNote");
	try {
		articleObject = eval("(" + data + ")");
		if (articleObject.topDownloadedArticles == null) {
			throw "";
		}
	} catch (e) {
		showFallBackNotification("rightPanelTopArticleBoxDiv", "Unable to get top articles from server", 'components.penel.getTopArticles("' + articleType + '")');
		return;
	}
	resultHTML = "<img src='" + ROOT_URL + "images/top-articles.png'  style='border:0px;' />";
	if (articleType == "Conference") {
		resultHTML += "Top 10 most read conference proceedings".bold();
	} else {
		resultHTML += "Top 10 most viewed articles and tutorials".bold();
	}
	resultHTML += "<table border=0 cellpadding=0>";
	for (i = 0;i < articleObject.topDownloadedArticles.length;i++) {
		if (i % 2 == 0) {
			resultHTML += "<tr style='background-color: whitesmoke; padding-top: 5px'>";
		} else {
			resultHTML += "<tr style='background-color: white; padding-top: 5px'>";
		}
		resultHTML += "<td class=searchResultItem>";
		resultHTML += (i + 1 + ". ").bold();
		resultHTML += "<B><A href=?article=" + articleObject.topDownloadedArticles[i].articleID + " onclick=\"return searchResults.getArticleData('" + articleObject.topDownloadedArticles[i].articleID + "') \">";
		resultHTML += '"' + articleObject.topDownloadedArticles[i].articleTitle + '"</A></B>, ';
		authorTempObj = articleObject.topDownloadedArticles[i].authors;
		for (j = 0;authorTempObj != null && j < authorTempObj.length;j++) {
			resultHTML += "<A href=?author=" + articleObject.topDownloadedArticles[i].authors[j].authorID + ' onclick="return searchResults.getAuthorData(' + articleObject.topDownloadedArticles[i].authors[j].authorID + ')">';
			resultHTML += articleObject.topDownloadedArticles[i].authors[j].firstName + " ";
			resultHTML += articleObject.topDownloadedArticles[i].authors[j].lastName;
			resultHTML += "</A>, ";
		}
		resultHTML += articleObject.topDownloadedArticles[i].parentTitle.italics() + ", ";
		resultHTML += "Vol. " + articleObject.topDownloadedArticles[i].volume + ", ";
		resultHTML += "no. " + articleObject.topDownloadedArticles[i].issueNumber + ", ";
		var resultDetailsKeyword = articleObject.topDownloadedArticles[i].parentTitle;
		resultDetailsKeyword += ", " + articleObject.topDownloadedArticles[i].month + " " + articleObject.topDownloadedArticles[i].year;
		resultHTML += "<A href=?publication=" + articleObject.topDownloadedArticles[i].issueObjectNodeID + "&label=" + escape(resultDetailsKeyword) + " onclick=\"return treePub.pubGetPublicationResults('" + articleObject.topDownloadedArticles[i].issueObjectNodeID + "','" + resultDetailsKeyword + "')\">";
		resultHTML += articleObject.topDownloadedArticles[i].month + " ";
		resultHTML += articleObject.topDownloadedArticles[i].year;
		resultHTML += "</A>, ";
		resultHTML += "pp. " + articleObject.topDownloadedArticles[i].startPage + "-";
		resultHTML += articleObject.topDownloadedArticles[i].endPage;
		resultHTML += "</td>";
		resultHTML += "</tr>";
	}
	resultHTML += "</table>";
	document.getElementById("rightPanelTopArticleBoxDiv").innerHTML = resultHTML;
	components.penel.showTopArticle();
}
function getOtherResources() {
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				components.penel.renderOtherResources(ajaxRequest.responseText);
			} else {
				alert("Unable to get response!22: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/otherResources/otherResources.htm";
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderOtherResources(data) {
	var otherResourcesHtml = "";
	tempFlag = 0;
	if (data.length > 0) {
		tempFlag = 1;
		otherResourcesHtml += data;
	}
	otherResourcesHtml += "";
	if (tempFlag == 0) {
		document.getElementById("queryResultsDivId").innerHTML = "No data found!";
		return;
	}
	document.getElementById("queryResultsDivId").innerHTML = otherResourcesHtml;
	hidePagination();
	printer.hidePrinterPageLink();
	searchResults.emptySearchResultsDetails();
	searchResults.showSearchResultsBorder();
	components.penel.hideMonthIssues();
	components.penel.hideCurrentIssues();
	components.penel.hideTopArticle();
	historyIsItResultDetails = 0;
	parityHistory.setInHistory();
}
function getAds(htmlFileURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderAds(ajaxRequest.responseText);
			} else {
				hideTopNotification();
				alert("Unable to get ads page: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/ads/mainAds.htm";
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderAds(data) {
	if (data.length > 0) {
		document.getElementById("rightPanelAdsDiv").innerHTML = data;
	} else {
		document.getElementById("rightPanelAdsDiv").innerHTML = "No data found!";
	}
	components.penel.showAds();
	hideTopNotification();
}
function getHelpPages(htmlFileURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderHTMLPage(ajaxRequest.responseText);
				printer.printerPageType = 3;
				printer.showPrinterPageLink();
				historyIsItResultDetails = 0;
				parityHistory.setInHistory();
			} else {
				hideTopNotification();
				alert("Unable to get e-publication page!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getHelpLinkPages(helpPageLinkURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				document.getElementById("helpLinkPageResult").innerHTML = "<HR style='border-TOP: 1PX SOLID STEELBLUE; HEIGHT: 1PX; margin: 0PX; padding: 0PX;'; />";
				document.getElementById("helpLinkPageResult").innerHTML += ajaxRequest.responseText;
				historyIsItResultDetails = 0;
				parityHistory.setInHistory();
			} else {
				hideTopNotification();
				alert("Unable to get e-publication page!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + helpPageLinkURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getNewsLetters(htmlFileURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderHTMLPage(ajaxRequest.responseText);
			} else {
				hideTopNotification();
				alert("Unable to get e-publication page!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getOnlineTutorials(htmlFileURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderHTMLPage(ajaxRequest.responseText);
			} else {
				hideTopNotification();
				alert("Unable to get online tutorials page: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getOtherResources(htmlFileURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderHTMLPage(ajaxRequest.responseText);
			} else {
				hideTopNotification();
				alert("Unable to get online tutorials page: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getShoppingCartCheckoutHTMLPage(htmlFileURL, jsonObject, articleURL) {
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderHTMLPage(ajaxRequest.responseText, articleURL);
				access.shoppingCart.renderGetShoppingCartCheckout(jsonObject, "checkout", articleURL);
			} else {
				hideTopNotification();
				alert("Unable to get ads page: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function getHTMLPage(htmlFileURL) {
	var plaiHTMLData = "";
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				plaiHTMLData = ajaxRequest.responseText;
			} else {
				alert("Unable to get response!: " + ajaxRequest.responseText);
			}
		}
	};
	var requestURL = ROOT_URL + "html/" + htmlFileURL;
	ajaxRequest.open("GET", requestURL, false);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
	return plaiHTMLData;
}
function renderHTMLPage(htmlData, articleURL) {
	document.getElementById("queryResultsDivId").innerHTML = htmlData;
	if (articleURL != null) {
		return;
	}
	hidePagination();
	searchResults.showSearchResultsBorder();
	searchResults.emptySearchResultsDetails();
	components.penel.hideMonthIssues();
	components.penel.hideCurrentIssues();
	components.penel.hideTopArticle();
}
function getFeedbackHTMLPage() {
	if (loginStatus == false) {
		tempData = "<DIV class='myComSocContent monthIssue'>";
		tempData += "<img src=" + ROOT_URL + "images/alertAttention.gif /> Only ComSoc Members can send feedback.<BR><BR>";
		tempData += "If you are a ComSoc member please <A href=http://dl.comsoc.org/comsocdl/DRM-authentication.action?path=LoginUser&src=feedback>Login</A><BR>";
		tempData += "</DIV>";
		tempData = "<BR>" + components.getPlainFormHTMLComponent("Login", tempData) + "<BR>";
		document.getElementById("queryResultsDivId").innerHTML = tempData;
		searchResults.hideAllPanels();
		historyIsItResultDetails = 0;
		parityHistory.setInHistory();
		printer.showPrinterPageLink();
		return;
	}
	showTopNotification();
	var ajaxRequest = zXmlHttp.createRequest();
	ajaxRequest.onreadystatechange = function() {
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {
				hideTopNotification();
				components.penel.renderFeedbackHTMLPage(ajaxRequest.responseText);
			} else {
				hideTopNotification();
				alert("Unable to get feedback page");
			}
		}
	};
	var requestURL = ROOT_URL + "html/global/userFeedback.htm";
	ajaxRequest.open("GET", requestURL, true);
	_gaq.push(["_trackPageview", requestURL]);
	ajaxRequest.send(null);
}
function renderFeedbackHTMLPage(feedbackHtmlData) {
	loadJsCssFile("js/feedback.js", "js");
	document.getElementById("queryResultsDivId").innerHTML = feedbackHtmlData;
	hidePagination();
	searchResults.showSearchResultsBorder();
	searchResults.emptySearchResultsDetails();
	components.penel.hideMonthIssues();
	components.penel.hideCurrentIssues();
	components.penel.hideTopArticle();
	components.penel.hideAds();
	printer.hidePrinterPageLink();
	historyIsItResultDetails = 0;
	parityHistory.setInHistory();
}
components.penel = new panel;