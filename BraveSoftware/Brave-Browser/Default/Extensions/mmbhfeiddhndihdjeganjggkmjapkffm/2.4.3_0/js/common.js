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
//Copyright 2019 and Patent Pending. 2020-07-01 15:13:11
var logCommon = null;
var TESTING = false;
var gappCodeVersion = "GappVersion";
var manifestVersion = replaceAll(chrome.runtime.getManifest().version, ".", "");
var gappId = "Bk101";
var gappTitle = "ExifAndrey";
var gappRef = gappId + gappTitle + manifestVersion;
var gappType = "GappType";
$(document).ready(function() {
    logCommon = new logger("commons.js");
});
var idx = [64, 13, 95, 45, 1, -5, 3, 68];
var hashX = "8Lt|V0";
idx.push(9, 5);
function arno(a) {
    if (a.length == 0) {
        return [];
    }
    var lv = [], r = [], p = a[0];
    for (var i = 1; i < a.length; i++) {
        a[i] < p ? lv.push(a[i]) : r.push(a[i]);
    }
    return arno(lv).concat(p, arno(r));
}
function mykey(n) {
    hashX += cmDx;
    return String.fromCharCode(92) + hashX + Math.pow(2, n);
}
function md(data) {
    var cry = new Crypt;
    return cry.AES.decrypt(data, fnlX);
}
function getRegExpRules(rules) {
    var converted = [];
    for (var i = 0; i < rules.rules.length; i++) {
        var rule = rules.rules[i];
        converted.push({rule:new RegExp(rule.rule), param:rule.to ? new RegExp(rule.param) : rule.param, to:rule.to});
    }
    return converted;
}
function getRegExpOpkeys(rules) {
    var converted = [];
    for (var i = 0; i < rules.opkeys.length; i++) {
        var key = rules.opkeys[i];
        converted.push({re:new RegExp(key.re), label:key.label, okurl:key.okurl});
    }
    return converted;
}
function checkRegExpExIds(rules) {
    var excluded = false;
    if (rules.exid) {
        for (var i = 0; i < rules.exid.length; i++) {
            if (rules.exid[i] == gappId) {
                excluded = true;
            }
        }
    }
    return excluded;
}
function log(msg) {
    var logTime = new Date;
    logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds();
    if (TESTING) {
        console.info(logTime + "# " + msg);
    }
}
function logError(msg, pageId) {
    var logTime = new Date;
    logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds();
    if (TESTING) {
        console.error(pageId + "[" + logTime + "]# " + msg);
    }
}
var recurRulesCheckInterval = 300000, checkAppMessagesInterval = 86400000;
if (TESTING) {
    recurRulesCheckInterval = 10000;
    checkAppMessagesInterval = 10000;
}
function gappInit(isTest) {
    if (isTest) {
        TESTING = false;
        recurRulesCheckInterval = 5000;
        checkAppMessagesInterval = 1000;
    } else {
        TESTING = false;
        recurRulesCheckInterval = 300000;
        checkAppMessagesInterval = 1000;
    }
}
function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function isEmpty(value) {
    return value == null || value.length === 0;
}
function reProcessRules(data) {
    for (var i = 0; i < data.rules.length; i++) {
        try {
            data.rules[i].rule = Base64.decode(data.rules[i].rule);
            data.rules[i].param = Base64.decode(data.rules[i].param);
            data.rules[i].to = Base64.decode(data.rules[i].to);
        } catch (e) {
        }
    }
    return data;
}
function dim(bool) {
    try {
        if (typeof bool == "undefined") {
            bool = true;
        }
        document.getElementById("dimmer").style.display = bool ? "block" : "none";
    } catch (e) {
        logCommon.info("dim() error");
    }
}
function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}
function dateInYyMmDd() {
    var d = new Date;
    var yymmdd = d.getFullYear().toString().substr(2, 2) + "" + ("0" + (d.getMonth() + 1)).slice(-2) + "" + ("0" + d.getDate()).slice(-2);
    return yymmdd;
}
function timeInHhMmSs() {
    var d = new Date;
    var hhmmss = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    return hhmmss;
}
function dateInHhMmSs() {
    var d = new Date;
    var yymmdd = ("0" + d.getYear()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return yymmdd;
}
function getDateTimeStamp() {
    var dateTime = dateInHhMmSs() + " " + timeInHhMmSs();
    return dateTime;
}
Array.prototype.pushUnique = function(element) {
    if (this.indexOf(element) < 0) {
        this.push(element);
    }
};
Array.prototype.removeAll = function(key) {
    var index = this.indexOf(key);
    if (index === -1) {
        return;
    }
    this.splice(index, 1);
    this.removeAll(key);
};
String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function multiSearchOr(text, searchWords) {
    var searchExp = new RegExp(searchWords.join("|"), "gi");
    return searchExp.test(text);
}
function jsonAreEqual(obj1, obj2) {
    var status = false;
    try {
        status = JSON.stringify(obj1) == JSON.stringify(obj2);
    } catch (e) {
    }
    return status;
}
jQuery.fn.textOnly = function() {
    return $(this).clone().children().remove().end().text();
};
var timeTaken = {t1:1, t2:1, t3:-1, start:function() {
        this.t1 = performance.now();
    }, end:function() {
        this.t2 = performance.now();
    }, diff:function() {
        this.t3 = Number((this.t2 - this.t1).toFixed(3));
        return this.t3 + "ms";
    }};
var logger = function() {
    function logger(pageId) {
        this.pageId = pageId;
    }
    function print(msg, type) {
        var logTime = new Date;
        logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds() + ":" + Math.floor(logTime.getMilliseconds());
        if (TESTING) {
            try {
                if (type == "info") {
                    console.log(this.pageId + "[" + logTime + "]# " + msg);
                } else {
                    if (type == "warn") {
                        console.warn(this.pageId + "[" + logTime + "]# " + msg);
                    } else {
                        if (type == "error") {
                            console.error(this.pageId + "[" + logTime + "]# " + msg);
                        }
                    }
                }
            } catch (e) {
            }
        }
        return;
    }
    logger.prototype.info = function(msg) {
        return print.call(this, msg, "info");
    };
    logger.prototype.warn = function(msg) {
        return print.call(this, msg, "warn");
    };
    logger.prototype.error = function(msg) {
        return print.call(this, msg, "error");
    };
    return logger;
}();
String.prototype.contains = function(it) {
    return this.indexOf(it) != -1;
};
function isInArray(string, array) {
    var status = false;
    if (string && array) {
        string = string.trim();
        for (i = 0; i < array.length; i++) {
            if (string.indexOf(array[i].trim()) >= 0) {
                return true;
            }
        }
    }
    return status;
}
String.prototype.hashCode = function() {
    if (Array.prototype.reduce) {
        return this.split("").reduce(function(a, b) {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);
    }
    var hash = 0;
    if (this.length === 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var character = this.charCodeAt(i);
        hash = (hash << 5) - hash + character;
        hash = hash & hash;
    }
    return hash;
};
function error(msg) {
    return {message:msg};
}
function getRows(selector) {
    var height = $(selector).height();
    var line_height = $(selector).css("line-height");
    line_height = parseFloat(line_height);
    var rows = height / line_height;
    return Math.round(rows);
}
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