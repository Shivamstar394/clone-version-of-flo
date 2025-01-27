# clone-version-of-flo# Flo Tracker Clone App

A feature-rich clone of the Flo Period and Ovulation Tracker app built using React Native, Expo, and Supabase. The app includes features for user authentication, period tracking, and ovulation prediction.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Screens](#screens)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Authentication**: User sign-up, login, and logout using Supabase.
- **Period Calendar**: Visualize and track period dates.
- **Add Period Logs**: Log period start and end dates.
- **Responsive Design**: Works seamlessly on both iOS and Android devices.

---

## Technologies Used
- **React Native**: For building cross-platform mobile applications.
- **Expo**: For simplified React Native development and testing.
- **Supabase**: Backend-as-a-service for authentication and database.
- **TypeScript**: For type-safe JavaScript development.

---

## Project Structure
```plaintext
flo-tracker-clone/
├── src/
│   ├── components/
│   │   ├── CustomButton.tsx
│   │   ├── InputField.tsx
│   │   ├── Header.tsx
│   ├── screens/
│   │   ├── AuthScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── PeriodCalendar.tsx
│   │   ├── AddPeriodLog.tsx
│   ├── utils/
│   │   ├── supabase.ts
│   │   ├── helpers.ts
│   ├── styles/
│       ├── globalStyles.ts
├── App.tsx
├── AppNavigator.tsx
├── babel.config.js
├── package.json
├── README.md
```

---

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/).
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/).
- Install [Git](https://git-scm.com/).

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flo-tracker-clone.git
   cd flo-tracker-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Supabase:
   - Create a project on [Supabase](https://supabase.com/).
   - Create tables for users and period logs (refer to the Supabase documentation).
   - Copy your Supabase `URL` and `ANON_KEY`.
   - Update the `supabase.ts` file with your credentials.
4. Start the development server:
   ```bash
   npx expo start
   ```
5. Scan the QR code using the Expo Go app on your mobile device to preview.

---

## Usage
- **Sign Up**: Register a new account.
- **Log In**: Log in with your credentials.
- **Period Calendar**: Navigate to the calendar screen to view tracked periods.
- **Add Period Log**: Log new period details via the "Add Period Log" screen.

---

## Screens
1. **Auth Screen**: For user sign-up and login.
2. **Home Screen**: Main dashboard with navigation options.
3. **Period Calendar Screen**: Displays period tracking data.
4. **Add Period Log Screen**: Allows users to add and save period logs.

---

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements
- [React Navigation](https://reactnavigation.org/)
- [Expo](https://expo.dev/)
- [Supabase](https://supabase.com/)
