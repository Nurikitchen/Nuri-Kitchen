const fs = require('fs');
const css = `
/* Fix scroll animation spacing on mobile */
@media (max-width: 768px) {
  #scroll-animation-sticky {
    height: calc(112.5vw - 36px) !important;
    top: calc(50vh - 56.25vw + 18px) !important;
  }
}
`;
fs.appendFileSync('src/index.css', css);
console.log('CSS appended successfully');
