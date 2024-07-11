export default {
  IsPalindrome(num: number): boolean {
    let numString = num.toString();

    for (let i = 0; i <= numString.length; i++) {
      if (numString.charAt(i) != numString.charAt(numString.length - 1 - i)) {
        return false;
      }
    }
    return true;
  },
};
