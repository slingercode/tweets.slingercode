import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "tweets - slingercode",
  viewport: "width=device-width,initial-scale=1",
  description: "A personal collection of favorites tweets.",
});

const Document: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <main>{children}</main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <div>
        <h1>Caught</h1>
        <p>{JSON.stringify(caught)}</p>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div>
        <h1>Error</h1>
        <p>{JSON.stringify(error)}</p>
      </div>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
