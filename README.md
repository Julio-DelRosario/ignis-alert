# 🔥 Ignis Alert Mobile App using React Native

This is a React Native project set up using Expo. Follow the steps below to clone and run the project locally.

---

## 🛠️ Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (lagay nyo lang sa terminal yung 'npx create-expo-app@latest')
- Git
- Expo Go in the App store or playstore

---

### 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://https://github.com/Julio-DelRosario/ignis-alert.git
```
>Or you can clone the repo via Github desktop

2. **Install dependencies**

```bash
npm install
```

> This will install all packages listed in `package.json` and recreate the `node_modules` folder.

3. **Start the development server**

```bash
npx expo start
```

> This opens Expo DevTools. You can scan the QR code using the **Expo Go** app on your phone or open it in the browser.

---

### 💻 Running on Web

To preview your app in the browser (using React Native Web):

```bash
npx expo start --web
```

---

### 📁 Project Structure

```
.
├── app/                # App screens or components
├── assets/             # Static files like images
├── node_modules/       # (Ignored) Project dependencies
├── .gitignore          # Files and folders to ignore in Git
├── app.json            # App configuration for Expo
├── metro.config.js     # Metro bundler configuration
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact versions of installed packages
```

---

### ✅ Notes

- `node_modules/`, and `.expo/` are **gitignored**.
- The project uses **Expo**, making it easy to test on physical devices.
- Console warnings may appear about deprecated props (`shadow*`, `resizeMode`, `pointerEvents`) — these do not affect core functionality but should be updated for best practices.
- If everything works when nagstart yung server and na scan QR code you can see the project in your phone or use the localhost link provided makikita sa web mo

---

