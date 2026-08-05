# 🚀 Universalus aplinkos nustatymo vadovas

Šis vadovas padės jums nustatyti "Klases darbas" projekto aplinką bet kurioje operacinėje sistemoje.

## 📋 Greitas startas

### 1. Automatinis nustatymas (rekomenduojama)

Pasirinkite vieną iš šių variantų pagal savo operacinę sistemą:

#### Windows
```cmd
# Batch skriptas (paprasčiausias)
setup.bat

# PowerShell skriptas (rekomenduojamas Windows 10/11)
powershell -ExecutionPolicy Bypass -File setup.ps1

# Universalus skriptas (jei Node.js jau įdiegtas)
node setup.js
```

#### macOS / Linux
```bash
# Universalus Unix skriptas
chmod +x setup.sh
./setup.sh

# Automatinis OS aptikimas
chmod +x setup
./setup

# Node.js skriptas (jei Node.js jau įdiegtas)
node setup.js
```

### 2. NPM skriptas (jei Node.js jau įdiegtas)
```bash
npm run setup
```

## 🔧 Ką daro setup skriptai

Visi setup skriptai atlieka šiuos veiksmus:

1. **Aptinka operacinę sistemą**
2. **Patikrina Node.js buvimą**
   - Jei nerastas - automatiškai įdiegia
   - Patikrina versiją (reikalinga v18+)
3. **Patikrina npm buvimą**
4. **Įdiegia projekto priklausomybes** (`npm install`)
5. **Kompiliuoja CSS failus** (jei yra SCSS)
6. **Paleidžia testus** (pasirinktinai)
7. **Pateikia instrukcijas** tolesniam darbui

## 📁 Sukurti failai

Po sėkmingo nustatymo bus sukurti šie failai:

```
├── setup.sh          # Unix/Linux/macOS skriptas
├── setup.bat         # Windows batch skriptas  
├── setup.ps1         # Windows PowerShell skriptas
├── setup.js          # Universalus Node.js skriptas
├── setup             # Automatinis OS aptikimo skriptas
├── README.md         # Detalus projekto aprašymas
├── SETUP_GUIDE.md    # Šis vadovas
└── .gitignore        # Atnaujintas su setup failais
```

## 🎯 Skriptų palyginimas

| Skriptas | OS | Privalumai | Trūkumai |
|----------|----|-----------|---------| 
| `setup.sh` | macOS/Linux | Pilnas funkcionalumas, automatinis Node.js įdiegimas | Neveikia Windows |
| `setup.bat` | Windows | Paprastas, veikia visose Windows versijose | Ribotas funkcionalumas |
| `setup.ps1` | Windows | Pilnas funkcionalumas, moderni sintaksė | Reikia PowerShell |
| `setup.js` | Visi | Universalus, pilnas funkcionalumas | Reikia Node.js |
| `setup` | Visi | Automatinis OS aptikimas | Papildomas sluoksnis |

## 🔍 Detalūs nustatymai

### Windows specifiniai nustatymai

#### Batch skriptas (`setup.bat`)
- Automatiškai atsisiunčia Node.js LTS
- Naudoja MSI installer
- Palaiko x64 ir x86 architektūras
- Automatiškai atnaujina PATH

#### PowerShell skriptas (`setup.ps1`)
- Bando naudoti `winget` (Windows 10/11)
- Atsarginis variantas - Chocolatey
- Rankinis atsisiuntimas jei reikia
- Geresnė klaidų apdorojimas

### Unix/Linux specifiniai nustatymai

#### Shell skriptas (`setup.sh`)
- Palaiko Ubuntu/Debian (apt-get)
- Palaiko CentOS/RHEL/Fedora (yum/dnf)
- Palaiko Arch Linux (pacman)
- macOS su Homebrew palaikymas

### Node.js skriptas (`setup.js`)
- Veikia visose OS su Node.js
- Spalvotas išvedimas
- Detalus klaidų pranešimas
- Automatinis testų paleidimas

## 🛠️ Rankinis nustatymas

Jei automatiniai skriptai neveikia:

### 1. Node.js įdiegimas

**Windows:**
1. Eikite į https://nodejs.org/
2. Atsisiųskite LTS versiją
3. Paleiskite installer

**macOS:**
```bash
# Su Homebrew
brew install node

# Arba atsisiųskite iš nodejs.org
```

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL/Fedora
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs npm
```

### 2. Projekto nustatymas
```bash
# Įdiekite priklausomybes
npm install

# Kompiliuokite CSS
npm run build-css

# Paleiskite testus
npm test
```

## 🧪 Testavimas

Po nustatymo galite paleisti:

```bash
# Unit testai
npm test

# E2E testai (reikia lokalaus serverio port 5500)
npm run cy

# CSS kompiliavimas
npm run build-css
```

## 🚨 Problemų sprendimas

### Node.js nerastas po įdiegimo
```bash
# Perkraukite terminalą arba atnaujinkite PATH
# Windows:
refreshenv

# Unix/Linux/macOS:
source ~/.bashrc
# arba
export PATH="/usr/local/bin:$PATH"
```

### Priklausomybių klaidos
```bash
# Išvalykite cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Teisių klaidos (Unix/Linux)
```bash
# Suteikite vykdymo teises
chmod +x setup.sh
chmod +x setup

# Arba paleiskite su bash
bash setup.sh
```

### PowerShell execution policy klaidos
```powershell
# Leiskite skriptų vykdymą
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Arba paleiskite su bypass
powershell -ExecutionPolicy Bypass -File setup.ps1
```

## 📞 Pagalba

Jei vis dar kyla problemų:

1. Patikrinkite ar esate projekto root kataloge
2. Įsitikinkite, kad turite interneto ryšį
3. Pabandykite rankinį nustatymą
4. Patikrinkite sistemos reikalavimus:
   - Node.js v18+ (Cypress reikalavimas)
   - npm v8+
   - Šiuolaikinė naršyklė

## 🎉 Sėkmingo nustatymo požymiai

Po sėkmingo nustatymo turėtumėte matyti:

```
✅ Node.js installed: v18.x.x (or higher)
✅ npm installed: v8.x.x (or higher)  
✅ Dependencies installed successfully!
✅ CSS build initiated!
✅ All tests passed!
✅ Environment setup completed successfully!
```

Dabar galite pradėti dirbti su projektu! 🚀
