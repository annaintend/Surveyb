import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create src directory structure
const dirs = [
  'src',
  'src/components',
  'src/components/figma',
  'src/components/screens',
  'src/components/ui',
  'src/styles',
  'src/imports'
];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy directories
console.log('Copying components...');
copyDir(path.join(__dirname, 'components'), path.join(__dirname, 'src/components'));

console.log('Copying imports...');
copyDir(path.join(__dirname, 'imports'), path.join(__dirname, 'src/imports'));

console.log('Copying styles...');
copyDir(path.join(__dirname, 'styles'), path.join(__dirname, 'src/styles'));

console.log('Done! You can now delete the old /components, /imports, /styles, /App.tsx, and /main.tsx from root.');
