import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Burns & Wilcox MENA site',
};

const graphikFont = localFont({
  src: [
    {
      path: '../../public/font/graphik/GraphikThin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikExtraLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikRegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikLight.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikSemibold.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikBlack.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikBlackItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/font/graphik/GraphikSuper.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/graphik/GraphikSuperItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graphikFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
