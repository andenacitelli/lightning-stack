import { type AppType } from "next/app";

import { api } from "@/utils/api";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";
import { dark } from "@clerk/themes";
import { MANTINE_THEME } from "@/config";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode, useMemo } from "react";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={MANTINE_THEME}>
      <ClerkProviderWithTheme>
        <Component {...pageProps} />
      </ClerkProviderWithTheme>
    </MantineProvider>
  );
};

const ClerkProviderWithTheme = ({ children }: { children: ReactNode }) => {
  const { colorScheme } = useMantineColorScheme();
  const clerkAppearance = useMemo(() => {
    return { baseTheme: colorScheme === "dark" ? dark : undefined };
  }, [colorScheme]);
  return <ClerkProvider appearance={clerkAppearance}>{children}</ClerkProvider>;
};

export default api.withTRPC(MyApp);
