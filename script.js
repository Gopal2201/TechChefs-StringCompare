function CheckStr () {
    // Getting the value from User
    let Str1 = document.getElementById("str1").value;
    let Str2 = document.getElementById("str2").value;
    // Converting the string to Array
    let ArrStr1 = ArrCon(Str1);
    let ArrStr2 = ArrCon(Str2);
    // Comparing the strings
    let tempRes1 = CompStr(ArrStr1, ArrStr2);
    let tempRes2 = CompStr(ArrStr2, ArrStr1);
    // Empty Array check
    let result1 = EmptyArray(tempRes1);
    let result2 = EmptyArray(tempRes2);
    // Displaying the final result
    document.getElementById("res1").innerHTML = "Result 1: " + result1.join("");
    document.getElementById("res2").innerHTML = "Result 2: " + result2.join("");
}

// Comparing the strings
function CompStr(temp, temp1) {
    let res = [];
    let z = 0;
    let count = 0;
    for (let i=0; i<temp.length; i++) {
        for (let j=0; j<temp1.length; j++) {
            if (temp[i] == temp1[j]) {
                count = 1;
            }
        }
        if (count === 0) {
            res[z] = temp[i];
            z++;
        }
        count = 0;
    }
return res;
}

// Converting the string to Array
function ArrCon (value) {
    let temp = [];
    let val = value.toUpperCase();
    for (let i=0; i<val.length; i++)
    {
        temp[i] = val[i];
    }
    return temp;
}

// Empty Array check
function EmptyArray(val) {
    if (val.length === 0) {
        val[0] = "null";
    }
    console.log(val);
    return val;
}