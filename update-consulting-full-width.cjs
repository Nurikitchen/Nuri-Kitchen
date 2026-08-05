const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const oldFormColStart = `<!-- Form -->\n              <div class="lg:col-span-5 space-y-6">`;
const newFormColStart = `<!-- Form -->\n              <div id="analysis-form-col" class="lg:col-span-5 space-y-6">`;

const oldResultsColStart = `<!-- Analysis Results -->\n              <div class="lg:col-span-7">`;
const newResultsColStart = `<!-- Analysis Results -->\n              <div id="analysis-results-col" class="lg:col-span-7 transition-all duration-300">`;

if (mainContent.includes(oldFormColStart)) {
  mainContent = mainContent.replace(oldFormColStart, newFormColStart);
  console.log('MainContent.html form column ID added.');
}
if (mainContent.includes(oldResultsColStart)) {
  mainContent = mainContent.replace(oldResultsColStart, newResultsColStart);
  console.log('MainContent.html results column ID added.');
}

fs.writeFileSync(mainContentPath, mainContent, 'utf8');

// 2. Update legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

const targetSubStart = `document\n            .getElementById("analysis-result-state")\n            .classList.remove("hidden");`;
const newSubCode = `document
            .getElementById("analysis-result-state")
            .classList.remove("hidden");

          const formCol = document.getElementById("analysis-form-col");
          if (formCol) formCol.classList.add("hidden");
          const resultsCol = document.getElementById("analysis-results-col");
          if (resultsCol) {
            resultsCol.classList.remove("lg:col-span-7");
            resultsCol.classList.add("lg:col-span-12");
          }`;

if (legacyJs.includes(targetSubStart)) {
  legacyJs = legacyJs.replace(targetSubStart, newSubCode);
  fs.writeFileSync(legacyPath, legacyJs, 'utf8');
  console.log('legacy.js updated with full-width results logic on submission.');
} else {
  console.log('targetSubStart not found in legacy.js, checking alternate spacing...');
  const altTarget = `document.getElementById("analysis-result-state").classList.remove("hidden");`;
  if (legacyJs.includes(altTarget)) {
    legacyJs = legacyJs.replace(altTarget, `document.getElementById("analysis-result-state").classList.remove("hidden");
          const formCol = document.getElementById("analysis-form-col");
          if (formCol) formCol.classList.add("hidden");
          const resultsCol = document.getElementById("analysis-results-col");
          if (resultsCol) {
            resultsCol.classList.remove("lg:col-span-7");
            resultsCol.classList.add("lg:col-span-12");
          }`);
    fs.writeFileSync(legacyPath, legacyJs, 'utf8');
    console.log('legacy.js updated with altTarget.');
  }
}
