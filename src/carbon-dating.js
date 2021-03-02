const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample( sampleActivity ) {
  if (sampleActivity === undefined || isNaN(sampleActivity) || Number(sampleActivity) <= 0 || Number(sampleActivity) >= 15 || (typeof sampleActivity) !== 'string') return false
  if(parseFloat === NaN)
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
git add
};
