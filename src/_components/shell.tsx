import {
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Switch,
  Text,
  ThemeIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { NAVBAR_LINKS } from "@/SITE_DATA";
import { type ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "@/SITE_DATA";
import { UserButton } from "@clerk/nextjs";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useRouter } from "next/router";

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
      X
    </Anchor>
  );
};

export const Shell = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  if (!router.route.startsWith("/app")) return <>{children}</>; // only shell on `/app/**/*`
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
          </Group>
          <Group h="100%" px="md">
            <UserButton />
            <Switch
              size={"lg"}
              checked={colorScheme === "dark"}
              onChange={toggleColorScheme}
              offLabel={<IconMoon />}
              onLabel={<IconSun />}
            ></Switch>
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
