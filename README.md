# Klases darbas - JavaScript Learning Project

Šis projektas yra skirtas JavaScript programavimo kalbos mokymui ir praktikos darbams. Projekte naudojamos šiuolaikinės web technologijos ir įrankiai.

## 🚀 Greitas paleidimas

### Automatinis aplinkos nustatymas

Projektui paleisti galite naudoti vieną iš šių automatinio nustatymo skriptų:

#### Windows
```cmd
setup.bat
```

#### macOS / Linux
```bash
chmod +x setup.sh
./setup.sh
```

#### Universalus (jei Node.js jau įdiegtas)
```bash
node setup.js
```

### Rankinis nustatymas

Jei automatinis nustatymas neveikia, galite nustatyti aplinką rankiniu būdu:

#### 1. Node.js įdiegimas

**Windows:**
- Atsisiųskite Node.js iš [nodejs.org](https://nodejs.org/)
- Įdiekite LTS versiją (rekomenduojama v18 ar naujesnė)

**macOS:**
```bash
# Naudojant Homebrew
brew install node

# Arba atsisiųskite iš nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Linux (CentOS/RHEL/Fedora):**
```bash
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs npm
```

#### 2. Priklausomybių įdiegimas

```bash
npm install
```

#### 3. CSS kompiliavimas (pasirinktinai)

```bash
npm run build-css
```

## 📁 Projekto struktūra

```
├── index.html              # Pagrindinis puslapis
├── naujienos.html          # Naujienų puslapis
├── naujienos_kurimas.html  # Naujienų kūrimo puslapis
├── naujiena.html           # Atskiros naujienos puslapis
├── sachmatai.html          # Šachmatų puslapis
├── js/                     # JavaScript failai
│   ├── pirmas.js          # Pagrindiniai JavaScript pavyzdžiai
│   ├── masyvai.js         # Masyvų darbas
│   ├── objektai.js        # Objektų darbas
│   ├── funkcijos.js       # Funkcijų pavyzdžiai
│   ├── naujienos.js       # Naujienų funkcionalumas
│   └── ...
├── css/                    # CSS stilių failai
├── scss/                   # SCSS failai
├── components/             # React-like komponentai
├── tests/                  # Testų failai
├── img/                    # Paveikslėliai
└── public/                 # Viešieji failai
```

## 🛠️ Galimi veiksmai

### Testavimas

```bash
# Jest unit testai
npm test

# Cypress E2E testai
npm run cy
```

### CSS kompiliavimas

```bash
# Kompiliuoti ir stebėti SCSS failus
npm run build-css
```

### Projekto paleidimas

1. **Naudojant Live Server (rekomenduojama):**
   - Įdiekite Live Server plėtinį VS Code
   - Atidarykite `index.html` ir paspauskite "Go Live"

2. **Naudojant Python HTTP serverį:**
   ```bash
   # Python 3
   python -m http.server 5500
   
   # Python 2
   python -m SimpleHTTPServer 5500
   ```

3. **Naudojant Node.js http-server:**
   ```bash
   npx http-server -p 5500
   ```

4. **Tiesiog atidarant failą naršyklėje:**
   - Atidarykite `index.html` failą naršyklėje
   - Kai kurios funkcijos gali neveikti dėl CORS apribojimų

## 🧪 Testavimas

### Unit testai (Jest)

Projektas naudoja Jest testavimo framework'ą:

```bash
npm test
```

Testų failai yra `tests/` kataloge:
- `sum.test.js` - Pagrindiniai testai
- `jest.test.js` - Jest funkcionalumo testai
- `klases_darbas.test.js` - Klasės darbų testai
- `mock.test.js` - Mock testai

### E2E testai (Cypress)

End-to-end testai naudoja Cypress:

```bash
npm run cy
```

**Svarbu:** Prieš paleidžiant Cypress testus, įsitikinkite, kad jūsų lokalus serveris veikia adresu `http://localhost:5500`.

## 🎨 Stilių sistema

Projektas naudoja:
- **TailwindCSS** - Utility-first CSS framework
- **SCSS** - CSS preprocessor
- **Custom CSS** - Papildomi stiliai

### CSS kompiliavimas

```bash
# Kompiliuoti ir stebėti pakeitimus
npm run build-css
```

## 📚 Mokymosi medžiaga

Projektas apima šias JavaScript temas:

1. **Kintamieji ir duomenų tipai** (`js/pirmas.js`)
2. **Masyvai** (`js/masyvai.js`)
3. **Objektai** (`js/objektai.js`)
4. **Funkcijos** (`js/funkcijos.js`)
5. **DOM manipuliacijos** (`js/dom_manipuliacijos.js`)
6. **API darbas** (`js/API_dad_jokes.js`, `js/TV_Maze_API.js`)
7. **ES6+ funkcijos** (`js/es6.js`)
8. **Ciklai** (`js/for_ciklo_pradmenys.js`, `js/while_ciklai.js`)

## 🔧 Sistemos reikalavimai

- **Node.js**: v18.0.0 arba naujesnė (reikalinga Cypress)
- **npm**: v8.0.0 arba naujesnė
- **Naršyklė**: Šiuolaikinė naršyklė su ES6+ palaikymu

## 🐛 Problemų sprendimas

### Node.js nerastas
```bash
# Patikrinkite ar Node.js įdiegtas
node --version
npm --version
```

### Priklausomybių įdiegimo klaidos
```bash
# Išvalykite cache ir bandykite iš naujo
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Cypress testų klaidos
- Įsitikinkite, kad lokalus serveris veikia port 5500
- Patikrinkite Node.js versiją (reikalinga v18+)

### CSS nekompiliuojasi
```bash
# Patikrinkite ar SCSS failai egzistuoja
ls scss/
# Bandykite kompiliuoti rankiniu būdu
npx tailwindcss -i ./scss/style.scss -o ./public/style.css
```

## 📞 Pagalba

Jei kyla problemų su projekto nustatymu:

1. Patikrinkite sistemos reikalavimus
2. Paleiskite setup skriptą iš naujo
3. Pabandykite rankinį nustatymą
4. Patikrinkite ar visi failai egzistuoja projekto kataloge

## 📄 Licencija

ISC License - žiūrėkite `package.json` failą dėl detalių.

## 👨‍💻 Autorius

**Tautvydas Dulskis**
- GitHub: [tautiz](https://github.com/tautiz)
- Projektas: [250407JSM492VAK](https://github.com/tautiz/250407JSM492VAK)
