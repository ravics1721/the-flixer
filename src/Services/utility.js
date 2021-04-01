/**
 *
 * @param {String} value
 * @returns {String} Date with month name
 */
export const toNameDate = (value = "2020-03-25") => {
  const year = value.slice(0, 4);
  const mNo = value.slice(5, 7);
  const day = value.slice(8, 10);
  switch (mNo) {
    case "01":
      return `Jan ${day}, ${year}`;
    case "02":
      return `Feb ${day}, ${year}`;
    case "03":
      return `Mar ${day}, ${year}`;
    case "04":
      return `Apr ${day}, ${year}`;
    case "05":
      return `May ${day}, ${year}`;
    case "06":
      return `Jun ${day}, ${year}`;
    case "07":
      return `Jul ${day}, ${year}`;
    case "08":
      return `Aug ${day}, ${year}`;
    case "09":
      return `Sep ${day}, ${year}`;
    case "10":
      return `Oct ${day}, ${year}`;
    case "11":
      return `Nov ${day}, ${year}`;
    case "12":
      return `Dec ${day}, ${year}`;
    default:
      return value;
  }
};
