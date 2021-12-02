import { useState } from 'react';

export default function Compendium() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <div></div>;
}
