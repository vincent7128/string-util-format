(function() {
  var WEEKS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var format = function(src) {
    for (var i = 1, j = arguments.length; i < j; i++) {
      if (arguments[i] instanceof Array) {
        for (var x = 0, y = arguments[i].length; x < y; x++) {
          src = src.replace(
            new RegExp('\\{' + x + '\\}', 'g'), arguments[i][x]
          );
        }
      } else if (arguments[i] instanceof Date) {
        src = format(src, {
          year: arguments[i].getFullYear(),
          month: ('0' + (arguments[i].getMonth() + 1)).slice(-2),
          date: ('0' + arguments[i].getDate()).slice(-2),
          week: WEEKS[arguments[i].getDay()],
          hour: ('0' + arguments[i].getHours()).slice(-2),
          min: ('0' + arguments[i].getMinutes()).slice(-2),
          sec: ('0' + arguments[i].getSeconds()).slice(-2)
        });
      } else if (arguments[i] instanceof Object) {
        for (var k in arguments[i]) {
          if (arguments[i].hasOwnProperty(k)) {
            src = src.replace(
              new RegExp('\\{' + k + '\\}', 'g'), arguments[i][k]
            );
          }
        }
      } else {
        src = src.replace(
          new RegExp('\\{' + (i - 1) + '\\}', 'g'), arguments[i]
        );
      }
    }
    return src;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = format;
  } else {
    window.format = format;
  }
})();
