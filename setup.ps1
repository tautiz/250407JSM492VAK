# Universal Environment Setup Script for Windows PowerShell
# Klases darbas project setup

param(
    [switch]$SkipNodeInstall = $false
)

# Set execution policy for current session
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Function to write colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Function to check if command exists
function Test-Command {
    param([string]$Command)
    try {
        Get-Command $Command -ErrorAction Stop | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Function to get Node.js version
function Get-NodeVersion {
    try {
        $version = node --version
        $majorVersion = [int]($version -replace 'v(\d+)\..*', '$1')
        return @{
            Version = $version
            MajorVersion = $majorVersion
        }
    }
    catch {
        return $null
    }
}

# Function to install Node.js using winget or Chocolatey
function Install-NodeJS {
    Write-Status "Installing Node.js..."
    
    # Try winget first (Windows 10 1709+ and Windows 11)
    if (Test-Command "winget") {
        Write-Status "Using winget to install Node.js..."
        try {
            winget install OpenJS.NodeJS --silent --accept-package-agreements --accept-source-agreements
            Write-Success "Node.js installed via winget"
            return $true
        }
        catch {
            Write-Warning "winget installation failed, trying alternative method..."
        }
    }
    
    # Try Chocolatey
    if (Test-Command "choco") {
        Write-Status "Using Chocolatey to install Node.js..."
        try {
            choco install nodejs -y
            Write-Success "Node.js installed via Chocolatey"
            return $true
        }
        catch {
            Write-Warning "Chocolatey installation failed..."
        }
    }
    
    # Manual download and install
    Write-Status "Downloading Node.js installer manually..."
    
    $nodeVersion = "20.11.0"
    $architecture = if ([Environment]::Is64BitOperatingSystem) { "x64" } else { "x86" }
    $installerName = "node-v$nodeVersion-$architecture.msi"
    $downloadUrl = "https://nodejs.org/dist/v$nodeVersion/$installerName"
    $installerPath = Join-Path $env:TEMP $installerName
    
    try {
        Write-Status "Downloading from $downloadUrl..."
        Invoke-WebRequest -Uri $downloadUrl -OutFile $installerPath -UseBasicParsing
        
        Write-Status "Installing Node.js..."
        Start-Process -FilePath "msiexec.exe" -ArgumentList "/i", $installerPath, "/quiet", "/norestart" -Wait
        
        # Clean up
        Remove-Item $installerPath -Force -ErrorAction SilentlyContinue
        
        Write-Success "Node.js installation completed"
        return $true
    }
    catch {
        Write-Error "Failed to download or install Node.js: $($_.Exception.Message)"
        Write-Status "Please download and install Node.js manually from https://nodejs.org/"
        return $false
    }
}

# Function to refresh environment variables
function Update-Environment {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
}

# Main setup function
function Start-Setup {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Status "Starting environment setup for Klases darbas project..."
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Check if Node.js is installed
    $nodeInfo = Get-NodeVersion
    if ($nodeInfo -and -not $SkipNodeInstall) {
        Write-Success "Node.js is already installed: $($nodeInfo.Version)"
        
        if ($nodeInfo.MajorVersion -lt 18) {
            Write-Warning "Node.js version $($nodeInfo.Version) detected. Cypress requires Node.js 18+"
            Write-Warning "Please update Node.js to version 18 or higher"
        }
    }
    elseif (-not $SkipNodeInstall) {
        Write-Status "Node.js not found. Installing..."
        
        if (-not (Install-NodeJS)) {
            Write-Error "Node.js installation failed!"
            return $false
        }
        
        # Refresh environment variables
        Update-Environment
        
        # Verify installation
        Start-Sleep -Seconds 5
        $nodeInfo = Get-NodeVersion
        if (-not $nodeInfo) {
            Write-Error "Node.js installation verification failed!"
            Write-Status "Please restart PowerShell and try again"
            return $false
        }
        
        Write-Success "Node.js installed successfully: $($nodeInfo.Version)"
    }
    
    # Check npm
    if (Test-Command "npm") {
        $npmVersion = npm --version
        Write-Success "npm is installed: $npmVersion"
    }
    else {
        Write-Error "npm not found! This should have been installed with Node.js"
        Write-Status "Please restart PowerShell and try again"
        return $false
    }
    
    # Check if package.json exists
    if (-not (Test-Path "package.json")) {
        Write-Error "package.json not found! Make sure you're in the project root directory"
        return $false
    }
    
    # Install project dependencies
    Write-Status "Installing project dependencies..."
    try {
        npm install
        Write-Success "Dependencies installed successfully!"
    }
    catch {
        Write-Error "Failed to install dependencies: $($_.Exception.Message)"
        return $false
    }
    
    # Build CSS if SCSS files exist
    if (Test-Path "scss\style.scss") {
        Write-Status "Building CSS files..."
        try {
            $buildProcess = Start-Process -FilePath "npm" -ArgumentList "run", "build-css" -NoNewWindow -PassThru
            Start-Sleep -Seconds 3
            Stop-Process -Id $buildProcess.Id -Force -ErrorAction SilentlyContinue
            Write-Success "CSS build initiated!"
        }
        catch {
            Write-Warning "CSS build failed, but continuing setup..."
        }
    }
    
    # Setup complete
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Success "Environment setup completed successfully!"
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    
    Write-Status "Available commands:"
    Write-Host "  npm test          - Run Jest tests"
    Write-Host "  npm run cy        - Run Cypress E2E tests"
    Write-Host "  npm run build-css - Build and watch CSS files"
    Write-Host ""
    
    Write-Status "To start development:"
    Write-Host "  1. Open index.html in your browser or use a local server"
    Write-Host "  2. For live CSS building: npm run build-css"
    Write-Host "  3. For testing: npm test"
    Write-Host ""
    
    Write-Warning "Note: For Cypress tests, make sure your local server is running on http://localhost:5500"
    
    return $true
}

# Error handling
trap {
    Write-Error "An error occurred: $($_.Exception.Message)"
    Write-Status "Setup failed. Please check the error message above."
    exit 1
}

# Run setup
if (Start-Setup) {
    Write-Success "Setup completed successfully!"
    exit 0
}
else {
    Write-Error "Setup failed!"
    exit 1
}
