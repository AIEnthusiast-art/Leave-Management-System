# LeaveFlow — Leave Management System

[![Status](https://img.shields.io/badge/status-ready-brightgreen)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A polished frontend-only leave management application built with HTML5, CSS3, and Vanilla JavaScript. LeaveFlow simulates a complete employee leave workflow with role-based pages for employees, department heads, and HR admins — no backend required.

---

## 🚀 Features

- **Responsive dashboard** with leave statistics, progress cards, and chart visualizations
- **Leave request form** with validation and submission flow
- **Leave history** table with filters and status tracking
- **Department approval** page for interim review and decision-making
- **HR admin panel** for final approval, reporting, and summary views
- **Local persistence** using `localStorage` for data retention across page loads
- **Modern UI design** with custom CSS, Google Fonts, and clean page layout

---

## 📄 Pages

| Page | Role | Purpose |
|------|------|---------|
| `index.html` | All users | Dashboard overview with stats and charts |
| `apply.html` | Employee | Submit a new leave request |
| `history.html` | Employee | View and filter leave history |
| `dept-approval.html` | Dept. Head | First-stage approval or rejection |
| `hr-admin.html` | HR Admin | Final approval and leave reporting |

---

## 🛠️ Tech Stack

- **HTML5** and **CSS3** for structure and styling
- **Vanilla JavaScript** for app logic
- **Chart.js** (via CDN) for interactive charts
- **Google Fonts**: Syne and DM Sans
- **`localStorage`** for client-side data persistence

---

## 💻 Local Development

1. Clone or download the repository
2. Open the folder in VS Code or any code editor
3. Open `index.html` directly in your browser

For a better experience, use the VS Code Live Server extension:

- Install Live Server
- Right-click `index.html`
- Select **Open with Live Server**

---

## 📦 Deployment

This repository is ready for static hosting and can be deployed to services such as Vercel, Netlify, or GitHub Pages.

### Vercel Deployment

1. Push the repository to GitHub
2. Open [vercel.com](https://vercel.com) and create a new project
3. Import the GitHub repository
4. Set the framework preset to **Other**
5. Keep defaults for the remaining settings
6. Deploy

---

## ✨ Notes

- No backend or build process required
- All app state is stored in browser `localStorage`
- Ideal for prototyping HR workflows and leave management UI

---


"# Leave-Management-System" 
