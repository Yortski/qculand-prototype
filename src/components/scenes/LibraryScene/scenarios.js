export const libraryScenarios = [
  {
    id: "librarianPhishing",
    title: "Librarian Email",
    text: "You receive an email from 'librarian@qcu-library.com' asking for your login details 'to renew access.' What do you do?",
    choices: [
      { text: "Verify with the real librarian in person", feedback: "Smart move! Always verify suspicious requests through official channels." },
      { text: "Reply with your login details", feedback: "Dangerous — this is a classic phishing setup. Never share credentials via email." },
      { text: "Click the link to 'verify' quickly", feedback: "Risky — that link could steal your information. Always verify first." },
    ],
  },
  {
    id: "textbookWebsites",
    title: "Textbook Choice",
    text: "Two websites offer the same textbook for download. One has 'qcu-library-books.com' and the other 'qculibrary.edu.ph'. Which is legitimate?",
    choices: [
      { text: "Check the official library website first", feedback: "Excellent — always verify through official sources before downloading." },
      { text: "Use the one with better design", feedback: "Not safe — fake sites often look professional. Check the domain instead." },
      { text: "Download from both to compare", feedback: "Dangerous — one could contain malware. Verify legitimacy first." },
    ],
  },
  {
    id: "catalogEncryption",
    title: "Encrypted Catalog",
    text: "The digital catalog suddenly encrypts and displays: 'Pay 500 pesos to restore access.' What's your response?",
    choices: [
      { text: "Report to IT and don't pay", feedback: "Smart! This is ransomware. Never pay attackers—report immediately." },
      { text: "Pay to restore access quickly", feedback: "Bad idea — paying encourages attackers and doesn't guarantee restoration." },
      { text: "Try to decrypt it yourself", feedback: "Risky without expertise. Report to professionals instead." },
    ],
  },
  {
    id: "academicUpdate",
    title: "Urgent Academic Update",
    text: "A pop-up appears: 'URGENT: Your academic records need verification. Click here NOW or risk suspension!'",
    choices: [
      { text: "Ignore and check official university portal", feedback: "Great! Urgent language is a red flag. Always use official channels." },
      { text: "Click immediately to avoid trouble", feedback: "That's what they want! Urgency is a common phishing tactic." },
      { text: "Forward to classmates to warn them", feedback: "Well-intentioned, but could spread the phishing link. Report to IT instead." },
    ],
  },
  {
    id: "ebookAttachment",
    title: "Suspicious E-Book",
    text: "An email offers a 'free premium e-book' with a .exe attachment. The subject line promises 'exclusive research materials.'",
    choices: [
      { text: "Delete immediately without opening", feedback: "Excellent! .exe files in emails are major red flags for malware." },
      { text: "Scan with antivirus first", feedback: "Cautious, but still risky. Better to avoid suspicious .exe files entirely." },
      { text: "Open it—it's just a book", feedback: "Very dangerous! .exe files can install malware. E-books use .pdf or .epub formats." },
    ],
  },
  {
    id: "mismatchedURL",
    title: "Research Link",
    text: "A research article link shows 'qcu-research.com' but hovering reveals 'qc-u-reserch.net' in the status bar.",
    choices: [
      { text: "Don't click—the URL doesn't match", feedback: "Perfect! Mismatched URLs are clear phishing indicators. Trust your eyes." },
      { text: "Click anyway—probably just a redirect", feedback: "Risky! Mismatched URLs often lead to malicious sites stealing data." },
      { text: "Copy and paste into browser", feedback: "Still dangerous—the fake URL remains the same. Verify through official sources." },
    ],
  },
];
