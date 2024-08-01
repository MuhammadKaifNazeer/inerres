import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Inerres - Interior Modern Furniture",
  description:
    "Inerres - Interior Modern Furniture - Created by Muhammad Kaif Nazeer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      style={{
        scrollPadding: `5rem`,
      }}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
