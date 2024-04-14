import "./globals.css";

export const metadata = {
  title: "Inerres - Interior Modern Furniture",
  description: "Inerres - Interior Modern Furniture - Created by Muhammad Kaif Nazeer",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body >{children}</body>
    </html>
  );
}
