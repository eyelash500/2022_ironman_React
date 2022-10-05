function checkBasic(code) {
  let result = checkLength(code);
  result = checkDigit(code);
}
function checkLength(code) {
  let r = false;
  if (length(code) === 10) r = true;

  console.log("check legnth: " + r);

  return r;
}
function checkDigit(code) {
  const testStr = code.substring(1);
  for (let i = 0; i < testStr.length; i++) {
    if (!isNaN(testStr.charAt(i))) {
      return false;
    }
  }
}

function checkPlace(code) {
  const cityDic = {
    A: "10", //臺北市
    B: "11", //臺中市
    C: "12", //基隆市
    D: "13", //臺南市
    E: "14", //高雄市
    F: "15", //新北市
    G: "16", //宜蘭縣
    H: "17", //桃園市
    I: "34", //嘉義市
    J: "18", //新竹縣
    K: "19", //苗栗縣
    M: "21", //南投縣
    N: "22", //彰化縣
    O: "35", //新竹市
    P: "23", //雲林縣
    Q: "24", //嘉義縣
    T: "27", //屏東縣
    U: "28", //花蓮縣
    V: "29", //臺東縣
    W: "32", //金門縣
    X: "30", //澎湖縣
    Z: "33", //連江縣
    L: "20", //臺中縣
    R: "25", //臺南縣
    S: "26", //高雄縣
    Y: "31", //陽明山管理局
  };

  if (cityDic.hasKey(code)) {
    console.log("check place: " + code + "=" + cityDic[code]);

    return cityDic[code];
  }
  console.log("check place(error): " + code + "=0");

  return 0;
}

function checkGender(code) {
  const genderArr = [
    1, //男
    2, //女
    8, //外來人口-男
    9, //外來人口-女
  ];

  if (genderArr.find(code)) {
    console.log("check Gender: true");
    return true;
  }
  console.log("check Gender: false");

  return false;
}

//`checkCksum()`