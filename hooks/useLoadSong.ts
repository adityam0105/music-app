import { Song } from "@/types";
import { SupabaseClient, useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSong = (song:Song)=> {
    const supabseClient = useSupabaseClient();

    if(!song){
        return '';
    }

    const { data: songData } = supabseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);

    return songData.publicUrl;
}

export default useLoadSong;