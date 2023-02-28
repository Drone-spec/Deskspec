//Copyright 2019 and Patent Pending. 2020-07-01 15:13:11
function EXIFInjection() {
  var dialog, exifSettings;
  function constructor() {
    chrome.extension.onRequest.addListener(function(request, sender, callback) {
      if (request["action"] == "showExif") {
        exif_inject(request["data"]);
        gaEvent(gappRef, gaVals.label.exif, gaVals.value.shown);
        checkAppMessagesFromUI();
      } else {
        if (request["action"] == "startExifProcessing") {
          $("img[src='" + request["data"] + "']")["ajaxLoader"]();
        }
      }
    });
    chrome.extension.sendRequest({"action":"getSettings"}, function(settings) {
      exifSettings = settings;
      if (exifSettings["overlayEnabled"]) {
        if (re.PHOTO_PAGE.test(location.href)) {
          chrome.extension.sendRequest({"action":"checkFlikrExif", "id":page.getPhotoId()}, function(data) {
            var d = $.extend(data, {"src":page.getPhotoUrl()});
            injectOverlay($("div.photo-div img"), d);
          });
        } else {
          $("img:visible").each(function() {
            var img = $(this);
            if (img.height() >= 75 && img.width() >= 75) {
              if (re.PHOTO_URL.test(this.src)) {
                chrome.extension.sendRequest({"action":"checkFlikrExif", "id":page.getPhotoId(this.src)}, function(data) {
                  var d = $.extend(data, {"src":this.src});
                  injectOverlay(img, d);
                });
              } else {
                chrome.extension.sendRequest({"action":"checkExif", "src":this.src}, function(data) {
                  if (data != undefined) {
                    if (Object["keys"](data["data"]).length) {
                      injectOverlay(img, data);
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  }
  function exif_inject(data) {
    var img = null;
    try {
      img = $("img[src='" + data.src + "']")["ajaxLoaderRemove"]();
    } catch (e) {
      img = $("img[src='" + data.src + "']");
    }
    var content, titlebar;
    function closeExif() {
      $("body").removeClass("ExifViewerBlur");
      $(".ExifViewer").css({"opacity":0.5, "right":"-350px"});
      window.setTimeout(function() {
        $(".ExifViewer").remove();
        $(document.body)["unbind"]("click", closeExif);
      }, 300);
    }
    if ($(".ExifViewer").length) {
      content = $(".ExifViewer > div.ExifVewerTabData").empty().exif(data, exifSettings);
    } else {
      content = $("<div />").appendTo(document.documentElement).addClass("ExifViewer").attr("img", data["src"]).append($("<div />").addClass("ExifViewer-titlebar").append($("<img />").attr("src", chrome.extension.getURL("camera_blue-16.png")).css({"padding-right":"5px"})).append($("<span />").append($("<a />").attr("href", "https://exifviewers.com/").attr("target", "_blank").text("ExifViewers.com").css({"color":"#32b3eb !important", "font-size":"small", "font-weight":"bold", "text-decoration":"none", 
      "text-shadow":"none", "padding":"0px 4px"}))).append(titlebar = $("<span />").addClass("exif-dialog-titlebar").css({"float":"right", "white-space":"nowrap"}))).append($("<div />").addClass("ExifVewerTabData").exif(data, exifSettings));
      $(".ExifViewer").css({"opacity":0.95, "right":"0px"});
      $(document.body).bind("click", closeExif).addClass("ExifViewerBlur");
      titlebar.append($('<a href="https://www.paypal.me/VeereshD" target="_tab" title="Donate"/>').addClass("exif-dialog-titlebar-heart").attr("role", "button").append($("<span />").addClass("exif-icon exif-icon-heart"))).append($('<a href="' + chrome.extension.getURL("options.html") + '" target="_blank" title="Options"/>').addClass("exif-dialog-titlebar-wrench").attr("role", "button").append($("<span />").addClass("exif-icon exif-icon-wrench"))).append($('<a href="#" title="Help"/>').addClass("exif-dialog-titlebar-alert").attr("role", 
      "button").click(function() {
        window.open("http://tiny.cc/ExifHelp", "_tab");
        return false;
      }).append($("<span />").addClass("exif-icon exif-icon-alert"))).append($('<a href="#" title="Close"/>').addClass("exif-dialog-titlebar-close").attr("role", "button").click(function() {
        closeExif();
        return false;
      }).append($("<span />").addClass("exif-icon exif-icon-close")));
    }
  }
  function injectOverlay(img, data, gps) {
    var position = img.offset(), size = {"width":img.outerWidth(), "height":img.outerHeight()};
    if (position == undefined) {
      return;
    }
    $("<span />").addClass("overlayContainer").click(function(e) {
      exif_inject(data);
      e.stopPropagation();
      e.preventDefault();
    }).css({"top":position["top"] + 22, "left":position["left"] + 22}).appendTo(document.documentElement).hover(function() {
      $(this).animate({"opacity":1}, 300);
    }, function() {
      $(this).animate({"opacity":.5}, 300);
    });
    img.mouseover(function(e) {
      if (e["ctrlKey"] && $(".ExifViewer").length && img["src"] != $(".ExifViewer").attr("img")) {
        exif_inject(data);
      }
    });
  }
  constructor();
}
var exif;
if (!/(?:docs|drive)\.google\.com/.test(location.href)) {
  exif = new EXIFInjection;
}
;
