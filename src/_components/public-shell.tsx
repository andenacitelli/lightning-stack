/**
 * Fairly minimalistic shell only shown on public pages (anything not prefixed with /app)
 */

import {
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Text,
} from "@mantine/core";
import { type ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Logo } from "@/config/client";
import { SITE_DATA } from "@/config/common";

export const PublicShell = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  if (router.route.startsWith("/app")) return children; // this shell is only on public pages
  return (
    <AppShell header={{ height: { base: 60, md: 70 } }} padding="md">
      <AppShell.Header withBorder={false} px={"lg"}>
        <Group h={"100%"} justify={"space-between"}>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Logo size={30} />
            <Text>{SITE_DATA.title}</Text>
          </Group>
          <Group h="100%" px="md">
            <Anchor href={"/pricing"} c={"white"}>
              Pricing
            </Anchor>
            <Anchor href={"/features"} c={"white"}>
              Features
            </Anchor>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};
