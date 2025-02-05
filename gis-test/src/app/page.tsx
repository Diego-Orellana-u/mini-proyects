import OpenLayersMap from "./components/map";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">OpenLayers with Next.js</h1>
      <OpenLayersMap />
    </main>
  );
}
