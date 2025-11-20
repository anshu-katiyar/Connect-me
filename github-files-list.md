# GitHub Files for Netlify Deployment

## ✅ Essential Files to Upload:

### 📄 Main Files:
- `index.html` (main homepage)
- `style.css` (main stylesheet)
- `script.js` (main JavaScript)
- `_redirects` (for navigation)

### 📁 Page Folders:
- `about_me/about.html`
- `about_me/about.css`
- `skills/skills.html`
- `skills/skills.css`
- `project/project.html`
- `project/project.css`
- `contact/contact.html`
- `contact/contact.css`
- `hire_me/hire.html`
- `hire_me/hire.css`
- `hire_me/hire.js`

### 🖼️ Images:
- `Anshukatiyar.jpg`
- `machine learning.jpeg`
- `pandas numpy matplotlib seaborn.jpg`
- `Rprogramming.jpg`
- `Screenshot 2025-09-21 020134.png`
- `Screenshot 2025-11-20 185036.png`
- `Github-desktop-logo-symbol.svg.png`

### 📋 Documents:
- `Anshu Katiyar Resume · Streamlit3.pdf`

### 📝 Optional Files:
- `README.md` (project description)
- `netlify-deploy-guide.md` (deployment guide)

## ❌ Files NOT to Upload:
- `app.py` (Streamlit file - not needed)
- `requirements.txt` (Streamlit dependency - not needed)
- Any `.pyc` files
- `node_modules/` (if any)

## 📂 Final GitHub Structure:
```
anshu-katiyar-portfolio/
├── index.html
├── style.css
├── script.js
├── _redirects
├── README.md
├── Anshukatiyar.jpg
├── machine learning.jpeg
├── pandas numpy matplotlib seaborn.jpg
├── Rprogramming.jpg
├── Screenshot 2025-09-21 020134.png
├── Screenshot 2025-11-20 185036.png
├── Github-desktop-logo-symbol.svg.png
├── Anshu Katiyar Resume · Streamlit3.pdf
├── about_me/
│   ├── about.html
│   └── about.css
├── skills/
│   ├── skills.html
│   └── skills.css
├── project/
│   ├── project.html
│   └── project.css
├── contact/
│   ├── contact.html
│   └── contact.css
└── hire_me/
    ├── hire.html
    ├── hire.css
    └── hire.js
```

## 🚀 Upload Commands:
```bash
git add index.html style.css script.js _redirects
git add about_me/ skills/ project/ contact/ hire_me/
git add *.jpg *.jpeg *.png *.pdf
git add README.md
git commit -m "Portfolio website ready for deployment"
git push origin main
```

**Total: ~20 files** - All essential for working portfolio!