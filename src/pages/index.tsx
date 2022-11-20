import { greeting } from '~/utils/greeting';

export default function HomePage() {
  return (
    <div>
      <h1>{greeting()}</h1>
      <h2>Next.js starter</h2>
    </div>
  );
}
