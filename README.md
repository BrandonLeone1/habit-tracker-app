# Habit Tracker App

A full-stack React application designed to help users build and maintain their habits through consistent trackign and visual progress insights. Users can create habits, mark daily completions, and monitor their progress via streak tracking and weekly/monthly charts powered by Rehcarts. All data is stored per-used and synced in real-time with Firebase.

## Features
- Add and remove habits
- Track daily habit completion with simple interactions
- Streak tracking system:
    - Automatically calculates current streak per habit (amt. of days you have completed each habit in a row)
    - Resets streaks when a habit is missed
- Visualize progress with weekly & monthly completion charts
- Secure user authentication with Firebase (Google OAuth)
- Real-time updates using Firebase Firestore 

## Setup Locally
1. Clone the repo: 
```bash
git clone https://github.com/BrandonLeone1/habit-tracker-app.git
```
2. Navigate to the project folder:
```bash
cd habit-tracker-app
```
3. Install all dependencies: 
```bash
npm install
```
4. Create a firebase project and add your config inside: 
```bash
/services/Firebase.js
```
5. Start the development server:
```bash
npm run dev
```
6. Usage:
navigate to http://localhost:5173 in your browser. Sign in with Google to begin creating habits and tracking completions.

## Built With
- React
- React Router
- Firebase Authentication (Google OAuth)
- Firestore (real-time database)
- Recharts (data visualization)
- Tailwind CSS
- Vite

## Key concepts / What This Project Demonstrates
- Real-time data syncing with Firestore ( onSnapshot )
- Structuring user-specific habit tracking data
- Managing state across multiple views and time-based data/logic
- Data visualization using Recharts (weekly & monthly insights)
- Deriving progress metrics instead of storing extra data
- Building a full CRUD application with authentication and persistence

## Future Improvements
- Highest streak count & milestones
- Custom habit categories with filtering
- Notifcations/reminders for habits with their streak about to end
- More advanced charts for long-term data ( bar charts, best streaks )
