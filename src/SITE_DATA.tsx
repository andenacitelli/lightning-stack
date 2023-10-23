import { z } from "zod";
import { IconBolt, IconHome } from "@tabler/icons-react";
import { createTheme } from "@mantine/core";
import { type NavbarLinkInfo } from "@/_components/shell";

const ConfigSchema = z.object({
  // TODO: Fill in your specific details here.
  title: z.string().min(1),
  description: z.string().min(1),
  faviconUrl: z.string().includes("/"),
});

const config: z.infer<typeof ConfigSchema> = {
  title: "Lightning Stack Title",
  description: "Lightning Stack Description",
  faviconUrl: "/favicon.ico",
};

export const SITE_DATA = ConfigSchema.parse(config);

export const MANTINE_THEME = createTheme({
  // TODO: Fill in your theme here. This will be merged automatically with Mantine's overall theme (see: https://mantine.dev/theming/theme-object/)
});

export const Logo = ({ size }: { size: number }) => {
  // TODO: Update this to whichever icon from tabler-icons (https://tabler-icons.io/) you want to use as your logo, or switch it to a Mantine <Image /> tag if you want to use something custom.
  return <IconBolt size={size} />;
};

export const NAVBAR_LINKS: NavbarLinkInfo[] = [
  {
    label: "Home",
    color: "blue",
    icon: <IconHome />,
    url: "/app",
  },
];
