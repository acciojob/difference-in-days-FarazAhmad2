var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const date1_ms = Date.parse(date1);
    const date2_ms = Date.parse(date2);
    return Math.round((date2_ms - date1_ms) / (1000 * 60 * 60 * 24));
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
