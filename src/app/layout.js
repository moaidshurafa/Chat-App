import "./globals.css"; 

export const metadata = {
  title: "Chat App",
  description: "My chat app with Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
