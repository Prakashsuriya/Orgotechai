const { execSync } = require('child_process');
const fs = require('fs');
try {
    execSync('npx vite build', { stdio: 'pipe' });
    fs.writeFileSync('build_result.txt', 'Success');
} catch (error) {
    fs.writeFileSync('build_result.txt', error.output ? error.output.toString() : error.message);
    fs.writeFileSync('build_stderr.txt', error.stderr ? error.stderr.toString() : '');
}
