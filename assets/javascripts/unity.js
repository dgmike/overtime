// ==UserScript==
// @name          dgmike-overtime
// @version       @VERSION@
// @author        Michael Granados
// ==/UserScript==

var overtimeIntervalID = setInterval(function(){
    if (external && external.getUnityObject) {
      clearInterval(overtimeIntervalID);
      window.Unity = external.getUnityObject(1.0);
      Unity.init({
        name: "Overtime",
        iconUrl: "//favicon.ico",
        onInit: null
      });
      setInterval(
        function(){
          var baseTime = window.localStorage.baseTime || "09:48";
          var arrivedAt = document.querySelector("#arrived_at").value;
          var calc = new Calculator();
          calc.setBaseTime(baseTime);
          if (calc.minTime(arrivedAt) == calc._timeAsString(new Date())) {
            var header = "HORA BOA!";
            var message = "Chegou a hora de ir embora!";
            Unity.Notification.showNotification(header, message, false);
          };
        },
        20000
      );
    }
  }, 
  100
);

  // vim: set ts=2 sw=2 tw=0 et :
