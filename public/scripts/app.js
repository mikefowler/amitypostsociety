window.onload = function () {
  var downloadLetter = document.getElementById('download-letter')
    , downloadA2 = document.getElementById('download-a2');

  if (downloadLetter) {
    addListener(downloadLetter, 'click', function() {
      ga('send', 'event', 'download', 'click', 'letter');
    });
  }

  if (downloadA2) {
    addListener(downloadA2, 'click', function() {
      ga('send', 'event', 'download', 'click', 'a2');
    });
  }
};

function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}
