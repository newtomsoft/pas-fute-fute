import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import './app.css';

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Suspense>
            {' '}
            <div class="min-h-screen font-sans text-sm font-400">{props.children}</div>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
