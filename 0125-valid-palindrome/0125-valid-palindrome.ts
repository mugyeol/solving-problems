function isPalindrome(s) {
    let left = 0;
    let filteredString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let right = filteredString.length - 1;

    while (left < right) {

        // 대소문자를 구분하지 않고 비교
        if (filteredString[left] !== filteredString[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
