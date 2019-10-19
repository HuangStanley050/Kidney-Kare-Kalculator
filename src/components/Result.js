import React from "react";
import { connect } from "react-redux";

// Q1, Q4 and Q14 worth 3 pts
// Q1 What is your age grou?
// 20 - 30=> 2pt
// 30 - 40 => 1pt
// 40 -60 => 0pt
//
// Q4 How much water do you drink?
// 6 - 8 => 2pts
// 4 - 6 => 1pt
// 0 to 3 =>0 pt

//Q14 How oftend do you go to toilet?
// 6 - 8 => 2pt
// 4 -6 => 1pt
// 1-4 => 0 pt

// Other questions is worth 1 pt
// Yes => 0 pt, No => 1 pt

const ResultPage = props => {
  const { values } = props.wizard;
  const keyData = Object.entries(values);
  let totalPoints = 0;
  let kidneyResult;

  for (const [key, data] of keyData) {
    if (data === "No") {
      totalPoints++;
    } else if (data === "20-30") {
      totalPoints += 2;
    } else if (data === "30-40") {
      totalPoints++;
    } else if (data === "6-8") {
      totalPoints += 2;
    } else if (data === "4-6") {
      totalPoints++;
    } else if (data === "Male") {
      totalPoints += 1;
    } else if (data === "Female") {
      totalPoints += 2;
    }
  }

  switch (totalPoints) {
    case 4:
    case 5:
    case 6:
      kidneyResult = "Not Great";
      break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      kidneyResult = "Medium";
      break;
    case 13:
    case 14:
    case 15:
    case 16:
      kidneyResult = "Happy";
      break;

    default:
      kidneyResult = "Urgent Help";
      break;
  }
  console.log(totalPoints);
  console.log(kidneyResult);
  return <h1>Result page</h1>;
};
const mapStateToProps = state => ({
  wizard: state.form.wizard
});
export default connect(mapStateToProps)(ResultPage);
