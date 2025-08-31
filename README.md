# << Folder Structure Setup >>

# src/
# ├── assets/
  │   ├── images/
  │   └── icons/
  │
# ├── components/ >>  * Navbar, Footer, Button, etc.  * Reusable Layouts like Cards, Sections.
  │   ├── common/         
  │   └── layout/  
  │
# ├── pages/
  │   ├── Home.jsx
  │   ├── Profile.jsx
  │   ├── Projects.jsx
  │   ├── Clients.jsx
  │   └── Contact.jsx
  │
# ├── services/ >>  * All backend API requests handled here * API URLs, config, theme values
  │   └── api.js           
  │
# ├── utils/
  │   └── constants.js     
  │
# ├── styles/   >>    * Modular component-based styling
  │   ├── global.css
  │   └── *.module.css    
  │
# ├── App.jsx
# ├── index.js
# └── routes.jsx  >>   * Route-based navigation setup
