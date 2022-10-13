export function checkBasic(code) {
  let result =
    checkLength(code) &&
    checkDigit(code) &&
    checkGender(parseInt(code.substring(1, 2)));

  console.log(`check basic: ${result}`);
  return result;
}
function checkLength(code) {
  let r = false;
  if (code.length === 10) r = true;

  console.log("check legnth: " + r);

  return r;
}
function checkDigit(code) {
  const testStr = code.substring(1);
  for (let i = 0; i < testStr.length; i++) {
    if (isNaN(testStr.charAt(i))) {
      console.log(
        `Check digit false. ${testStr.charAt(i)} is ${!isNaN(
          testStr.charAt(i)
        )}`
      );

      return false;
    }
  }

  return true;
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

  if (code in cityDic) {
    console.log(`check place: ${code} =${cityDic[code]}`);

    return cityDic[code];
  }
  console.log(`check place(error): ${code} =0`);

  return 0;
}

function checkGender(code) {
  const genderArr = [
    1, //男
    2, //女
    8, //外來人口-男
    9, //外來人口-女
  ];

  if (genderArr.includes(code)) {
    console.log("check Gender: true");
    return true;
  }
  console.log("check Gender: false");

  return false;
}

function calBody(code) {
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(code[i]) * (8 - i);
  }
  console.log(`body sum = ${sum}`);

  return sum;
}

function calHead(code) {
  let sum = parseInt(code[0]) * 1 + parseInt(code[1]) * 9;
  console.log(`head sum = ${sum}`);

  return sum;
}

export function checkCkDigit(code) {
  const placeCode = checkPlace(code.substring(0, 1)); // 取得首碼的數值
  const bodyCode = code.substring(1, 9); //取得中間非驗證碼的數值
  const lastCode = code.substring(8); //取得尾碼
  const idSum = calHead(placeCode) + calBody(bodyCode) + parseInt(lastCode) * 1; //計算總和 //尾數的*1 其實可以不用乘
  const modResult = idSum % 10;
  const result = modResult === 0;

  console.log(
    `sum = ${idSum}, mod result = ${modResult}, check result = ${result}`
  );
  return result;
}
