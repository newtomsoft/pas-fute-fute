import { buildUrl } from '@corentinth/chisels';
import { createResource, Suspense } from 'solid-js';
import { Button } from '~/components/button';
import { Card, CardHeader } from '~/components/card';
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
    <main class="flex flex-col items-center justify-center">

      <Card class="text-center text-lg w-full md:w-800px">
        <CardHeader>
          <Suspense fallback="&nbsp;">
            {quote()}
          </Suspense>
        </CardHeader>
      </Card>

      <Button onClick={refreshQuote} class="mt-4">
        <div class="i-tabler-refresh mr-2" />
        Une autre citation aléatoire
      </Button>
    </main>
  );
}
