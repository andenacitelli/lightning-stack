import { z } from "zod";

const ConfigSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  faviconPath: z.string().min(1).includes("/"),
  analytics: z.object({
    google: z.object({
      trackingId: z.string().min(1).startsWith("GA-"),
    }),
  }),
});

const config: z.infer<typeof ConfigSchema> = {
  title: "Lightning Stack App",
  description: "Lightning Stack Description",
  faviconPath: "/favicon.ico",
  analytics: {
    google: {
      trackingId: "GA-123456789",
    },
  },
};

export const CONFIG = ConfigSchema.parse(config);
