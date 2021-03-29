module.exports = function createDreamTeam(arr) {
    if (!Array.isArray(arr)) {
      return false
    }
    else {
      n = [];
      if (arr === []) return arr;
      else {
        arr.forEach(function(item) {
          if (typeof(item) == 'string') {
            str = item.trim().toUpperCase();
            n.push(str[0]);
          }
        });
        if ( n != []) return n.sort().join('');
        else return n;
      }
    }
};
