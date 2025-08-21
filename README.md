# Crime Heatmap & Safe Route Finder

A web application that allows users to **report crimes** and **find the safest route** between any two real-world locations using live crime data. Built with modern technologies, fully interactive map interface, and free-to-use APIs.

---

## 🚀 Features

- **Crime Reporting**
  - Users can report crimes (theft, assault, etc.) with location and description.
  - Crime data is stored in MongoDB for visualization and analysis.

- **Safe Route Finder**
  - Enter any real-world **start** and **end** location.
  - Map shows **safest path** based on current crime data.
  - Interactive map with **start/end markers** and route polyline.

- **Interactive Map**
  - Powered by **Leaflet.js** with OpenStreetMap tiles.
  - Crimes displayed visually for better awareness.
  
- **Real-World Addresses**
  - Uses **OpenStreetMap Nominatim API** for free geocoding of addresses.
  - No paid APIs required.

---

## 🛠️ Tech Stack

- **Frontend:** React, React Leaflet, Axios, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **APIs:** OpenStreetMap Nominatim (Geocoding)  
- **Map Visualization:** Leaflet.js  

---

## 📂 Project Structure

crime-heatmap-project/
│
├─ server/
│ ├─ routes/
│ │ ├─ crime.routes.js # CRUD for crime reports
│ │ ├─ crime.seed.js # Seed initial crime data
│ │ └─ route.js # Safe route API using OpenStreetMap
│ ├─ db/
│ │ └─ connect.js # MongoDB connection
│ └─ index.js # Express server entry
│
└─ client/
├─ src/pages/
│ └─ SafeRoute.jsx # Map + safe route UI
├─ App.jsx
└─ index.js

---

## ⚡ How to Run

### Backend

cd server
npm install
npm run start

### Frontend

cd client
npm install
npm run start

---

## 📸 Demo

- Safe Route: Connaught Place → India Gate  
- Crime Report Example: Theft reported at Connaught Place  

---

## 💡 Future Improvements

- Integrate **real-time crime heatmap** with severity levels.  
- Smart **safe route algorithm** avoiding high-crime areas.  
- Authentication & user accounts for crime reporting.  
- Mobile-friendly responsive design.  

---

## 📝 Author

Atul Chaudhary

---
