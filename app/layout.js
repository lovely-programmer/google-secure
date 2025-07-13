import { Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const notoSansMyanmar = Noto_Sans_Myanmar({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["myanmar"],
});

export const metadata = {
  title: "Secure your Google Account",
  description: "Secure your Google Account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={notoSansMyanmar.className}>{children}</body>
    </html>
  );
}
