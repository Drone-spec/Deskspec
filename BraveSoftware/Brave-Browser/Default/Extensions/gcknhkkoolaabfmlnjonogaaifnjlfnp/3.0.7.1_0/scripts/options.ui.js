var simple_tooltip=function(a,b){$(a).each(function(a){var c=$("<div/>").attr({"class":b,id:b+a}),d=$("<p/>").html(chrome.i18n.getMessage($(this).attr("id")));c.append(d),$("body").append(c);var e=$("#"+b+a);$(this).removeAttr("title").mouseover(function(){e.show()}).mousemove(function(a){e.css({left:a.pageX+15,top:a.pageY+15})}).mouseout(function(){e.hide()})})};$(document).ready(function(){$("body").on("click","button",function(){var a=$(this).attr("id");switch(a){case"proxylistMoveUp":moveSelectedProxyUp();break;case"proxylistMoveDown":moveSelectedProxyDown();break;case"addNewProxy":addNewProxy();break;case"proxylistEdit":editProxy();break;case"proxylistCopy":copySelectedProxy();break;case"proxylistDelete":deleteSelectedProxy();break;case"btnExport":exportConfig();break;case"logClear":logClear();break;case"logRefresh":logRefresh();break;case"logOpen":logOpen();break;case"logCopy":logCopy();break;case"logDelete":logDelete();break;case"logSaveToFile":logSaveToFile();break;case"logPatternsForSelected":logPatternsForSelected();break;case"logPatternsForAll":logPatternsForAll();break;case"pacViewButton":openPacViewDlg();break;case"testPac":testPac();break;case"addNewPattern":addNewPattern();break;case"editPattern":editPattern();break;case"copySelectedPattern":copySelectedPattern();break;case"deleteSelectedPattern":deleteSelectedPattern()}}),$("#proxyHost").keyup(function(){var a=$(this).val();a=a.replace(/\s/g,""),$(this).val(a)}),$("#proxyHost").change(function(){var a=document.getElementById("proxyPort");this.value=this.value.replace(/^\s*(.*?)\s*$/,"$1");var b=this.value.match(/^(.*?)(?:\s*:\s*|\s+)([0-9]+)$/);if(b){var c=b[2]-0;65536>c&&(this.value=b[1],a.value=c)}}),$("#proxyPort").keypress(function(a){var b=$(this).val()+String.fromCharCode(a.which);(b>65535||"0"===b)&&a.preventDefault(),a.shiftKey&&a.preventDefault()}),$("#logSize").keypress(function(a){a.shiftKey&&a.preventDefault()}),$("#proxyPort").numeric(),$("#logSize").numeric(),$("#proxyPACInterval").numeric(),$("span, th, a, button, h1").each(function(){(0==this.childNodes.length||1==this.childNodes.length&&"#text"==this.childNodes[0].nodeName)&&(this.innerText=this.innerText)}),console.log("ready"),chrome.runtime.sendMessage({trackEvent:{category:"Options",action:"open"}}),$(".navbar-item:not(diabled='true')").click(function(){$(".navbar-item").removeClass("navbar-item-selected");var a=$(this);$(".tabPage").hide(),a.addClass("navbar-item-selected");var b=$(document.getElementById(a.attr("pagename"))).show().attr("id");onTabShow(b)}),$("#import-link").click(function(a){a.preventDefault(),$("#tabImport").click()}),chrome.runtime.onMessage.addListener(function(a){a.data&&(console.log("got data: "+a.data),0==a.data.indexOf("#tab")?$(a.data).click():0==a.data.indexOf("quickadd#")?$("#tabQuick").click():0==a.data.indexOf("addpattern#")&&addPattern(unescape(a.data.replace("addpattern#",""))))});var a=chrome.i18n.getMessage("@@extension_id");chrome.management.get(a,function(a){$("#appString").text(a.name+" "+a.version)}),simple_tooltip(".help","tooltip")});