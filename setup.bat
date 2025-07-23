@echo off
setlocal enabledelayedexpansion

REM Universal Environment Setup Script for Windows
REM Klases darbas project setup

echo.
echo ================================================
echo Environment Setup for Klases darbas project
echo ================================================
echo.

REM Function to check if command exists
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [INFO] Node.js is already installed
    node --version
    goto :check_npm
) else (
    echo [INFO] Node.js not found. Installing...
    goto :install_node
)

:install_node
echo [INFO] Downloading Node.js installer...

REM Detect architecture
if "%PROCESSOR_ARCHITECTURE%"=="AMD64" (
    set ARCH=x64
) else if "%PROCESSOR_ARCHITEW6432%"=="AMD64" (
    set ARCH=x64
) else (
    set ARCH=x86
)

echo [INFO] Detected architecture: %ARCH%

REM Download Node.js LTS installer
set NODE_VERSION=20.11.0
set NODE_INSTALLER=node-v%NODE_VERSION%-x64.msi
set DOWNLOAD_URL=https://nodejs.org/dist/v%NODE_VERSION%/%NODE_INSTALLER%

echo [INFO] Downloading Node.js v%NODE_VERSION%...

REM Use PowerShell to download the installer
powershell -Command "& {Invoke-WebRequest -Uri '%DOWNLOAD_URL%' -OutFile '%NODE_INSTALLER%'}"

if not exist "%NODE_INSTALLER%" (
    echo [ERROR] Failed to download Node.js installer
    echo [INFO] Please download and install Node.js manually from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Installing Node.js...
msiexec /i "%NODE_INSTALLER%" /quiet /norestart

REM Wait for installation to complete
timeout /t 10 /nobreak >nul

REM Clean up installer
del "%NODE_INSTALLER%"

REM Refresh environment variables
call refreshenv.cmd 2>nul || (
    echo [WARNING] Could not refresh environment variables automatically
    echo [INFO] Please restart your command prompt and run this script again
    pause
    exit /b 1
)

:check_npm
REM Verify Node.js installation
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js installation failed or not in PATH
    echo [INFO] Please restart your command prompt and try again
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [SUCCESS] Node.js is installed: %NODE_VERSION%

REM Extract major version number
set NODE_MAJOR=%NODE_VERSION:~1,2%
if %NODE_MAJOR% lss 18 (
    echo [WARNING] Node.js version %NODE_VERSION% detected. Cypress requires Node.js 18+
    echo [INFO] Please update Node.js to version 18 or higher
    pause
)

REM Check npm
where npm >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo [SUCCESS] npm is installed: %NPM_VERSION%
) else (
    echo [ERROR] npm not found! This should have been installed with Node.js
    pause
    exit /b 1
)

:install_dependencies
echo.
echo [INFO] Installing project dependencies...

REM Check if package.json exists
if not exist "package.json" (
    echo [ERROR] package.json not found! Make sure you're in the project root directory
    pause
    exit /b 1
)

REM Install dependencies
npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo [SUCCESS] Dependencies installed successfully!

:build_css
echo.
echo [INFO] Building CSS files...

REM Check if SCSS file exists and build CSS
if exist "scss\style.scss" (
    echo [INFO] Building CSS from SCSS...
    start /b npm run build-css
    timeout /t 3 /nobreak >nul
    taskkill /f /im node.exe >nul 2>nul
    echo [SUCCESS] CSS build initiated!
) else (
    echo [INFO] No SCSS files found, skipping CSS build
)

:setup_complete
echo.
echo ================================================
echo Environment setup completed successfully!
echo ================================================
echo.

echo [INFO] Available commands:
echo   npm test          - Run Jest tests
echo   npm run cy        - Run Cypress E2E tests  
echo   npm run build-css - Build and watch CSS files
echo.

echo [INFO] To start development:
echo   1. Open index.html in your browser or use a local server
echo   2. For live CSS building: npm run build-css
echo   3. For testing: npm test
echo.

echo [WARNING] Note: For Cypress tests, make sure your local server is running on http://localhost:5500
echo.

echo Setup completed! Press any key to exit...
pause >nul
exit /b 0

:error
echo [ERROR] An error occurred during setup
pause
exit /b 1
