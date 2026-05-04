import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Figtree } from 'next/font/google'
import FreeAuditModalProvider from '@/components/free-audit/FreeAuditModalProvider'
import { ThemeProvider } from '@/lib/ThemeContext'
import PremiumAuditModalProvider from '@/components/premium-audit/PremiumAuditModalProvider'
import './globals.css'
import 'react-phone-number-input/style.css'
import Script from 'next/script'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Launchieve — Real Feedback for Your Prototype',
  description: 'We help founders turn AI-generated ideas and prototypes into real, working products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${figtree.variable} dark`}>
      <body className="font-body" cz-shortcut-listen="true">
        <Script
          id='meta-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `
          }}
        />
        <Script
          id='reddit-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              !function(w,d){
                if(!w.rdt){
                  var p=w.rdt=function(){
                    p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)
                  };
                  p.callQueue=[];
                  var t=d.createElement('script');
                  t.src='https://www.redditstatic.com/ads/pixel.js?pixel_id=${process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID}';
                  t.async=!0;
                  var s=d.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(t,s)
                }
              }(window,document);
              rdt('init','${process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID}');
              rdt('track', 'PageVisit');
            `
          }}
        />

        <ThemeProvider>
          <FreeAuditModalProvider>
            <PremiumAuditModalProvider>
              {children}
            </PremiumAuditModalProvider>
          </FreeAuditModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
