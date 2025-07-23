#!/usr/bin/env node

/**
 * Universal Environment Setup Script (Node.js version)
 * Klases darbas project setup
 * 
 * This script requires Node.js to be already installed
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

// Utility functions for colored output
const log = {
    info: (msg) => console.log(`${colors.blue}[INFO]${colors.reset} ${msg}`),
    success: (msg) => console.log(`${colors.green}[SUCCESS]${colors.reset} ${msg}`),
    warning: (msg) => console.log(`${colors.yellow}[WARNING]${colors.reset} ${msg}`),
    error: (msg) => console.log(`${colors.red}[ERROR]${colors.reset} ${msg}`)
};

// Function to execute shell commands
function execCommand(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: options.silent ? 'pipe' : 'inherit',
            ...options 
        });
        return { success: true, output: result };
    } catch (error) {
        return { success: false, error: error.message, output: error.stdout };
    }
}

// Function to check if command exists
function commandExists(command) {
    try {
        const checkCmd = os.platform() === 'win32' ? `where ${command}` : `which ${command}`;
        execSync(checkCmd, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

// Function to get Node.js version info
function getNodeVersion() {
    try {
        const version = process.version;
        const majorVersion = parseInt(version.slice(1).split('.')[0]);
        return { version, majorVersion };
    } catch {
        return null;
    }
}

// Function to get npm version
function getNpmVersion() {
    try {
        const result = execSync('npm --version', { encoding: 'utf8', stdio: 'pipe' });
        return result.trim();
    } catch {
        return null;
    }
}

// Function to check project structure
function checkProjectStructure() {
    const requiredFiles = ['package.json', 'index.html'];
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingFiles.length > 0) {
        log.error(`Missing required files: ${missingFiles.join(', ')}`);
        log.error('Make sure you are running this script from the project root directory');
        return false;
    }
    
    return true;
}

// Function to install dependencies
function installDependencies() {
    log.info('Installing project dependencies...');
    
    const result = execCommand('npm install');
    
    if (result.success) {
        log.success('Dependencies installed successfully!');
        return true;
    } else {
        log.error('Failed to install dependencies');
        log.error(result.error);
        return false;
    }
}

// Function to build CSS
function buildCSS() {
    log.info('Building CSS files...');
    
    if (!fs.existsSync('scss/style.scss')) {
        log.info('No SCSS files found, skipping CSS build');
        return true;
    }
    
    // Start CSS build process in background
    const buildProcess = spawn('npm', ['run', 'build-css'], {
        stdio: 'ignore',
        detached: true
    });
    
    // Let it run for a few seconds then kill it (since it's a watch process)
    setTimeout(() => {
        try {
            if (os.platform() === 'win32') {
                execSync(`taskkill /pid ${buildProcess.pid} /f /t`, { stdio: 'ignore' });
            } else {
                process.kill(-buildProcess.pid, 'SIGTERM');
            }
        } catch {
            // Ignore errors when killing the process
        }
    }, 3000);
    
    log.success('CSS build initiated!');
    return true;
}

// Function to run tests (optional)
function runTests() {
    log.info('Running tests to verify setup...');
    
    const result = execCommand('npm test', { silent: true });
    
    if (result.success) {
        log.success('All tests passed!');
        return true;
    } else {
        log.warning('Some tests failed, but setup can continue');
        return true; // Don't fail setup because of test failures
    }
}

// Function to display final instructions
function displayInstructions() {
    console.log('\n' + '='.repeat(50));
    log.success('Environment setup completed successfully!');
    console.log('='.repeat(50) + '\n');
    
    log.info('Available commands:');
    console.log('  npm test          - Run Jest tests');
    console.log('  npm run cy        - Run Cypress E2E tests');
    console.log('  npm run build-css - Build and watch CSS files\n');
    
    log.info('To start development:');
    console.log('  1. Open index.html in your browser or use a local server');
    console.log('  2. For live CSS building: npm run build-css');
    console.log('  3. For testing: npm test\n');
    
    log.warning('Note: For Cypress tests, make sure your local server is running on http://localhost:5500');
}

// Main setup function
async function main() {
    console.log('\n' + '='.repeat(50));
    log.info('Starting environment setup for Klases darbas project...');
    console.log('='.repeat(50) + '\n');
    
    // Check Node.js version
    const nodeInfo = getNodeVersion();
    if (nodeInfo) {
        log.success(`Node.js is installed: ${nodeInfo.version}`);
        
        if (nodeInfo.majorVersion < 18) {
            log.warning(`Node.js version ${nodeInfo.version} detected. Cypress requires Node.js 18+`);
            log.warning('Please update Node.js to version 18 or higher');
        }
    } else {
        log.error('Could not determine Node.js version');
        process.exit(1);
    }
    
    // Check npm
    const npmVersion = getNpmVersion();
    if (npmVersion) {
        log.success(`npm is installed: ${npmVersion}`);
    } else {
        log.error('npm not found! This should have been installed with Node.js');
        process.exit(1);
    }
    
    // Check project structure
    if (!checkProjectStructure()) {
        process.exit(1);
    }
    
    // Install dependencies
    if (!installDependencies()) {
        process.exit(1);
    }
    
    // Build CSS
    buildCSS();
    
    // Run tests (optional)
    runTests();
    
    // Display final instructions
    displayInstructions();
    
    log.success('Setup completed successfully!');
}

// Handle errors
process.on('uncaughtException', (error) => {
    log.error(`Uncaught exception: ${error.message}`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    log.error(`Unhandled rejection at: ${promise}, reason: ${reason}`);
    process.exit(1);
});

// Run the main function
if (require.main === module) {
    main().catch((error) => {
        log.error(`Setup failed: ${error.message}`);
        process.exit(1);
    });
}

module.exports = { main };
