import { buildUrl } from '@corentinth/chisels';
import { createResource } from 'solid-js';
import { Button } from '~/components/button';
import { config } from '~/libs/config';

export default function Home() {
  const [quote, { refetch: refreshQuote }] = createResource(async () => {
    const url = buildUrl({
      baseUrl: config.baseUrl,
      path: '/api/quotes/random',
    });

    const response = await fetch(url);
    return (await response.json()).quote as string;
  });

  return (
    <main class="flex flex-col items-center justify-center mt-6">
      <div>{quote()}</div>
      <Button onClick={refreshQuote} class="mt-4" variant="secondary">
        <div class="i-tabler-refresh mr-2" />
        Refresh
      </Button>
    </main>
  );
}
