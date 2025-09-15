#!/bin/bash

# Islamic Learning Companion - iOS App Setup Script
# This script helps you get your app ready for the Apple Store

echo "🕌 Islamic Learning Companion - iOS App Setup"
echo "=============================================="
echo ""

# Check if Xcode is installed
if ! command -v xcodebuild &> /dev/null; then
    echo "❌ Xcode is not installed. Please install Xcode from the Mac App Store first."
    exit 1
fi

echo "✅ Xcode is installed"

# Check if we're in the right directory
if [ ! -f "IslamicApp.xcodeproj/project.pbxproj" ]; then
    echo "❌ Please run this script from the IslamicApp directory"
    echo "   cd '/Users/seanmcdonnell/Desktop/Islamic App/IslamicApp'"
    exit 1
fi

echo "✅ Found Xcode project"

# Open Xcode project
echo "🚀 Opening Xcode project..."
open IslamicApp.xcodeproj

echo ""
echo "📋 Next Steps:"
echo "1. In Xcode, select your project in the navigator"
echo "2. Select the 'IslamicApp' target"
echo "3. Go to 'Signing & Capabilities' tab"
echo "4. Check 'Automatically manage signing'"
echo "5. Select your Apple Developer Team"
echo "6. Build and run on a device to test"
echo ""
echo "📖 For complete setup instructions, see: APPLE_STORE_SETUP_GUIDE.md"
echo ""
echo "🤲 May Allah bless your efforts in creating this beneficial app!"