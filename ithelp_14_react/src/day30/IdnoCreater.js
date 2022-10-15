export function createID(placeStrCode, genderCode) {
  let randomStr = getRandomInt(9999999).toString().padStart(7, "0");
  let r = `${placeStrCode}${genderCode}${randomStr}`;
  let result = r + getCksum(checkPlace(placeStrCode), genderCode, randomStr);
  console.log(`ID=${result}(r=${r})`);
  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getCksum(placeCode, genderCode, randomStr) {
  const idSum = calHead(placeCode) + calBody(genderCode.toString() + randomStr);
  //console.log(`check sum1 = ${idSum}`);   //debug用
  const modResult = idSum % 10;
  const r = modResult === 0 ? modResult : 10 - modResult;
  //console.log(`check sum2 = ${r}`);   //debug用

  return r;
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

function calBody(code) {
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(code[i]) * (8 - i);
  }
  console.log(`body sum = ${sum}(${code})`);

  return sum;
}

function calHead(code) {
  let sum = parseInt(code[0]) * 1 + parseInt(code[1]) * 9;
  console.log(`head sum = ${sum}(${code})`);

  return sum;
}
