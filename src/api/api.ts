export const getSongs = async (
  bpm: string
): Promise<{ songId: string; artistName: string; genre: string[] }[]> => {
  const res = await fetch(
    `api/tempo/?api_key=${process.env.REACT_APP_API_KEY}&bpm=${bpm}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  );

  const json = await res.json();
  console.log(json);
  const obArray = await json.tempo.map(song => ({
    songId: song.song_id,
    artistName: song.artist.name,
    genre: song.artist.genres
  }));
  console.log(obArray);
  return obArray;
};

export const searchArtist = async (artist: string) => {
  const res = await fetch(
    `https://api.getsongbpm.com/search/?api_key=${process.env.REACT_APP_API_KEY}&type=artist&lookup=${artist}`
  );

  const json = await res.json();
  console.log(json);
  return json;
};

export const getSong = async (id: string) => {
  const res = await fetch(
    `https://api.getsongbpm.com/song/?api_key=${process.env.REACT_APP_API_KEY}&id=${id}`
  );

  const json = await res.json();
  console.log(json);
  const songInfo: {
    title: string;
    key: string;
    pic: string;
    tempo: string;
    open: string;
  } = {
    title: json.song.title,
    key: json.song.key_of,
    pic: json.song.artist.img,
    tempo: json.song.tempo,
    open: json.song.open_key
  };
  console.log(songInfo);
  return songInfo;
};
