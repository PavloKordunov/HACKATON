# 🌱 ReFarm

> A digital platform connecting investors with Ukrainian farmers to restore and revitalize agriculture on formerly unsafe, mined lands.

---

## 📌 Problem

Ukraine's agricultural sector faces critical challenges:

- **Over 5 million hectares** of farmland contaminated by landmines and unexploded ordnance.
- In **2023 alone**, more than **20% of farmland** was unsafe for planting.
- Farmers face **daily risks**—from deadly mines to broken supply chains and destroyed infrastructure.

---

## 💡 Product Overview

**ReFarm** is a digital bridge between investors and Ukrainian farmers, offering a secure and transparent platform to fund agricultural recovery and growth.

### 👇 What ReFarm Offers

- 🌍 **Interactive map** to select fields available for investment  
- 👤 **Personal accounts** for both farmers and investors  
- 🧑‍🌾 **Profiles** with information about every registered farmer and field  
- 🏆 **Leaderboard** with top 5 investors  
- 💸 **Token-based reward system** for investors  

---

## 📈 Economic Impact

ReFarm isn’t just charity—it’s a platform for **sustainable economic growth**:

- 🪙 **Earn tokens** in return for investments  
- 🤝 **Cooperate with government programs** to rebuild agriculture  
- 💼 **Help people find jobs** in farming & agri-supply chains  
- 📢 **Opportunity for advertising and brand placement**  

---

## 🔮 Future Roadmap

- 📱 **Mobile app** development for iOS & Android  
- 💳 **Secure payment integration** for seamless investment  
- 🧾 **Integration with Ukrainian Cadastre** for land data verification  
- 📊 **Advanced analytics & reports** to build investor trust  
- 🔐 **Diia integration** for identity verification and secure authentication  

---

## 🛠 Tech Stack

- **Backend**: Java (Spring Boot)  
- **Frontend**: React
- **Database**: PostgreSQL
- **Map Integration**: Leaflet / Google Maps  
- **Authentication**: JWT / Spring Security / Diia (planned)

---

## 🚀 Getting Started

### Prerequisites

- Java 17+  
- Maven or Gradle  
- Node.js (for frontend, if applicable)  
- PostgreSQL or compatible DB  
- `.env` file for environment variables (or use `application.properties`)

### Backend Setup (Java)

```bash
# Clone the repository
git clone https://github.com/PavloKordunov/HACKATON.git
cd HACKATON

# Build the project
./mvn clean install

# Run the backend server
./mvn spring-boot:run
```
The backend will start at http://localhost:8080.

### Frontend Setup (React) 
```bash
cd frontend

npm install
npm run dev
```

### 📂 Project Structure
```
HACKATON/
├── backend/
│   ├── src/main/java/com/refarm/...      # Java backend code
│   ├── src/main/resources/               # application.properties, templates
│   └── pom.xml                           # Maven config
├── frontend/                             # Optional frontend client
├── README.md
└── .gitignore
```
### 🤝 Contributing
We welcome your contributions!
```
To get started:

1) Fork the repository
2) Create your feature branch: git checkout -b feature/my-feature
3) Commit your changes
4) Push to your branch and open a Pull Request

Please follow our code style and submit relevant tests.
```
