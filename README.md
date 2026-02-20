# 🚀 React TypeScript User Management App

A multi-page React application built with TypeScript that demonstrates modern React development patterns including:

- Custom Hooks
- Context API (Global State Management)
- React Router
- Reusable Components
- Search & Filtering
- Error Handling
- Performance Optimization

This project was developed as part of structured upskilling in React + TypeScript to practice scalable architecture and interview-level concepts.

---

## 🛠 Tech Stack

- React
- TypeScript
- React Router DOM
- Context API
- Custom Hooks
- Vite
- useMemo & useCallback (Performance Optimization)

---

## 📂 Project Structure
src/
├── components/
│ ├── Header.tsx
│ ├── Users.tsx
│ ├── SearchInput.tsx
│ ├── ProfileForm.tsx
│
├── pages/
│ ├── Home.tsx
│ ├── UsersPage.tsx
│ ├── ProfilePage.tsx
│
├── hooks/
│ └── useUsers.ts
│
├── context/
│ └── ProfileContext.tsx
│
├── types/
│ ├── User.ts
│ └── Profile.ts
│
├── App.tsx
└── main.tsx

---

## ✨ Features

### 🔹 Multi-Page Navigation
Implemented using React Router:
- Home Page
- Users Page
- Profile Page

### 🔹 Custom Hook (`useUsers`)
Encapsulates:
- API fetching
- Loading state management
- Error handling
- Retry mechanism

### 🔹 Global State Management (Context API)
Profile data is shared across:
- Profile Page
- Header Component

This avoids prop drilling and demonstrates scalable state architecture.

### 🔹 Search & Filtering
- Case-insensitive user search
- Smart empty state handling
- Clear search functionality

### 🔹 Reusable Components
- SearchInput component
- Clean separation of UI and business logic

### 🔹 Performance Optimization
- useMemo
- useCallback
- Clean rendering patterns

---

## 🎯 What This Project Demonstrates

- Strong understanding of React fundamentals
- Clean architecture (components / hooks / context / types)
- Type-safe state management with TypeScript
- Scalable global state handling
- Interview-level React patterns

---

