export enum DIMENSIONS {
    LANDSCAPE = 0,
    PORTRAIT,
    SQUARE,
}


export type AnimItem = {
    pos: { lat: number, lng: number }
    author: string,
    posterPath: string,
    videoPath: string,
    youtubeLink: string,
    title: string,
}


export const animItems: AnimItem[] = [
    {
        pos: { lat: 55.378051, lng: -3.435973 },
        author: "The Mollusc Dimension",
        posterPath: "/thumbnails/",
        videoPath: "/videos/",
        youtubeLink: "",
        title: "A TINY MESSAGE OF SOLIDARITY",
    },

]
