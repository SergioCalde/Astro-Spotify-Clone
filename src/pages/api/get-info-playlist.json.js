import { allPlaylists, songs as allSongs} from "@/lib/data";

export async function GET({ request }) {
    // Get the id from the URL
    const { url } = request;
    // const [, querystring ] = url.split('?');
    // const searchParams = new URLSearchParams(querystring);

    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId);

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: { 'Content-Type': 'application/json'},
    });
}