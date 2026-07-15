# 🚑 RescueAI

**AI-Powered Emergency Triage & First-Aid Assistant**

RescueAI is an AI-powered web application that helps users assess the severity of medical emergencies based on symptoms and provides immediate first-aid guidance along with recommended next steps. It is designed to assist users in making informed decisions during critical situations while emphasizing that professional medical care should always be sought when needed.

---

## 🌟 Problem Statement

During medical emergencies, many people are unsure whether symptoms require immediate medical attention or how to provide first aid while waiting for help.

RescueAI addresses this challenge by using AI to:
- Assess symptom severity
- Suggest possible conditions
- Provide first-aid recommendations
- Highlight actions to avoid
- Recommend the appropriate next step

---

# ✨ Features

- 🤖 AI-powered emergency symptom analysis
- 🚨 Emergency severity classification
  - Low
  - Moderate
  - High
  - Critical
- 🩺 Possible medical conditions (AI-generated)
- 🧠 AI reasoning for assessment
- 👤 Patient summary generation
- ⏱ Recommended urgency level
- 🩹 First-aid recommendations
- ❌ Things to avoid
- 🚑 Emergency action recommendation
- 📍 Find nearby hospitals
- 🎤 Voice-to-text symptom input
- 📱 Responsive modern UI

---

# 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios
- Vite

### Backend

- Node.js
- Express.js
- CORS

### AI

- Groq API
- Llama 3.3 70B Versatile

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```
RescueAI/
│
├── client/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   └── server.js
│
└── README.md

```

# 🧠 How It Works

1. User enters medical information.
2. Symptoms are sent to the Express backend.
3. RescueAI generates a structured prompt.
4. Groq Llama 3.3 analyzes the symptoms.
5. AI returns structured JSON.
6. The frontend displays an easy-to-understand emergency report.

---

# Example Output

- Emergency Severity
- Patient Summary
- AI Reasoning
- Possible Conditions
- First Aid
- Things To Avoid
- Recommended Action
- Emergency Timeline

---

## 📸 Screenshots


- Home Page
  
  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/d84bc3f1-93e5-453d-a6ce-2c58218c835b" />


- Assessment Page
  
  <img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/eaf3039c-f902-4afb-897e-cba133c8a615" />


- AI Result Page
  
  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/314f03b9-7334-4772-b394-1819f4ff5882" />


---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Sreelakshmii-R/RescueAI.git

cd RescueAI
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

For the frontend (`client/.env`):

```
VITE_API_URL=http://localhost:5000
```

When deploying:

```
VITE_API_URL=YOUR_BACKEND_API_URL
```

---

# 🎯 Future Improvements

- 🌍 Multilingual support
- 📞 Emergency contact integration
- 📸 Image-based injury analysis
- 📍 GPS hospital locator
- 📄 Downloadable PDF report
- 📴 Offline emergency guidance

---

# 📄 License

This project was developed for educational and hackathon purposes.

---

# 👩‍💻 Developer

**Sreelakshmi Ramesh**

GitHub: https://github.com/Sreelakshmii-R

---

## ❤️ Acknowledgements

- Groq
- React
- Tailwind CSS
- Express.js
- Vercel
- Render
