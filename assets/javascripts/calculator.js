var Calculator = function() {
  var baseTime;

  var timeAsString = function(time) {
    return twoDigits(time.getHours()) + ":" + twoDigits(time.getMinutes());
  };

  var twoDigits = function(string) {
    var collection = ("00" + string).split("");
    return collection[collection.length - 2] + collection[collection.length - 1];
  }

  var calcTime = function(arrivedAt, period) {
    var collection = arrivedAt.split(/[^0-9]/);
    var hours = collection[0];
    var minutes = collection[1];
    var dateTime = new Date(2011, 01, 01, hours, minutes);
    var result = new Date(dateTime.getTime() + period);
    return timeAsString(result);
  };

  return {
    _timeAsString: function(time) {
        return timeAsString(time);
    },
    setBaseTime: function(time){
      window.localStorage.baseTime = time;
      var collection = time.split(/[^0-9]/);
      var hours = parseInt(collection[0], 10);
      var minutes = parseInt(collection[1], 10);
      baseTime = ((hours * 60 + minutes) * 60 * 1000);
    },

    minTime: function(arrivedAt) {
      var period = (baseTime - (15 * 60 * 1000));
      var dateTime = new Date(period);
      return calcTime(arrivedAt, period);
    },

    regularTime: function(arrivedAt) {
      return calcTime(arrivedAt, baseTime);
    },

    maxTime: function(arrivedAt) {
      var period = (baseTime + (15 * 60 * 1000));
      return calcTime(arrivedAt, period);
    }
  };
}

