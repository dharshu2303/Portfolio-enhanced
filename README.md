# Dharshini Priya A - Portfolio Website

A modern, high-end portfolio website built with Next.js 14, Tailwind CSS, and Node.js backend, featuring AI chatbot integration and dynamic content loading.

## 🌟 Features

### Frontend
- **Next.js 14** with App Router for modern React development
- **Tailwind CSS** for responsive, custom neon-themed styling
- **Framer Motion** for smooth animations and transitions
- **Particles.js** for interactive background effects
- **Responsive Design** optimized for all devices

### Key Sections
- **Hero Section** - Eye-catching introduction with animated text and profile image
- **About Section** - Personal background with animated skill bars
- **Skills Section** - Categorized technical skills with hover effects
- **Projects Section** - Dynamic project showcase fetched from backend API
- **Why Hire Me Section** - Video introduction with key highlights (NEW)
- **Education Section** - Academic background and achievements
- **Certifications Section** - Auto-rotating carousel of certifications from backend API
- **Contact Section** - Integrated contact form with Formspree

### Advanced Features
- **AI Chatbot** - Bottom-left chat bubble with OpenAI/Gemini integration
- **Backend API** - Express server serving projects and certifications
- **Smooth Animations** - Scroll-triggered animations throughout
- **Neon/Cyberpunk Theme** - Custom color scheme preserved from original design

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- React 18
- Tailwind CSS 3.4
- Framer Motion 11
- Particles.js 2.0
- Font Awesome 6.4

### Backend
- Node.js
- Express 4.18
- CORS
- dotenv

### AI Integration
- OpenAI API (GPT-3.5/4) or Google Gemini

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/dharshu2303/Portfolio-enhanced.git
cd Portfolio-enhanced
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
OPENAI_API_KEY=your_openai_api_key_here
# OR
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Create `.env` file in the backend directory:
```env
PORT=5000
```

4. Start the backend server:
```bash
npm start
```

The backend will run on [http://localhost:5000](http://localhost:5000)

## 🔧 Development

### Running Both Frontend and Backend

In development, you'll need two terminal windows:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run backend
```

Or use the backend script directly:
```bash
cd backend && npm start
```

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-enhanced/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── WhyHireMe.jsx (NEW)
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Chatbot.jsx (NEW)
│   │   └── ParticlesBackground.jsx
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── backend/
│   ├── data/
│   │   ├── projects.js
│   │   └── certifications.js
│   ├── routes/
│   │   └── api.js
│   ├── server.js
│   └── package.json
├── public/
│   ├── projects/
│   ├── certificates/
│   ├── photo.jpg
│   └── brand.png
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🌐 API Endpoints

### Backend API

**Base URL:** `http://localhost:5000`

#### Get Projects
```
GET /api/projects
```
Returns array of project objects with id, image, title, description, technologies, link, and category.

#### Get Certifications
```
GET /api/certifications
```
Returns array of certification objects with id, image, title, issuer, and date.

### Chat API

**Frontend Route:** `/api/chat`

```
POST /api/chat
Body: { "message": "your question here" }
```
Returns AI-generated response based on Dharshini's profile.

## 🎨 Customization

### Colors
The neon theme colors are defined in `tailwind.config.js`:
- neon-blue: #0a67a1
- neon-pink: #FF00F5
- neon-purple: #dc81fa
- neon-green: #00FF57

### Adding Projects
Edit `backend/data/projects.js` to add or modify projects.

### Adding Certifications
Edit `backend/data/certifications.js` to add or modify certifications.

### Chatbot Personality
Modify the `SYSTEM_PROMPT` in `app/api/chat/route.js` to customize the chatbot's responses.

## 🚀 Deployment

### Frontend (Vercel - Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL
   - `OPENAI_API_KEY`: Your OpenAI API key (optional)
5. Deploy

### Backend (Railway, Render, or Heroku)

#### Railway
1. Go to [Railway](https://railway.app)
2. Create new project from GitHub repo
3. Select the `backend` directory
4. Add environment variable: `PORT` (Railway auto-assigns)
5. Deploy

#### Render
1. Go to [Render](https://render.com)
2. Create new Web Service
3. Connect your repository
4. Root directory: `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variable: `PORT=5000`
8. Deploy

### Environment Variables for Production

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
OPENAI_API_KEY=your_actual_openai_key
```

**Backend (.env):**
```env
PORT=5000
```

## 👤 Contact

**Dharshini Priya A**
- Email: dharshinipriya.a426@gmail.com
- GitHub: [@dharshu2303](https://github.com/dharshu2303)
- LinkedIn: [Dharshini Priya A](https://www.linkedin.com/in/dharshini-priya-a-74a446290/)
- Location: Dindigul, Tamil Nadu, India
- College: M Kumarasamy College of Engineering, Karur

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Particles.js for the interactive background
- Framer Motion for smooth animations
- OpenAI for the chatbot capabilities

---

Made with ❤️ by Dharshini Priya A
