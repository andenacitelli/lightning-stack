import {z} from "zod";
import {createTheme} from "@mantine/core";

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