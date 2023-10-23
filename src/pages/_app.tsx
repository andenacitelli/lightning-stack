import { type AppType } from "next/app";

import { api } from "@/utils/api";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { type ReactNode, useMemo } from "react";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { PrivateShell } from "@/_components/private-shell";
import { MANTINE_THEME } from "@/config/common";
import { PublicShell } from "@/_components/public-shell";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={MANTINE_THEME}>
      <ClerkProviderWithTheme>
        <PrivateShell>
          <PublicShell>
            <Component {...pageProps} />
          </PublicShell>
        </PrivateShell>
      </ClerkProviderWithTheme>
    </MantineProvider>
  );
};

const ClerkProviderWithTheme = ({ children }: { children: ReactNode }) => {
  // Decoupled into separate component so that <MantineProvider /> is a parent and we can use Mantine hooks
  const { colorScheme } = useMantineColorScheme();
  const clerkAppearance = useMemo(() => {
    return { baseTheme: colorScheme === "dark" ? dark : undefined };
  }, [colorScheme]);
  return <ClerkProvider appearance={clerkAppearance}>{children}</ClerkProvider>;
};

export default api.withTRPC(MyApp);
