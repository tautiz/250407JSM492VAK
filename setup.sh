#!/bin/bash

# Universal Environment Setup Script for macOS and Linux
# Klases darbas project setup

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to detect OS
detect_os() {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "linux"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macos"
    else
        echo "unknown"
    fi
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install Node.js on Linux
install_node_linux() {
    print_status "Installing Node.js on Linux..."
    
    if command_exists apt-get; then
        # Ubuntu/Debian
        print_status "Detected Ubuntu/Debian system"
        sudo apt-get update
        sudo apt-get install -y curl
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif command_exists yum; then
        # CentOS/RHEL/Fedora
        print_status "Detected CentOS/RHEL/Fedora system"
        sudo yum install -y curl
        curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
        sudo yum install -y nodejs npm
    elif command_exists dnf; then
        # Fedora (newer versions)
        print_status "Detected Fedora system with dnf"
        sudo dnf install -y curl
        curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
        sudo dnf install -y nodejs npm
    elif command_exists pacman; then
        # Arch Linux
        print_status "Detected Arch Linux system"
        sudo pacman -S --noconfirm nodejs npm
    else
        print_error "Unsupported Linux distribution. Please install Node.js manually."
        print_status "Visit: https://nodejs.org/en/download/"
        exit 1
    fi
}

# Function to install Node.js on macOS
install_node_macos() {
    print_status "Installing Node.js on macOS..."
    
    if command_exists brew; then
        print_status "Using Homebrew to install Node.js"
        brew install node
    else
        print_warning "Homebrew not found. Installing Homebrew first..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        brew install node
    fi
}

# Function to check Node.js version
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node --version)
        print_success "Node.js is installed: $NODE_VERSION"
        
        # Check if version is compatible (Node 18+ required for Cypress)
        NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
        if [ "$NODE_MAJOR_VERSION" -lt 18 ]; then
            print_warning "Node.js version $NODE_VERSION detected. Cypress requires Node.js 18+."
            print_status "Please update Node.js to version 18 or higher."
            return 1
        fi
        return 0
    else
        return 1
    fi
}

# Function to check npm version
check_npm_version() {
    if command_exists npm; then
        NPM_VERSION=$(npm --version)
        print_success "npm is installed: $NPM_VERSION"
        return 0
    else
        return 1
    fi
}

# Main setup function
main() {
    print_status "Starting environment setup for Klases darbas project..."
    print_status "=================================================="
    
    # Detect operating system
    OS=$(detect_os)
    print_status "Detected OS: $OS"
    
    # Check if Node.js is installed
    if ! check_node_version; then
        print_status "Node.js not found or version too old. Installing..."
        
        case $OS in
            "linux")
                install_node_linux
                ;;
            "macos")
                install_node_macos
                ;;
            *)
                print_error "Unsupported operating system: $OS"
                exit 1
                ;;
        esac
        
        # Verify installation
        if ! check_node_version; then
            print_error "Node.js installation failed!"
            exit 1
        fi
    fi
    
    # Check npm
    if ! check_npm_version; then
        print_error "npm not found! This should have been installed with Node.js."
        exit 1
    fi
    
    # Install project dependencies
    print_status "Installing project dependencies..."
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully!"
    else
        print_error "package.json not found! Make sure you're in the project root directory."
        exit 1
    fi
    
    # Build CSS if needed
    print_status "Building CSS files..."
    if [ -f "scss/style.scss" ]; then
        npm run build-css &
        BUILD_PID=$!
        sleep 3
        kill $BUILD_PID 2>/dev/null || true
        print_success "CSS build initiated!"
    fi
    
    # Setup complete
    print_success "=================================================="
    print_success "Environment setup completed successfully!"
    print_success "=================================================="
    
    echo ""
    print_status "Available commands:"
    echo "  npm test          - Run Jest tests"
    echo "  npm run cy        - Run Cypress E2E tests"
    echo "  npm run build-css - Build and watch CSS files"
    echo ""
    print_status "To start development:"
    echo "  1. Open index.html in your browser or use a local server"
    echo "  2. For live CSS building: npm run build-css"
    echo "  3. For testing: npm test"
    echo ""
    print_warning "Note: For Cypress tests, make sure your local server is running on http://localhost:5500"
}

# Run main function
main "$@"
