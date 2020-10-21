let s1 = prompt('Nhập chuỗi 1');
let s2 = prompt('Nhập chuỗi 2');
var str1 = '';
for (let i = 0; i < s1.length; i++) {
    var a = s1.charAt(i);
    if (i < s2.length) {
        var b = s2.charAt(i);
        str1 += a.concat(b);
        if (i == s1.length - 1) {
            for (let k = i+1; k < s2.length; k++) {
                var c = s2.charAt(k);
                str1 += c;
            }

        }
    } else {
        str1 += a;
    }

}
alert(str1);
