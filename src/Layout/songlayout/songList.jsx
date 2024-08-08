export default function SongList() {
const token = localStorage.getItem("spotifyToken")
  const moodToMusicMapping = {
    happy: {
      genres: ['pop', 'dance'],
      audioFeatures: { valence: 0.8, energy: 0.7 },
    },
    sad: {
      genres: ['acoustic', 'soft rock'],
      audioFeatures: { valence: 0.3, energy: 0.4 },
    },
    energetic: {
      genres: ['edm', 'hip-hop'],
      audioFeatures: { valence: 0.6, energy: 0.9 },
    },
    relaxed: {
      genres: ['jazz', 'chill'],
      audioFeatures: { valence: 0.5, energy: 0.3 },
    },
  };
  
  // Function to fetch recommendations from Spotify API
  async function fetchSpotifyRecommendations(mood) {
    const { genres, audioFeatures } = moodToMusicMapping[mood];
    
    const queryParams = new URLSearchParams({
      seed_genres: genres.join(','),
      target_valence: audioFeatures.valence,
      target_energy: audioFeatures.energy,
      limit: 10, // Limit to 10 recommendations
    });
  
    const response = await fetch(`https://api.spotify.com/v1/recommendations?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your access token
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log('Recommended Tracks:', data.tracks);
      // Display or process the recommended tracks as needed
    } else {
      console.error('Failed to fetch recommendations:', response.statusText);
    }
  }
  
  // Example: Fetch recommendations for a 'happy' mood
  const selectedMood = 'happy';
  
  return (
    <div className="bg-lightBlk p-4 lg:rounded-lg min-h-60">
      <h2 className="lg:font-semibold text-start text-lg mb-7 border-l border-l-purple pl-3">
        Top Charts
      </h2>
    <button onClick={()=>fetchSpotifyRecommendations(selectedMood)} className="bg-purple">Get</button>
    </div>
  );
}
