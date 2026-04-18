export async function getSuggestions(query: string) {
  const res = await fetch(`/api/movies/suggestions?q=${encodeURIComponent(query)}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to fetch suggestions');
  }
  return res.json();
}