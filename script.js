'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}



console.log("DOM イベント  - アクティビティ「アリゲーター」🐊");

const input = document.getElementById("input");
const btn = document.getElementById("button");
const output = document.getElementById("output");


function gator () {
  return output.innerText  = "🐊".repeat(input.value);
}

btn.addEventListener("click", gator);
