# What is React Native?
React Native is a framework for building mobile applications. It allows developers to use the same codebase (the core logic of the app) to create apps for different platforms, like iOS and Android, without having to write separate code for each platform from scratch.

# Setting up the development environment.
  1. Expo Go Quickstart
  2. React Native CLI Quickatart


## Expo Go Quickstart

```
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start
```
 If you want to continue with `yarn`  replace  `npx`  with  `yarn`.

## React Native CLI Quickatart

### Node, JDK
We recommend installing Node via `Chocolatey`, a popular package manager for Windows.

It is recommended to use an LTS version of `Node`. If you want to be able to switch between different versions, you might want to install Node via nvm-windows, a Node version manager for Windows.

React Native also requires `Java SE Development Kit (JDK)`, which can be installed using `Chocolatey` as well.

Open an Administrator Command Prompt `(right click Command Prompt and select "Run as Administrator")`, then run the following command:

```
choco install -y nodejs-lts microsoft-openjdk11
```
## Install Android Studio
Download and install `Android Studio`. While on `Android Studio` installation wizard, make sure the boxes next to all of the following items are checked:

1. Android SDK
2. Android SDK Platform
3. Android Virtual Device
If you are not already using `Hyper-V: Performance (Intel ® HAXM)`(See here Hyper-V)
Then, click "Next" to install all of these components.

## Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 13 (Tiramisu)` SDK in particular. 
Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 13 (Tiramisu)` entry, then make sure the following items are checked:

1. Android SDK Platform 33
2. Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
3. Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.

Finally, click `"Apply"` to download and install the Android SDK and related build tools.

## Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

1. Open the `Windows Control Panel`.
2. Click on `User Accounts`, then click `User Accounts` again.
3. Click on `Change my environment variables`.
4. Click on `New...` to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK:
The SDK is installed, by default, at the following location:
```
%LOCALAPPDATA%\Android\Sdk
```
Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

1. Open powershell
2. Copy and paste `Get-ChildItem -Path Env:\` into powershell
3. Verify `ANDROID_HOME` has been added1

## Add platform-tools to Path
1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again
3. Click on Change my environment variables
4. Select the Path variable.
5. Click Edit.
6. Click New and add the path to platform-tools to the list.
The default location for this folder is:
```
%LOCALAPPDATA%\Android\Sdk\platform-tools
```
## Creating a new application
```
npx react-native@latest init AwesomeProject
```
`AwesomeProject` is project name you can name anything.

## Congratulations

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
