const palindromes = function (string) {
  let isPalindrome;
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  const newString = processedString.split().reverse().join();
  processedString === newString
    ? (isPalindrome = true)
    : (isPalindrome = false);
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
