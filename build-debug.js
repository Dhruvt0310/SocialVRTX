const { execSync } = require('child_process');

try {
    const output = execSync('npm run build', {
        cwd: process.cwd(),
        encoding: 'utf-8',
        stdio: 'pipe'
    });
    console.log(output);
} catch (error) {
    console.log('=== BUILD ERROR ===');
    console.log(error.stdout);
    console.log(error.stderr);
    process.exit(1);
}
