const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

// replace the .bg-grid-pattern and everything below it
const parts = code.split('.bg-grid-pattern');
let newCSS = parts[0] + `.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, var(--brand-border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--brand-border) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, var(--brand-accent-bg) 0%, transparent 80%);
  background-size: 60px 60px, 60px 60px, 100% 100%;
  background-position: center center;
  background-attachment: fixed;
}

.bg-watermark {
  position: relative;
}

.bg-watermark::before {
  content: 'VG PAY NETWORK';
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  font-size: 10vw;
  font-weight: 900;
  color: var(--brand-text-dim);
  opacity: 0.02;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
  letter-spacing: 0.1em;
}

.bg-watermark::after {
  content: '';
  position: fixed;
  top: -50vh;
  left: -50vw;
  width: 200vw;
  height: 200vh;
  background: 
    radial-gradient(circle at 30% 40%, var(--brand-accent) 0%, transparent 30%),
    radial-gradient(circle at 70% 60%, var(--brand-accent) 0%, transparent 30%);
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
  animation: pulse-glow-finance 20s ease-in-out infinite alternate;
}

@keyframes pulse-glow-finance {
  0% { transform: scale(1) translate(0, 0) rotate(0deg); opacity: 0.02; }
  50% { transform: scale(1.1) translate(2%, 5%) rotate(2deg); opacity: 0.06; }
  100% { transform: scale(1) translate(-2%, -5%) rotate(-2deg); opacity: 0.02; }
}

.finance-circuit-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 h 20 v 20 h 20' fill='none' stroke='currentColor' stroke-width='1' /%3E%3Ccircle cx='50' cy='30' r='2' fill='currentColor' /%3E%3Cpath d='M90 90 h -20 v -20 h -20' fill='none' stroke='currentColor' stroke-width='1' /%3E%3Ccircle cx='50' cy='70' r='2' fill='currentColor' /%3E%3C/svg%3E");
  background-size: 150px 150px;
}
`;

fs.writeFileSync('src/index.css', newCSS);
