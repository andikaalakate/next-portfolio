import "./globals.css";

export const metadata = {
  title: "Portfolio - Andika Alakate",
  description: "Dibuat menggunakan NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Fira+Mono:wght@400;500;700&family=Fira+Sans:wght@400;600;700&family=Poppins:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/img/andika-alakate-3.webp"
        />
        <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
      </head>
      <body className="font-poppins scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-10">
        {children}
      </body>
    </html>
  );
}
