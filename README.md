# User Dashboard App

A reactive Angular dashboard application built using standalone components, RxJS state management, and Chart.js visualization.

## Features

* Dynamic User Dashboard
* Add User Modal Form
* Reactive Forms with Validation
* RxJS BehaviorSubject State Management
* Dynamic User Table
* Real-time Pie Chart Updates
* Lazy Loaded Chart.js Import
* SSR-safe Chart Rendering
* Professional Responsive UI
* Standalone Angular Architecture

---

# Tech Stack

* Angular 21+
* TypeScript
* RxJS
* Chart.js
* SCSS/SASS
* Vite

---

# Project Structure

```text
src/app
│
├── components
│   ├── user-dashboard
│   └── user-form
│
├── models
│   └── user.ts
│
├── services
│   └── user.service.ts
```

---

# Functionality

## User Dashboard

Displays:

* User table
* Role distribution pie chart
* Add User button

---

## Add User Form

Users can add:

* Name
* Email
* Role

Validation includes:

* Required fields
* Valid email format

---

## Real-time Updates

When a new user is added:

* Table updates automatically
* Pie chart updates automatically

Implemented using RxJS `BehaviorSubject`.

---

# Lazy Loading

Chart.js is dynamically imported using:

```ts
const ChartModule = await import('chart.js/auto');
```

This improves performance by reducing initial bundle size.

---

# SSR Compatibility

Handled Angular SSR/browser rendering issues using:

```ts
isPlatformBrowser()
```

This ensures Chart.js renders only in browser environment.

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/priyanka-777/user-dashboard-app.git
```

---

## Navigate to Project

```bash
cd user-dashboard-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

# Production Build

```bash
ng build
```

---

# UI Theme

Theme colors used:

* `#383838`
* `#1c4980`

Input/Button Height:

* `48px`

---

# Assignment Requirements Covered

* User Table
* Modal Popup Form
* Form Validation
* RxJS State Management
* Dynamic Chart Updates
* Lazy Loading
* Real-time UI Updates
* Chart.js Integration
* Standalone Components
* SSR-safe Rendering

---

# Future Improvements

* Search & Filtering
* Pagination
* Dark Mode
* Animations
* API Integration
* Persistent Storage

---

# Author

Priyanka Inagadapu


