import { z } from "zod";
import { IconBolt } from "@tabler/icons-react";
import { createTheme } from "@mantine/core";

const ConfigSchema = z.object({
  // TODO: Fill in your specific details here.
  title: z.string().min(1),
  description: z.string().min(1),
});

export const MANTINE_THEME = createTheme({
  // TODO: Fill in your theme here. This will be merged automatically with Mantine's overall theme (see: https://mantine.dev/theming/theme-object/)
});

export const Logo = ({ size }: { size: number }) => {
  // TODO: Update this to whichever icon from tabler-icons (https://tabler-icons.io/) you want to use as your logo, or switch it to a Mantine <Image /> tag if you want to use something custom.
  return <IconBolt size={size} />;
};
