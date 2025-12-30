import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import AppThemeProvider from "@/src/components/ThemeProvider";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clover-tech.jp"),
  title:
    "クローバー合同会社 | 業務アプリ受託開発・営業データセット・AI営業（自動架電）",
  description:
    "クローバー合同会社（Clover Tech）は、業務アプリの受託開発から、約600万件規模の法人DBを基にした営業データセット作成、AIによる自動架電（テレアポ）での販売開始支援まで一気通貫で提供します。",
  keywords: [
    "受託開発",
    "業務アプリ",
    "管理画面",
    "CRM",
    "データ可視化",
    "営業データセット",
    "法人DB",
    "AI営業",
    "自動架電",
    "テレアポ",
    "営業代行",
    "SaaS開発",
    "スタートアップ",
    "MVP開発",
    "PoC開発",
    "プロトタイプ開発",
    "アルファ版開発",
    "ベータ版開発",
    "0→1開発",
    "オフショア開発",
    "開発外注",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Clover Tech",
    locale: "ja_JP",
    title: "クローバー合同会社 | 開発→データ→AI営業",
    description:
      "業務アプリ開発×営業データセット×AI自動架電で、販売開始までの最短ルートを作る。",
  },
  twitter: {
    card: "summary",
    title: "クローバー合同会社 | 開発→データ→AI営業",
    description:
      "業務アプリ開発×営業データセット×AI自動架電で、販売開始までを支援。",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AppThemeProvider>
          <Header />
          {children}
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}
