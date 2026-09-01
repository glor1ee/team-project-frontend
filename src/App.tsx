import { Card, Container, Stack, Text, Title } from '@mantine/core';

import { BackendStatus } from './components/BackendStatus';

function App() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1}>Hello world!</Title>

        <Text c="dimmed">
          Frontend of the Team Project — React + Vite + TypeScript, styled with Mantine.
        </Text>

        <Card withBorder padding="lg">
          <Stack gap="sm">
            <Title order={3} size="h5">
              Sanity check
            </Title>
            <BackendStatus />
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

export default App;
