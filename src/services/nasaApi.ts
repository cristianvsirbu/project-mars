const makeNasaRequest = async (endpoint: string, params: Record<string, string> = {}) => {
  try {
    const url = new URL('/api/nasa-proxy', window.location.origin);
    url.searchParams.append('endpoint', endpoint);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      let errorData: any = {};
      try {
        errorData = await response.json();
      } catch (jsonError) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to parse error response JSON:', jsonError);
        }
        errorData = { error: `Request failed: ${response.status} (and error response could not be parsed)` };
      }
      throw new Error(errorData.error || `Request failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        'NASA API request failed:',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
    throw error;
  }
};

export const getNasaManifest = (rover: string) =>
  makeNasaRequest(`/mars-photos/api/v1/manifests/${rover}`);

export const getRoverPhotos = (rover: string, date: string) =>
  makeNasaRequest(`/mars-photos/api/v1/rovers/${rover}/photos`, { earth_date: date });
