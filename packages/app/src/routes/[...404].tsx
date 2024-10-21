import { A } from "@solidjs/router";
import { Button } from "~/components/button";

export default function NotFound() {
  return (
        <main class="flex flex-col items-center justify-center mt-6">
            <div class="text-3xl font-light text-muted-foreground">404</div>
            <h1 class="font-semibold text-lg my-2">Cette page n'existe pas</h1>
            <p class="text-muted-foreground">La page que vous cherchez n'existe pas.</p>
            <p class="text-muted-foreground">Vérifiez l'URL ou retournez à la page d'accueil.</p>
            <Button as={A} href="/" class="mt-4" variant="secondary">
              <div class="i-tabler-arrow-left mr-2"></div>
              Retour à l'accueil
            </Button>
          </main>
  );
}
