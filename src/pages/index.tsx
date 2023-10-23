import Head from "next/head";
import { SITE_DATA } from "@/config/common";
import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { HOMEPAGE_FEATURES, Logo } from "@/config/client";
import { ReactNode } from "react";

export type FeatureData = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureData) => {
  return (
    <Card withBorder>
      <Group>
        {icon}
        <Box style={{ width: "calc(100% - 75px)" }}>
          <Title order={3}>{title}</Title>
          <Text>{description}</Text>
        </Box>
      </Group>
    </Card>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_DATA.title}</title>
        <meta name="description" content={SITE_DATA.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container pt={"20vh"}>
          <Stack gap={"xl"}>
            <Group>
              <Logo size={64} />
              <Box>
                <Title order={1}>{SITE_DATA.title}</Title>
                <Text>{SITE_DATA.description}</Text>
              </Box>
            </Group>
            <SimpleGrid cols={2}>
              {HOMEPAGE_FEATURES.map((feature) => {
                return (
                  <Feature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                );
              })}
            </SimpleGrid>
          </Stack>
        </Container>
      </main>
    </>
  );
}
