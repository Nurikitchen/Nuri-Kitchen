const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

// Update Hero Button onclick
const oldHeroBtn = `<button onclick="
                      document
                        .getElementById('diet-analysis-form')
                        .scrollIntoView({ behavior: 'smooth', block: 'start' })
                    "`;
const newHeroBtn = `<button onclick="if(window.resetToSurveyForm) window.resetToSurveyForm(); else { const f = document.getElementById('diet-analysis-form'); if(f) f.scrollIntoView({ behavior: 'smooth', block: 'start' }); }"`;

if (mainContent.includes(oldHeroBtn)) {
  mainContent = mainContent.replace(oldHeroBtn, newHeroBtn);
  console.log('Hero button onclick updated to call resetToSurveyForm.');
} else {
  console.log('oldHeroBtn not found, searching alternative spacing...');
  const altHeroBtn = `button onclick="\n                      document\n                        .getElementById('diet-analysis-form')\n                        .scrollIntoView({ behavior: 'smooth', block: 'start' })\n                    "`;
  if (mainContent.includes(altHeroBtn)) {
    mainContent = mainContent.replace(altHeroBtn, newHeroBtn);
    console.log('Hero button onclick updated via altHeroBtn.');
  }
}

// Update Container & Columns to Vertical Stack
const oldGridStart = `<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <!-- Form -->
              <div id="analysis-form-col" class="lg:col-span-5 space-y-6">`;

const newGridStart = `<div class="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto" id="survey-main-container">
              <!-- Form (Nằm Trên) -->
              <div id="analysis-form-col" class="w-full max-w-2xl mx-auto space-y-6">`;

if (mainContent.includes(oldGridStart)) {
  mainContent = mainContent.replace(oldGridStart, newGridStart);
  console.log('Survey layout container changed to vertical stack (Form on top).');
}

const oldResultsCol = `<!-- Analysis Results -->
              <div id="analysis-results-col" class="lg:col-span-7 transition-all duration-300">`;

const newResultsCol = `<!-- Analysis Results (Nằm Dưới) -->
              <div id="analysis-results-col" class="w-full transition-all duration-300">`;

if (mainContent.includes(oldResultsCol)) {
  mainContent = mainContent.replace(oldResultsCol, newResultsCol);
  console.log('Results / Empty state column changed to full-width bottom layout.');
}

const oldEmptyState = `<div id="analysis-empty-state" class="h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">`;
const newEmptyState = `<div id="analysis-empty-state" class="w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 md:p-12 text-center shadow-sm">`;

if (mainContent.includes(oldEmptyState)) {
  mainContent = mainContent.replace(oldEmptyState, newEmptyState);
  console.log('Empty state card centered and styled for bottom position.');
}

fs.writeFileSync(mainContentPath, mainContent, 'utf8');

// 2. Update public/legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

const resetFunctionCode = `
      // Helper function to reset to 4-step survey form view
      window.resetToSurveyForm = function() {
        const formCol = document.getElementById("analysis-form-col");
        if (formCol) {
          formCol.classList.remove("hidden");
          formCol.classList.add("w-full", "max-w-2xl", "mx-auto");
        }
        const emptyState = document.getElementById("analysis-empty-state");
        if (emptyState) {
          emptyState.classList.remove("hidden");
          emptyState.classList.add("w-full", "max-w-2xl", "mx-auto");
        }
        const resultState = document.getElementById("analysis-result-state");
        if (resultState) {
          resultState.classList.add("hidden");
        }
        const resultsCol = document.getElementById("analysis-results-col");
        if (resultsCol) {
          resultsCol.classList.remove("lg:col-span-12");
          resultsCol.classList.add("w-full");
        }
        const form = document.getElementById("diet-analysis-form");
        if (form) {
          form.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
`;

if (!legacyJs.includes('window.resetToSurveyForm =')) {
  legacyJs = legacyJs + '\n' + resetFunctionCode;
  console.log('window.resetToSurveyForm added to legacy.js');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
