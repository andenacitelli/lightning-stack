import { headers } from "next/headers";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { TRPCReactProvider } from "@/trpc/react";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { CONFIG } from "@/config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{CONFIG.title}</title>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
