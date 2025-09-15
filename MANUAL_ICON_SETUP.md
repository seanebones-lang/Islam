# Manual Icon Setup (Alternative Method)

## Step 1: Add CFBundleIcons to Info.plist

Add this to your Info.plist after CFBundleIconName:

```xml
<key>CFBundleIcons</key>
<dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>AppIcon-120</string>
            <string>AppIcon-152</string>
            <string>AppIcon-167</string>
        </array>
        <key>UIPrerenderedIcon</key>
        <false/>
    </dict>
</dict>
```

## Step 2: Add Icon Files to Project

1. Drag your icon files into Xcode project
2. Make sure they're added to the app target
3. Ensure filenames match exactly:
   - AppIcon-120.png (120x120 pixels)
   - AppIcon-152.png (152x152 pixels) 
   - AppIcon-167.png (167x167 pixels)

## Step 3: Verify in Xcode

1. Select your project in Xcode
2. Go to Build Settings
3. Search for "App Icon"
4. Make sure "App Icon Source" is set correctly
