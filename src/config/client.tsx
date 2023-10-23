import {NavbarLinkInfo} from "@/_components/shell";
import {IconBolt, IconHome} from "@tabler/icons-react";

export const Logo = ({size}: { size: number }) => {
    // TODO: Update this to whichever icon from tabler-icons (https://tabler-icons.io/) you want to use as your logo, or switch it to a Mantine <Image /> tag if you want to use something custom.
    return <IconBolt size={size}/>;
};
export const NAVBAR_LINKS: NavbarLinkInfo[] = [
    {
        label: "Home",
        color: "blue",
        icon: <IconHome/>,
        url: "/app",
    },
];