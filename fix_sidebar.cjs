const fs = require('fs');
let code = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

// Replace standard link with motion link or just css transform hover
code = code.replace(
  '"block px-3 py-2 text-sm font-medium rounded-md transition-colors",',
  '"block px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 transform hover:translate-x-1",'
);

code = code.replace(
  '<div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-bold text-black">',
  '<div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-bold text-black shadow-lg shadow-amber-500/20">'
);

fs.writeFileSync('src/components/Sidebar.tsx', code);
