# Shreya Kumari — Portfolio

A personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, experience, and achievements as an aspiring Software Engineer and Full Stack Developer.

## Live Demo

> Coming soon — deploy on Vercel to get a live link.

## Features

- Responsive design — works on all screen sizes
- Smooth animations powered by Framer Motion
- Sections: Hero, About, Skills, Experience, Projects, Achievements, Contact
- Working contact form via EmailJS — messages land directly in my inbox
- Social links: GitHub, LinkedIn, LeetCode, Email

## Tech Stack

| Category   | Technologies                          |
|------------|---------------------------------------|
| Frontend   | React 18, TypeScript, Vite            |
| Styling    | Tailwind CSS, shadcn/ui               |
| Animation  | Framer Motion (motion/react)          |
| Icons      | Lucide React                          |
| Email      | EmailJS                               |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/ShryCreates/Portfolio.git
cd Portfolio/Shreya_Portfolio

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Fill in your EmailJS keys in .env.local

# Start dev server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the `Shreya_Portfolio` directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [emailjs.com](https://www.emailjs.com) after setting up your account and email service.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Project Structure

```
Shreya_Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   ├── styles/
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## Contact

- Email: shry1012005@gmail.com
- LinkedIn: [Shreya Kumari](https://www.linkedin.com/in/shreya-kumari-24a249333/)
- GitHub: [ShryCreates](https://github.com/ShryCreates)
- LeetCode: [Shry_Kri](https://leetcode.com/u/Shry_Kri/)
