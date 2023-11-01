function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

function highestValuePalindrome(s, n, k) {
    let low = 0;
    let high = n - 1;
    let str = s.split('');
    let differentNumbers = 0;
    let i = 0;
    let j = n - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            differentNumbers++;
        }
        i++;
        j--;
    }

    if (differentNumbers > k) {
        return "-1";
    }
    
    while (high >= low) {
        if (k <= 0) {
            break;
        }

        if (str[low] === str[high]) {
            if (k > 1 && k - 2 >= differentNumbers && str[low] !== '9') {
                str[low] = '9';
                str[high] = '9';
                k -= 2;
            }
        } 
        else {
            if (k > 1 && k - 2 >= differentNumbers - 1) {
                if (str[low] !== '9') {
                    str[low] = '9';
                    k--;
                }
                if (str[high] !== '9') {
                    str[high] = '9';
                    k--;
                }
            } else {
                if (str[low] > str[high]) {
                    str[high] = str[low];
                } else {
                    str[low] = str[high];
                }
                k--;
            }
            differentNumbers--;
        }

        if (low === high && k > 0) {
            str[low] = '9';
            k--;
        }

        low++;
        high--;
    }

    s = str.join('');
    return isPalindrome(s) ? s : "-1";
}

const s = "092282";
const n = s.length;
const k = 2;
console.log(highestValuePalindrome(s, n, k))
