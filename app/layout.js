import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Self Learning Portal",
  description:
    "Learn your favourite tools, techniques and upgrade your skills in your own pace.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jost.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
