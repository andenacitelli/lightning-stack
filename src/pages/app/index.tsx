import { Group, Title } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useUser } from "@clerk/nextjs";
import { useMemo } from "react";

const View = () => {
  const { user } = useUser();
  const welcomeText = useMemo(() => {
    if (!user) return "Welcome back!";
    return `Welcome back, ${user.firstName}!`;
  }, [user]);
  return (
    <Group>
      <IconHome />
      <Title order={4}>{welcomeText}</Title>
    </Group>
  );
};

export default View;
