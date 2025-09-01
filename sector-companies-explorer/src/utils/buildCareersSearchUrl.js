// Heuristic URL builder to deep-link provider careers pages to a keyword search
// Supports common ATS providers; falls back to Google site search.

// options: string or { query, location, levels: string[], sortBy }
export function buildCareersSearchUrl(careersUrl, options) {
  let query = typeof options === 'string' ? options : options?.query;
  const location = typeof options === 'object' ? options?.location : undefined;
  const levels = typeof options === 'object' ? options?.levels : undefined; // e.g. ['EARLY','MID']
  const sortBy = typeof options === 'object' ? options?.sortBy : undefined; // e.g. 'date'

  if (!careersUrl || !query) return careersUrl || '';

  let url; let host = '';
  try {
    url = new URL(careersUrl);
    host = url.hostname || '';
  } catch {
    // If URL parsing fails, fall back to Google search against raw string
    const q = encodeURIComponent(query);
    return `https://www.google.com/search?q=${q}+${encodeURIComponent(careersUrl)}`;
  }

  const setAndReturn = (param, value = query) => {
    const u = new URL(url);
    u.searchParams.set(param, value);
    return u.toString();
  };

  const lowerHost = host.toLowerCase();
  const path = (url.pathname || '').toLowerCase();

  // Google Careers deep link (example: /about/careers/applications/jobs/results)
  if ((lowerHost.endsWith('google.com') && path.includes('/about/careers')) || lowerHost.includes('careers.google.com')) {
    const u = new URL(url);
    const exactQ = `"${query}"`;
    u.searchParams.set('q', exactQ);
    if (location) u.searchParams.set('location', location);
    if (Array.isArray(levels)) {
      // ensure multiple target_level params
      u.search = '';
      u.searchParams.set('q', exactQ);
      if (location) u.searchParams.set('location', location);
      for (const lvl of levels) u.searchParams.append('target_level', lvl);
    }
    if (sortBy) u.searchParams.set('sort_by', sortBy);
    return u.toString();
  }

  // Provider-specific mappings
  if (lowerHost.includes('lever.co')) {
    return setAndReturn('search');
  }
  if (lowerHost.includes('myworkdayjobs.com')) {
    return setAndReturn('q');
  }
  if (lowerHost.includes('smartrecruiters.com')) {
    return setAndReturn('search');
  }
  if (lowerHost.includes('teamtailor.com')) {
    return setAndReturn('query');
  }
  if (lowerHost.includes('icims.com')) {
    const u = new URL(url);
    u.searchParams.set('s', '1');
    u.searchParams.set('searchKeyword', query);
    return u.toString();
  }
  if (lowerHost.includes('ashbyhq.com')) {
    return setAndReturn('q');
  }
  if (lowerHost.includes('workable.com')) {
    return setAndReturn('query');
  }
  if (lowerHost.includes('bamboohr.com')) {
    return setAndReturn('search');
  }
  if (lowerHost.includes('greenhouse.io') || lowerHost.includes('boards.greenhouse.io')) {
    // Greenhouse doesn't expose a reliable search param; use Google site search
    const q = encodeURIComponent(query);
    return `https://www.google.com/search?q=site:${encodeURIComponent(host)}+${q}`;
  }

  // Generic attempts: try common param names
  for (const p of ['q', 'search', 'query', 'keyword']) {
    try {
      const u = new URL(url);
      u.searchParams.set(p, query);
      return u.toString();
    } catch { /* continue */ }
  }

  // Last resort: Google site search
  const q = encodeURIComponent(query);
  return `https://www.google.com/search?q=site:${encodeURIComponent(host)}+${q}`;
}
