# Qollect - Educational Material Management Platform

Qollect is a modern mobile application designed to help students organize, share, and access educational materials efficiently. Built with React Native and Expo, it provides a seamless experience for managing study materials across different semesters and subjects.

## 🌟 Features

### For Students

- 📚 Organize materials by semester and subject
- 🔍 Advanced search functionality
- ⭐ Rate and review study materials
- 📱 Wishlist for saving materials
- 🔄 Request new materials
- 🌓 Dark/Light theme support
- 📱 Cross-platform (iOS & Android)

### For Administrators

- ✅ Material approval system
- 👥 User management
- 📊 Content moderation
- 🔒 Secure admin access

## 🛠️ Technology Stack

- **Frontend**: React Native with Expo
- **Backend**: Firebase
  - Firestore for database
  - Firebase Storage for file storage
  - Firebase Authentication for user management
- **File Storage**: Google Drive API integration
- **Navigation**: Expo Router with tab-based navigation
- **UI Components**: Custom components with modern design

## 📱 Screenshots

[Add your app screenshots here]

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase account
- Google Cloud Console account (for Drive API)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nandhu-navneeth/QollectNew.git
cd QollectNew
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

   - Copy `config/googleDriveConfig.js.template` to `config/googleDriveConfig.js`
   - Add your Google OAuth credentials
   - Configure Firebase credentials

4. Start the development server:

```bash
npm start
```

5. Run on your device:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## 📁 Project Structure

```
app/
├── (tabs)/           # Main tab navigation screens
├── admin/           # Admin panel components
├── auth/            # Authentication screens
├── components/      # Reusable UI components
├── semester/        # Semester-related screens
└── _layout.jsx      # Root layout configuration
```

## 🔧 Configuration

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication, Firestore, and Storage
3. Add your Firebase configuration to the project

### Google Drive API Setup

1. Create a project in Google Cloud Console
2. Enable the Google Drive API
3. Create OAuth 2.0 credentials
4. Add the credentials to `config/googleDriveConfig.js`

## 🔒 Security

- Firebase security rules implemented
- Protected routes and admin access
- Secure file storage with Google Drive integration
- Environment variables for sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Navneeth Nandhu - Initial work

## 🙏 Acknowledgments

- Firebase team for the amazing backend services
- Expo team for the React Native framework
- All contributors who have helped shape this project

## 📞 Support

For support, email [your-email@example.com] or create an issue in the repository.

## 🔄 Updates

### Version 1.0.0

- Initial release
- Basic material management features
- User authentication
- Admin panel

## 📱 Platform Support

- iOS 13.0 and above
- Android 6.0 (API level 23) and above
- Web browsers (Chrome, Firefox, Safari)

## 🔍 Search Engine Optimization

The app is optimized for:

- Fast loading times
- Efficient material search
- Smooth navigation
- Responsive design

## 🎨 Design System

The app uses:

- Custom Outfit font family
- Consistent color scheme
- Modern UI components
- Responsive layouts

## 🔄 Future Roadmap

- [ ] Offline support
- [ ] Material recommendations
- [ ] Collaborative study groups
- [ ] Advanced analytics
- [ ] Push notifications

---

Made with ❤️ by Navneeth Nandhu
