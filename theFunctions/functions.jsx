import countryList from "../assets/json/countries.json";

export const GetFullCountryName = (alpha_3) => {
  for (let i in countryList) {
    if (countryList[i].alpha_3.includes(alpha_3)) {
      return countryList[i].name;
    }
  }
};

export const bigNumber = (n) => {
  const toStr = new String(n);
  let formateNumber = "";
  let stateN = 0;

  for (let i in toStr) {
    if (stateN < 2) {
      formateNumber += toStr[i];
      stateN++;
    } else {
      formateNumber += toStr[i] + ",";
      stateN = 0;
    }
  }
  return formateNumber;
};

export const objectDestructor = (arr, outputVal) => {
  let filterObjectVal = Object.values(arr);
  let result = [];
  for (let index in filterObjectVal) {
    const element = filterObjectVal[index];
    result.push(element[outputVal]);
  }
  return result;
};
