const { execSync } = require('child_process');

const message = process.argv[2] || "Update";

console.log(`🚀 Shipping with message: "${message}"...`);

try {
    console.log('📦 Staging changes...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('wow Committing...');
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });

    console.log('⬆️ Pushing to GitHub (Deploying Server)...');
    execSync('git push', { stdio: 'inherit' });

    console.log('🌐 Deploying Frontend...');
    execSync('npm run deploy', { stdio: 'inherit' });

    console.log('✅ Done! Everything is shipped.');
} catch (error) {
    console.error('❌ Failed to ship:', error.message);
}
