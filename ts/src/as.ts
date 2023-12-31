type Album = {
  userId: number;
  id: number;
  title: string;
};

async function fetchAlbums(limit = 5) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = (await res.json()) as Album[];

    console.log("\nAlbum titles:");
    data.slice(0, limit).forEach(a => console.log(a.title));
    console.log("\n");
  } catch (error) {
    console.error("Error fetching albums", error);
  }
}

fetchAlbums();
