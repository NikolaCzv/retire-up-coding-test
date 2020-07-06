import db from "../../data.json";

const cumulativeSum = (sum => ({ totalReturn, year }) => ({
    year,
    totalReturn: +totalReturn,
    cumulativeReturn: sum += +totalReturn
  })
)(0);
  
export const data = db.reverse().map(cumulativeSum);
export const firstYear = data[0].year;
export const lastYear = data[data.length - 1].year;