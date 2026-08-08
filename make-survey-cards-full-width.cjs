const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const oldContainer = `<div class="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto" id="survey-main-container">
              <!-- Form (Nằm Trên) -->
              <div id="analysis-form-col" class="w-full max-w-2xl mx-auto space-y-6">`;

const newContainer = `<div class="flex flex-col items-center gap-8 w-full" id="survey-main-container">
              <!-- Form (Nằm Trên - Full Viền) -->
              <div id="analysis-form-col" class="w-full space-y-6">`;

if (mainContent.includes(oldContainer)) {
  mainContent = mainContent.replace(oldContainer, newContainer);
  console.log('MainContent.html survey container and form col updated to w-full.');
}

const oldEmptyState = `<div id="analysis-empty-state" class="w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 md:p-12 text-center shadow-sm">`;
const newEmptyState = `<div id="analysis-empty-state" class="w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 md:p-12 text-center shadow-sm">`;

if (mainContent.includes(oldEmptyState)) {
  mainContent = mainContent.replace(oldEmptyState, newEmptyState);
  console.log('MainContent.html empty state updated to w-full.');
}

fs.writeFileSync(mainContentPath, mainContent, 'utf8');

// 2. Update public/legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

const oldResetFn = `window.resetToSurveyForm = function() {
        const formCol = document.getElementById("analysis-form-col");
        if (formCol) {
          formCol.classList.remove("hidden");
          formCol.classList.add("w-full", "max-w-2xl", "mx-auto");
        }
        const emptyState = document.getElementById("analysis-empty-state");
        if (emptyState) {
          emptyState.classList.remove("hidden");
          emptyState.classList.add("w-full", "max-w-2xl", "mx-auto");
        }`;

const newResetFn = `window.resetToSurveyForm = function() {
        const formCol = document.getElementById("analysis-form-col");
        if (formCol) {
          formCol.classList.remove("hidden");
          formCol.classList.add("w-full");
        }
        const emptyState = document.getElementById("analysis-empty-state");
        if (emptyState) {
          emptyState.classList.remove("hidden");
          emptyState.classList.add("w-full");
        }`;

if (legacyJs.includes(oldResetFn)) {
  legacyJs = legacyJs.replace(oldResetFn, newResetFn);
  console.log('legacy.js resetToSurveyForm updated to w-full.');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
