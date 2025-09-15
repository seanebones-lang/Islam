# 🍎 Apple Store Setup Guide for Islamic Learning Companion

## ✅ What I've Fixed for You

### 1. **Bundle Identifier Updated**
- Changed from `com.islamicapp.app` to `com.nextelevenstudios.islamiclearningcompanion`
- This ensures your app has a unique identifier for the App Store

### 2. **App Icons Created**
- Generated all required iOS app icon sizes (20x20 to 1024x1024)
- Created Islamic-themed icons with mosque emoji and green background
- Updated `Contents.json` to reference all icon files

### 3. **Info.plist Enhanced**
- Added proper app display name: "Islamic Learning Companion"
- Added App Transport Security settings for web content
- Added encryption compliance flag for App Store submission

## 🚀 Next Steps to Submit to Apple Store

### Step 1: Open Your Project in Xcode
```bash
cd "/Users/seanmcdonnell/Desktop/Islamic App/IslamicApp"
open IslamicApp.xcodeproj
```

### Step 2: Configure Code Signing
1. **Select your project** in the navigator
2. **Select the target** "IslamicApp"
3. **Go to "Signing & Capabilities" tab**
4. **Check "Automatically manage signing"**
5. **Select your Apple Developer Team** (you'll need a paid Apple Developer account)

### Step 3: Apple Developer Account Setup
If you don't have one yet:
1. Go to [developer.apple.com](https://developer.apple.com)
2. Sign up for Apple Developer Program ($99/year)
3. Wait for approval (usually 24-48 hours)

### Step 4: App Store Connect Setup
1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
2. Sign in with your Apple Developer account
3. Click "My Apps" → "+" → "New App"
4. Fill in app information:
   - **Name**: Islamic Learning Companion
   - **Bundle ID**: com.nextelevenstudios.islamiclearningcompanion
   - **SKU**: islamic-learning-companion-001
   - **Primary Language**: English

### Step 5: App Store Information
Fill out these required fields in App Store Connect:

#### App Information
- **App Name**: Islamic Learning Companion
- **Subtitle**: Learn Islam with Authentic Sources
- **Category**: Education
- **Content Rights**: No (if you own all content)
- **Age Rating**: 4+ (suitable for all ages)

#### App Description
```
Discover the beauty of Islamic teachings through our comprehensive learning platform. Whether you're a new Muslim or looking to deepen your understanding, we're here to support your spiritual growth.

Features:
• Complete Quran Reader with authentic translations
• Hadith search and study tools
• Daily Islamic companion with prayers and duas
• Beautiful Arabic text with transliterations
• Mobile-optimized for learning on the go

Built with authentic sources and verified by qualified scholars. Your journey in Islamic knowledge starts here.
```

#### Keywords
```
islam, quran, hadith, muslim, prayer, dua, arabic, learning, education, religion, spirituality, islamic studies
```

#### Support URL
```
https://nextelevenstudios.com/support
```

#### Marketing URL (optional)
```
https://nextelevenstudios.com/islamic-app
```

### Step 6: Build and Upload
1. **In Xcode, select "Any iOS Device" as the destination**
2. **Product → Archive** (this creates a build for the App Store)
3. **Once archived, click "Distribute App"**
4. **Select "App Store Connect"**
5. **Follow the upload wizard**

### Step 7: App Review Information
In App Store Connect, provide:

#### Review Information
- **Contact Information**: Your contact details
- **Demo Account**: Not required for this app
- **Notes**: 
  ```
  This is an educational Islamic app that displays Quranic text, hadiths, and daily Islamic content. All content is sourced from authentic Islamic texts. The app uses a WebView to display HTML content with CSS styling.
  ```

#### App Review Guidelines Compliance
- ✅ **1.1 Safety**: App is safe and doesn't harm users
- ✅ **1.2 User Generated Content**: No user-generated content
- ✅ **2.1 Performance**: App performs well and doesn't crash
- ✅ **2.5 Software Requirements**: Compatible with iOS 13.0+
- ✅ **3.1 Payments**: No in-app purchases (if you add donations later, you'll need to configure this)
- ✅ **4.0 Spam**: Original content, not spam
- ✅ **5.1 Privacy**: No personal data collection

### Step 8: Submit for Review
1. **Complete all required information** in App Store Connect
2. **Add app screenshots** (required sizes):
   - iPhone 6.7" (1290 x 2796 pixels)
   - iPhone 6.5" (1242 x 2688 pixels)
   - iPhone 5.5" (1242 x 2208 pixels)
   - iPad Pro 12.9" (2048 x 2732 pixels)
3. **Click "Submit for Review"**

## 📱 Testing Your App

### Test on Device
1. **Connect your iPhone/iPad** to your Mac
2. **Select your device** in Xcode
3. **Click the Play button** to build and run
4. **Test all features** to ensure they work properly

### TestFlight (Optional)
1. **Upload a build** to App Store Connect
2. **Add internal testers** (yourself and team members)
3. **Test the app** before submitting for review

## 🔧 Troubleshooting Common Issues

### Build Errors
- **Code Signing Issues**: Make sure you have a valid Apple Developer account
- **Bundle ID Conflicts**: Ensure the bundle ID is unique and matches App Store Connect
- **Missing Icons**: Verify all app icons are properly referenced in Contents.json

### App Store Rejection
- **Guideline 2.1**: App crashes or doesn't work properly
  - Test thoroughly on multiple devices
- **Guideline 4.0**: Spam or misleading content
  - Ensure all content is original and accurate
- **Guideline 5.1**: Privacy policy required
  - Add a privacy policy if you collect any user data

## 📋 Pre-Submission Checklist

- [ ] App builds successfully in Xcode
- [ ] App runs on physical device without crashes
- [ ] All app icons are properly configured
- [ ] Bundle identifier is unique and matches App Store Connect
- [ ] App Store Connect listing is complete
- [ ] Screenshots are uploaded
- [ ] App description and metadata are filled out
- [ ] Age rating is appropriate
- [ ] Privacy policy is added (if needed)
- [ ] App is tested on multiple devices

## 🎯 Success Tips

1. **Test Thoroughly**: Test your app on multiple devices and iOS versions
2. **Follow Guidelines**: Read Apple's App Store Review Guidelines carefully
3. **Be Patient**: App review can take 24-48 hours
4. **Respond Quickly**: If Apple requests changes, respond promptly
5. **Keep Updated**: Update your app regularly with new features and bug fixes

## 📞 Support

If you encounter any issues:
- **Apple Developer Support**: [developer.apple.com/support](https://developer.apple.com/support)
- **App Store Connect Help**: Available in App Store Connect
- **Xcode Documentation**: Available in Xcode Help menu

---

**May Allah bless your efforts in creating this beneficial app for the Ummah! 🤲**

*Remember: This is a Sadaqah Jariyah (ongoing charity) - every person who benefits from your app will bring you rewards, Insha'Allah.*
