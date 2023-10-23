/**
 * More thorough shell shown on all private / authenticated pages (i.e. anything prefixed with /app)
 */

import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Text,
  ThemeIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { type ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { Logo, NAVBAR_LINKS } from "@/config/client";
import { SITE_DATA } from "@/config/common";

import cx from "clsx";
import classes from "./private-shell.module.css";

import { IconMoon, IconSun } from "@tabler/icons-react";

export type NavbarLinkInfo = {
  label: string;
  color: string;
  icon: ReactNode;
  url: string;
};

const NavbarLink = ({ label, color, icon, url }: NavbarLinkInfo) => {
  return (
    <Anchor href={url}>
      <Group>
        <ThemeIcon variant={"light"} color={color}>
          {icon}
        </ThemeIcon>
        <Text>{label}</Text>
      </Group>
    </Anchor>
  );
};

export const PrivateShell = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  if (!router.route.startsWith("/app")) return children; // only shell on `/app/**/*`
  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
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
            <UserButton afterSignOutUrl="/" />
            <ActionIcon
              size={"lg"}
              onClick={toggleColorScheme}
              variant={"light"}
            >
              <IconMoon className={cx(classes.icon, classes.dark)} />
              <IconSun className={cx(classes.icon, classes.light)} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {NAVBAR_LINKS.map((link) => (
          <NavbarLink
            key={link.label}
            label={link.label}
            color={link.color}
            icon={link.icon}
            url={link.url}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};
