const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(seasonDate) {
  if (!seasonDate) {
    return 'Unable to determine the time of year!';

  };
  if (isNaN(seasonDate)) throw new Error();
  monthValue = seasonDate.getMonth();
  if (monthValue < 2 || monthValue == 11) return 'winter';
  if (monthValue > 1 && monthValue < 5) return 'spring';
  if (monthValue > 4 && monthValue < 8) return 'summer';
  if (monthValue > 7 && monthValue < 11) return 'autumn';
  
};
