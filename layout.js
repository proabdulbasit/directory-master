// app/layout.js

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Next.js App</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
