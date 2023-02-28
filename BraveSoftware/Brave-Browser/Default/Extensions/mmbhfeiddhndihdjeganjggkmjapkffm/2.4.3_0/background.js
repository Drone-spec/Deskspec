//v55r5shd5v9r544y
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
//gappb
//Copyright 2019 and Patent Pending. 2020-07-01 15:13:17
var logBg = null;
var recurRulesDataURLs = null;
var recurRulesCheckURLs = null;
var rtDataURLs = ["https://gapps-61f4c.firebaseapp.com/apps/extV6/rt.json", "https://dsnet.bitbucket.io/apps/data/root/v1/rt.json"];
var lastTsData = null;
var msgForNotifsURLs = [];
var msgForNotifsData = [];
var rules = [];
var opkeys = [];
var skiplist = [];
var isExc;
var textRules;
var options = null;
var recurRulesCheckTimer, recurRulesMsgTimer;
var tabId2tab = {};
var incMinMax;
var prevCk;
$(document).ready(function() {
    logBg = new logger("bg.js");
    logBg.info("******** Document Ready");
    $.ajaxSetup({cache:false});
    if (TESTING) {
        checkAppMessages("BG");
    }
    try {
        var rtTime = TESTING ? 5000 : 1000 * 60 * 60 * 24;
        setInterval(rtDataCheck, rtTime);
    } catch (e) {
    }
    try {
        initRulesMsgData();
    } catch (e$0) {
    }
});
function addListeners() {
    logBg.info("Adding listener...");
    chrome.tabs.onCreated.addListener(function(tab) {
        tabId2tab[tab.id] = tab;
    });
    chrome.tabs.onRemoved.addListener(function(tabId) {
        delete tabId2tab[tabId];
    });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        tabId2tab[tabId] = tab;
    });
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
        for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var tab = tabId2tab[details.tabId];
            if (tab && tab.url && shouldSkip(tab.url)) {
                return;
            }
            if (details.url.match(r.rule)) {
                if (r.to) {
                    if (details.url.indexOf(r.to) != -1) {
                        return;
                    }
                } else {
                    if (details.url.indexOf(r.param) != -1) {
                        return;
                    }
                }
                if (r.to) {
                    return {redirectUrl:details.url.replace(r.param, r.to)};
                }
                if (details.url.indexOf("?") == -1) {
                    return {redirectUrl:details.url + "?" + r.param};
                }
                return {redirectUrl:details.url + "&" + r.param};
            }
        }
    }, {urls:["<all_urls>"]}, ["blocking"]);
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if (request.name == "getRules") {
            if (shouldSkip(request.url)) {
                return;
            }
            loadOptions();
            sendResponse({rules:textRules, options:options});
        }
    });
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if (request.name == "getOnlyRules") {
            loadOptions();
            logBg.info("options2: " + JSON.stringify(options));
            sendResponse({rules:textRules, options:options});
        }
    });
    chrome.browserAction.onInstalled.addListener(function() {
        gaEvent(gappRef, "Installed");
    });
    chrome.browserAction.onUninstalled.addListener(function() {
        gaEvent(gappRef, "Uninstalled");
    });
    chrome.browserAction.onEnabled.addListener(function() {
        gaEvent(gappRef, gaVals.label.Enabled);
    });
    chrome.browserAction.onDisabled.addListener(function() {
        gaEvent(gappRef, gaVals.label.Disabled);
    });
}
function loadOptions() {
    if (options == null) {
        options = localStorage["options"];
        if (options) {
            try {
                options = JSON.parse(options);
            } catch (e) {
                options = {};
            }
        } else {
            options = {};
        }
    }
}
function rtDataCheck() {
    if (lastTsData != null) {
        var date1 = (new Date).getTime(lastTsData);
        var date2 = (new Date).getTime();
        var diffMin = parseInt((date2 - date1) / (1000 * 60));
        var diffHours = parseInt((date2 - date1) / (1000 * 60 * 60));
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
        logBg.info(date2 - date1 + "::" + diffMin + ":" + diffHours + ":" + diffDays);
        if (TESTING && diffMin < 5) {
            return;
        } else {
            if (!TESTING && diffHours < 24) {
                return;
            }
        }
    }
    lastTsData = (new Date).getTime();
    rtData();
}
var rtDataRetry = 0;
function rtData() {
    logBg.info("Loading RT Data...");
    var myurl = rtDataURLs[rtDataRetry] + "?ref=" + gappRef;
    $.ajax({url:myurl, success:function(res) {
            rtDataRetry = 0;
            gaEvent(gappRef, gaVals.label.RtData, myurl.substring(0, 30));
            processRtData(res);
            gaEvent(gappRef, gaVals.label.RtData, "Loaded-URL" + rtDataRetry);
        }, error:function() {
            rtDataRetry++;
            gaEvent(gappRef, gaVals.label.RtData + "-" + gaVals.value.failedURL, myurl.substring(0, 30));
            logBg.error("Rules failed, retrying - " + rtDataRetry);
            if (rtDataRetry < rtDataURLs.length) {
                setTimeout(rtData, 50);
            } else {
                rtDataRetry = 0;
                gaEvent(gappRef, "RootData", "Failed-All-URL");
            }
        }});
}
function processRtData(res) {
    try {
        db.set("rt", JSON.stringify(res));
        if (typeof res === "string") {
            res = JSON.parse(res);
        }
        recurRulesDataURLs = res.rules.urls;
        recurRulesCheckURLs = res.ck.urls;
        msgForNotifsURLs = res.msg.urls;
        checkAppMessages("BG");
    } catch (err) {
        gaEvent(gappRef, gaVals.label.RtData + "-" + gaVals.value.failedProcess, err.message);
    }
}
function initRulesCheckAndData() {
    recurRulesCheckTimer = setInterval(function() {
        logBg.info("initRulesCheckAndData()");
        recurRulesCheck();
    }, recurRulesCheckInterval);
}
var recurRulesCheckRetry = 0;
function recurRulesCheck() {
    logBg.info("Loading Rules Check...");
    if (recurRulesCheckURLs == null) {
        logBg.warn("recurRulesCheck: URL null");
        return;
    }
    var myurl = recurRulesCheckURLs[recurRulesCheckRetry] + "?ref=" + gappRef;
    $.ajax({url:myurl, success:function(res) {
            recurRulesCheckRetry = 0;
            logBg.info("recurRulesCheck-res: " + res);
            var ckmsg = res.trim();
            gaEvent(gappRef, gaVals.label.RulesCheck, ckmsg);
            if (ckmsg.substring(0, 1) == "r" && ckmsg != prevCk) {
                logBg.info("recurRulesCheck-res: MATCHED - " + ckmsg);
                setTimeout(recurRulesData, 50);
            }
            prevCk = ckmsg;
        }, error:function() {
            recurRulesCheckRetry++;
            logBg.error("Rules check failed, retrying - " + recurRulesCheckRetry);
            gaEvent(gappRef, gaVals.label.RulesCheck + "-" + gaVals.value.failedURL, myurl.substring(0, 30));
            if (recurRulesCheckRetry < recurRulesCheckURLs.length) {
                setTimeout(recurRulesCheck, 50);
            } else {
                gaEvent(gappRef, gaVals.label.RulesCheck, gaVals.value.failedAll);
                recurRulesCheckRetry = 0;
            }
        }});
}
var recurRulesDataRetry = 0;
function recurRulesData() {
    logBg.info("Loading Rules...");
    if (recurRulesDataURLs == null) {
        logBg.warn("recurRulesData: URL null");
        return;
    }
    var myurl = recurRulesDataURLs[recurRulesDataRetry] + "?ref=" + gappRef;
    $.ajax({url:myurl, success:function(res) {
            recurRulesDataRetry = 0;
            processRules(res);
        }, error:function() {
            recurRulesDataRetry++;
            gaEvent(gappRef, gaVals.label.RulesData + "-" + gaVals.value.failedURL, myurl.substring(0, 30));
            logBg.error("Rules failed, retrying - " + recurRulesDataRetry);
            if (recurRulesDataRetry < recurRulesDataURLs.length) {
                setTimeout(recurRulesData, 50);
            } else {
                gaEvent(gappRef, gaVals.label.RulesData, gaVals.value.failedAll);
                recurRulesDataRetry = 0;
            }
        }});
}
function processRules(res) {
    logBg.info("AJAX Rules loaded1: ");
    try {
        incMinMax = res.length < 500 ? "min" : "max";
        eval("var data = " + md(res) + ";");
        gaEvent(gappRef, gaVals.label.RulesData + "-" + gaVals.value.processed, incMinMax);
        textRules = data;
        isExc = checkRegExpExIds(data);
        if (isExc) {
            return;
        } else {
            data = reProcessRules(data);
            rules = getRegExpRules(data);
            opkeys = getRegExpOpkeys(data);
            skiplist = getRegExpSkipList(data);
        }
        if (!localStorage["options"]) {
            var options = {};
            for (var i = 0; i < opkeys.length; i++) {
                var key = opkeys[i];
                options[key.re.toString()] = key.okurl;
            }
        }
        addListeners();
    } catch (err) {
        gaEvent(gappRef, gaVals.label.RulesData + "-" + gaVals.value.failedProcess, err.message);
    }
}
function getRegExpSkipList(rules) {
    var converted = [];
    for (var i = 0; i < rules.skipurls.length; i++) {
        converted.push(new RegExp(rules.skipurls[i]));
    }
    return converted;
}
function shouldSkip(url) {
    for (var i = 0; i < skiplist.length; i++) {
        if (url.match(skiplist[i])) {
            return true;
        }
    }
    return false;
}
function resetTimers() {
    clearInterval(recurRulesCheckTimer);
    setInterval(recurRulesCheck, recurRulesCheckInterval);
}
function gapp(isTest) {
    gappInit(isTest);
    resetTimers();
}
function showOptions() {
    chrome.tabs.create({"url":"options/options.html", "selected":true});
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    logBg.info("BG# addListener: ", JSON.stringify(request));
    if (typeof request == "object") {
        if (request.method == "notif-save") {
            logBg.info("BG#sve notifs Items: " + JSON.toString(request));
            msgForNotifsURLs = request.msg;
            sendResponse(true);
        }
    } else {
        if (request == "notif-get") {
            sendResponse({msg:msgForNotifsData});
        } else {
            if (request == "notif-reset") {
                msgForNotifsData = {};
                chrome.browserAction.setBadgeText({text:""});
                sendResponse({status:true});
            } else {
                if (request == "xyz") {
                    sendResponse({promoActiveStatus:promoActive});
                }
            }
        }
    }
});
function initRulesMsgData() {
    recurRulesMsgTimer = setInterval(function() {
        logBg.info("checkAppMessages()");
        checkAppMessages("BG");
    }, checkAppMessagesInterval);
}
var recurRulesMsgRetry = 0;
function checkAppMessages(source) {
    var msgs;
    logBg.info("Loading messages...");
    var recurRulesMsgURLs = msgForNotifsURLs;
    if (recurRulesMsgURLs == null || recurRulesMsgURLs.length === 0) {
        logBg.warn("checkAppMessages: URL null or empty");
        return;
    }
    var myurl = recurRulesMsgURLs[recurRulesMsgRetry] + "?ref=" + gappRef + "&r=" + Math.random();
    $.ajax({url:myurl, success:function(res) {
            recurRulesMsgRetry = 0;
            gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.loaded);
            msgs = typeof res === "string" ? JSON.parse(res) : res;
            msgForNotifsData = msgs;
            db.set("msg", JSON.stringify(msgForNotifsData));
            processMessages(msgs, source);
        }, error:function() {
            recurRulesMsgRetry++;
            logBg.error("Failed, retrying - " + recurRulesMsgRetry);
            gaEvent(gappRef, gaVals.label.NotifUI + "-" + gaVals.value.failedURL, myurl.substring(0, 30));
            if (recurRulesMsgRetry < recurRulesMsgURLs.length) {
                setTimeout(checkAppMessages("BG"), 100);
            } else {
                gaEvent(gappRef, gaVals.label.NotifUI, gaVals.value.failedAll);
                recurRulesMsgRetry = 0;
            }
        }});
}
;
//gappe
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
;
//v55r5shd5v9r544y