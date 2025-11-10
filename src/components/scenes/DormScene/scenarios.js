export const dormScenarios = [
  {
    id: "deviceSetup",
    title: "Device Setup",
    text: "You’ve just unpacked your laptop. Time to make it secure before classes begin.",
    choices: [
      { text: "Select secure Wi-Fi", feedback: "Great! WPA2 keeps you protected from intruders." },
      { text: "Use default Wi-Fi settings", feedback: "Not ideal — default credentials are easily guessable." },
      { text: "Skip setup for now", feedback: "Dangerous — you’re leaving your device exposed." },
    ],
  },
  {
    id: "wifiDilemma",
    title: "Wi-Fi Dilemma",
    text: "You’re configuring your dorm router. Choose the correct settings to secure your network.",
    choices: [
      { text: "Enable WPA2 encryption", feedback: "Excellent — this keeps your connection private." },
      { text: "Leave SSID visible", feedback: "Okay, but it’s safer to hide your network name." },
      { text: "Use open network", feedback: "Risky — anyone can connect and snoop on your data." },
    ],
  },
  {
    id: "usbGift",
    title: "USB Gift",
    text: 'A classmate gives you a USB labeled “exam notes.” What do you do?',
    choices: [
      { text: "Scan it first with antivirus", feedback: "Smart move! Always scan unknown drives." },
      { text: "Plug it in immediately", feedback: "Oof! That could be a malware trap." },
      { text: "Politely reject it", feedback: "Safe and cautious — well done!" },
    ],
  },
  {
    id: "roommateShortcut",
    title: "Roommate’s Shortcut",
    text: "Your roommate grabs your laptop to ‘borrow’ notes while you’re away. What’s your response?",
    choices: [
      { text: "Lock screen before leaving", feedback: "Excellent — protects your files and identity." },
      { text: "Leave it unlocked", feedback: "Bad idea — anyone could access your private data." },
      { text: "Hide it under the bed", feedback: "Creative, but not secure!" },
    ],
  },
  {
    id: "postOrPrivate",
    title: "Post or Private?",
    text: "You’re about to post your class schedule online. What do you do?",
    choices: [
      { text: "Share only with close friends", feedback: "Smart! Limit who can see your posts." },
      { text: "Post publicly on social media", feedback: "Risky — strangers could learn your routine." },
      { text: "Add your room number too", feedback: "That’s oversharing — a privacy red flag." },
    ],
  },
  {
    id: "phishingSearch",
    title: "Phishing Search",
    text: "You receive an email saying: ‘Your account will be locked, click here to verify.’",
    choices: [
      { text: "Inspect sender and link", feedback: "Nice catch! Always check for suspicious details." },
      { text: "Click link immediately", feedback: "That’s a classic phishing trap." },
      { text: "Ignore and delete", feedback: "Good — if it looks sketchy, trash it safely." },
    ],
  },
];
