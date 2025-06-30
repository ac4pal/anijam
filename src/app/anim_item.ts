export enum DIMENSIONS {
    LANDSCAPE = 0,
    PORTRAIT,
    SQUARE,
}


export type AnimItem = {
    pos: { lat: number, lng: number }
    author: string,
    posterPath: string,
    youtubeId: string,
    title: string,
}


export const animItems: AnimItem[] = [
    {
        pos: { lat: 39.0742, lng: 21.8243 },
        author: "Konstantinos Kyriakou",
        posterPath: "/thumbnails/",
        youtubeId: "",
        title: "The Sun Theif",
    },
    {
        pos: { lat: 46.5653, lng: -66.4619 },
        title: "Surveilance",
        author: "Brandon Hicks",
        posterPath: "/thumbnails/",
        youtubeId: "",

    },
    {
        pos: { lat: 39.0742, lng: 21.8243 },
        author: "Vangelis Karadimas",
        posterPath: "/thumbnails/",
        youtubeId: "",
        title: "Seeds",
    },
    {
        pos: { lat: 38.9637, lng: 35.2433 },
        author: "YuLung Art",
        posterPath: "/thumbnails/",
        youtubeId: "",
        title: "Olive Trees Glow",
    },
    {
        pos: { lat: 55.378051, lng: -3.435973 },
        author: "The Mollusc Dimension",
        posterPath: "/thumbnails/",
        youtubeId: "",
        title: "A TINY MESSAGE OF SOLIDARITY",
    },
    {
        pos: { lat: 53.1424, lng: -7.6921 },
        title: "Light in the Darkness",
        author: "Emlyn Boyle",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },
    {
        pos: { lat: 26.8206, lng: 30.8025 },
        title: "Just Eat",
        author: "Mohamed Elezeny & Sara Qued",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },
    {
        pos: { lat: 37.5079, lng: 15.0830 },
        title: "Give Peace a Chance",
        author: "Donana Napoli",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },
    {
        pos: { lat: 40.4637, lng: -3.7492 },
        title: "Resistance is Existance",
        author: "Lluis Fuzzhound",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },
        {
        pos: { lat: 50.8798, lng: 4.7005 },
        title: "Bloom",
        author: "Affie De Cooman",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },
     {
        pos: { lat: 52.52, lng: 13.4050 },
        title: "Bird",
        author: "Lena Ziyal",
        posterPath: "/thumbnails/",
        youtubeId: "",
    },


]
