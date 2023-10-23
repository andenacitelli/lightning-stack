import { NavbarLinkInfo } from "@/_components/private-shell";
import { IconBolt, IconHeartHandshake, IconHome } from "@tabler/icons-react";
import { FeatureData } from "@/pages";

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

export const HOMEPAGE_FEATURES: FeatureData[] = [
  {
    icon: <IconBolt size={32} />,
    title: "Reason 1",
    description: "Description 1",
  },
  {
    icon: <IconHeartHandshake size={32} />,
    title: "Reason 2",
    description: "Description 2",
  },
  {
    icon: <IconBolt size={32} />,
    title: "Reason 3",
    description: "Description 3",
  },
];
