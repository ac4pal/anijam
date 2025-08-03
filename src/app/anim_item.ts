export enum DIMENSIONS {
    LANDSCAPE = 0,
    PORTRAIT,
    SQUARE,
}


export type AnimItem = {
    pos: { lat: number, lng: number }
    posString: string,
    author: string,
    dateAdded: Date,
    youtubeId: string,
    title: string,
    shorts: boolean,
}


export function fetchAnimItems(): AnimItem[] {
    return [
        {
            pos: { lat: 53.1424, lng: -7.6921 },
            posString: "Dublin",
            title: "Light in the Darkness",
            author: "Emlyn Boyle",
            dateAdded: new Date(2025, 6, 13),
            youtubeId: "76mqCOKrpaY",
            shorts: false,
        },
        {
            pos: { lat: 50.8798, lng: 4.7005 },
            posString: "Belguim",
            title: "Bloom",
            author: "Affie De Cooman",
            dateAdded: new Date(2025, 6, 13),
            youtubeId: "7xHW4C9QoRY",
            shorts: false,
        },
        {
            pos: { lat: 37.5079, lng: 15.0830 },
            posString: "Cantina, Italy",
            title: "Give Peace a Chance",
            author: "Donana Napoli",
            youtubeId: "6Pq-oRP-bJs",
            dateAdded: new Date(2025, 6, 13),
            shorts: false,
        },
        {
            pos: { lat: 46.5653, lng: -66.4619 },
            posString: "Canada",
            title: "Surveilance",
            author: "Brandon Hicks",
            dateAdded: new Date(2025, 6, 13),
            youtubeId: "Oe-y2XFiuZI",
            shorts: false,
        },
        {
            pos: { lat: 39.0742, lng: 21.8243 },
            posString: "Greece",
            author: "Konstantinos Kyriakou",
            dateAdded: new Date(2025, 6, 13),
            youtubeId: "PSrN99wuSgU",
            title: "The Sun Thief",
            shorts: false,
        },
        {
            pos: { lat: 29.749907, lng: -95.358421 },
            posString: "Houston, Texas",
            author: "Felipe Sanchez",
            dateAdded: new Date(2025, 6, 13),
            youtubeId: "qMfRjaARVp4",
            title: "KIDS AND ROCKS",
            shorts: false,
        },

        {
            title: "I LOVE WATERMELON",
            author: "Leisl Adams",
            posString: "Ottawa, Canada",
            pos: { lat: 45.42153, lng: -75.69719 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "xZFXwUxzjLA",
            shorts: false,

        },
        {
            title: "WHERE THE OWL APPEARS",
            author: "Shorouk Allam",
            posString: "ASSIUT GOVERNORATE, EGYPT",
            pos: { lat: 26.82055, lng: 30.80250 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "DwDvxZob_Xc",
            shorts: false,
        },
        {
            title: "Existance is Resistance",
            author: "Lluis Fuzzhound",
            posString: "Valencia, Spain",
            pos: { lat: 39.46991, lng: -0.37629 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "6K627N8zx10",
            shorts: false,
        },
        {
            title: "FLOWERS OF MY HEART",
            author: "Adnan Hussain",
            posString: "Los Angeles, US",
            pos: { lat: 34.05223, lng: -118.24368 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "tjiTIeh8WYA",
            shorts: true,
        },
        {
            title: "TO GAZA WITH LOVE",
            author: "Kate Jessop",
            posString: "Brighton, UK",
            pos: { lat: 50.82838, lng: -0.13947 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "yVRvpc7DQNg",
            shorts: false,
        },
        {
            title: "Seeds",
            author: "Vangelis Karadimas",
            posString: "Athens, Greece",
            pos: { lat: 39.0742, lng: 21.8243 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "GXT3BAYbM6E",
            shorts: false,
        },
        {
            pos: { lat: 51.76684, lng: 0.47578 },
            posString: "Essex, UK",
            author: "The Mollusc Dimension",
            dateAdded: new Date(2025, 6, 16),
            shorts: false,
            youtubeId: "d9YzUR9NNmo",
            title: "A TINY MESSAGE OF SOLIDARITY",
        },
        {
            pos: { lat: 19.43260, lng: -99.13320 },
            posString: "Mexico, Mexico City",
            title: "HANDELA BY THE BEACH",
            author: "CUAUHTEMOC PADILLAC",
            youtubeId: "fZVDbCaEcYM",
            shorts: false,
            dateAdded: new Date(2025, 6, 16),
        },
        {
            title: "OLIVES, FLOWERS & SEA",
            author: "Andrés Puig Sandoval",
            posString: "Madrid, Spain",
            pos: { lat: 40.41650, lng: -3.70256 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "NHFyaUmnhGg",
            shorts: false,
        },
        {
            title: "PALESTINE YOU ARE THE HEART OF THE WORLD",
            author: "Ixchel Sierra / Candy C. Rivera",
            posString: "Benito Juárez, Mexico",
            pos: { lat: 19.35000, lng: -99.15000 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "hv4LAzEvSxw",
            shorts: false,
        },
        {
            title: "A SIMPLE TEST",
            author: "Titouan Tillier",
            posString: "Angoulême, France",
            pos: { lat: 45.64842, lng: 0.15519 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "vxsnC6nOJ_M",
            shorts: true,
        },
        {
            pos: { lat: 52.52, lng: 13.4050 },
            title: "Bird",
            author: "Lena Ziyal",
            posString: "Berlin",
            shorts: false,
            youtubeId: "xXLI4QSvOhs",
            dateAdded: new Date(2025, 6, 16),
        },
        {
            title: "REUNITED",
            author: "Dominique Vettom-Morisod",
            posString: "Geneva, Switzerland",
            pos: { lat: 46.20439, lng: 6.14316 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "mWvTUxccDdg",
            shorts: false,
        },
        {
            title: "CHILDREN OF WAR",
            author: "Zina Papadopoulou",
            posString: "Athens, Greece",
            pos: { lat: 39.0742, lng: 21.8243 },
            dateAdded: new Date(2025, 6, 16),
            youtubeId: "mSlATXqkQ9s",
            shorts: false,
        },
        {
            title: "AFTER THE STORM",
            author: "Ben Adam-Harris",
            posString: "Thame, UK",
            pos: { lat: 51.7484, lng: -0.97624 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "hMbeTEY6zV0",
            shorts: false,
        },
        {
            title: "FLOWER CHILD",
            author: "Ed Chee",
            posString: "Vancouver, Canada",
            pos: { lat: 49.2827, lng: -123.1207 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "fmrtvRQ1l_g",
            shorts: false,
        },
        {
            title: "A SMALL WISH",
            author: "Joanne Davis",
            posString: "High Wycombe, UK",
            pos: { lat: 51.6283, lng: -0.7492 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "iGVhI2aYYmc",
            shorts: false,
        },
        {
            title: "HEAVY HEART",
            author: "Stephen Irwin",
            posString: "Wandsworth",
            pos: { lat: 51.4640, lng: -0.1924 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "jIud-8H4fNU",
            shorts: false,
        },
        {
            title: "FROM THE ASHES",
            author: "Jamil Lahham / Dan Franke",
            posString: "Montreal/ Stuttgart",
            pos: { lat: 45.5017, lng: -73.5673 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "7NJ_NL_mHR0",
            shorts: false,
        },
        {
            title: "EXIST TO RESIST",
            author: "Adarsh Madhusudhanan",
            posString: "Kodungallur, India",
            pos: { lat: 10.2222, lng: 76.1992 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "t1fOV5zBIX4",
            shorts: false,
        },
        {
            title: "GAZA SEEDS",
            author: "ELISA MARTINEZ",
            posString: "Alicante, Spain",
            pos: { lat: 38.3452, lng: -0.4815 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "SQG1FtBQiv8",
            shorts: false,
        },
        {
            title: "JUST EATING",
            author: "Mohamed Naser",
            posString: "CAIRO, Egypt",
            pos: { lat: 30.0444, lng: 31.2357 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "rmzqNAIKKrY",
            shorts: true,
        },
        {
            title: "TO GAZA WITH LOVE",
            author: "Saho Saito",
            posString: "Tokyo, Japan",
            pos: { lat: 35.6895, lng: 139.6917 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "FowPfMj9WYc",
            shorts: false,
        },
        {
            title: "HEARTS 4 GAZA",
            author: "Bella Woodfield",
            posString: "Cardiff, UK",
            pos: { lat: 51.4816, lng: -3.1791 },
            dateAdded: new Date(2025, 6, 22),
            youtubeId: "7iTly7Dlwgo",
            shorts: false,
        },

        {
            title: "DEAR FRIEND",
            author: "Marcia Rojas",
            posString: "Penarth",
            pos: { lat: 51.4352, lng: -3.1740 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "PdIPaeCbJ0w",
            shorts: false,
        }, {
            title: "VOLA!",
            author: "Simone Giampaolo",
            posString: "London",
            pos: { lat: 51.5072, lng: -0.1276 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "6W6jB15PW7U",
            shorts: false,
        },
        {
            title: "KEFFIYEH",
            author: "Nomi Lefort",
            posString: "London",
            pos: { lat: 51.5072, lng: -0.1278 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "UwJMOxayzbM",
            shorts: false,
        }, {
            title: "WE COME TOGETHER",
            author: "Shefalee Jain",
            posString: "Delhi",
            pos: { lat: 28.6139, lng: 77.2090 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "VIKgKVsPNms",
            shorts: false,
        }, {
            title: "A LOAF OF BREAD",
            author: "Tayseera Alaqad",
            posString: "Gaza",
            pos: { lat: 31.5016, lng: 34.4667 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "tZVIgXGahS4",
            shorts: false,
        }, {
            title: "FEATHERS OVER THE CLOUDS",
            author: "Svetlana Gencheva",
            posString: "Paris",
            pos: { lat: 48.8566, lng: 2.3522 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "BZzDcrPeD58",
            shorts: false,
        }, {
            title: "SENDING LOVE",
            author: "Katy Rushton",
            posString: "Manchester",
            pos: { lat: 53.4808, lng: -2.2426 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "gDt7exjoWYQ",
            shorts: false,
        }, {
            title: "A ROSE SHOULDERS UP",
            author: "Isobel May",
            posString: "Farnham",
            pos: { lat: 51.2144, lng: -0.7980 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "-kSNc8zYd4M",
            shorts: false,
        }, {
            title: "RESILIENCE",
            author: "Man Yuk Cheuk",
            posString: "HONG KONG",
            pos: { lat: 22.3193, lng: 114.1694 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "nQzuSWO_Xl0",
            shorts: false,
        }, {
            title: "OLIVE TREES GROW",
            author: "Yesim Caglar",
            posString: "KOCAELI",
            pos: { lat: 40.7654, lng: 29.9406 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "pp3qTkK9vRQ",
            shorts: false,
        }, {
            title: "FAMINE",
            author: "Rehab Ayman",
            posString: "Cairo",
            pos: { lat: 30.0444, lng: 31.2357 },
            dateAdded: new Date(2025, 6, 23),
            youtubeId: "5kbX5PfMO0Q",
            shorts: false,
        },
        {
            title: "WE ARE THE SEEDS", author: "Nour Khamis", posString: "LONDON", pos: { lat: 51.5074, lng: -0.1280 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "Ni9f_ZZBd6c",
            shorts: false
        },
        {
            title: "MY SIDE", author: "Raul Alejandro Morales Reyes", posString: "Mexico City", pos: { lat: 19.4326, lng: -99.1332 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "lJPDPje29nc",
            shorts: false
        },
        {
            title: "NOW", author: "Asta Azopardi", posString: "LONDON", pos: { lat: 51.5074, lng: -0.1282 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "UTlcoH9LjYU",
            shorts: false
        },
        {
            title: "HIDDEN UNDER THE WINGS", author: "Samia Kafati", posString: "Montreal", pos: { lat: 45.5019, lng: -73.5674 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "n8j4a4joye0",
            shorts: false
        },
        {
            title: "WE WERE SEEDS", author: "Adrián Piqueras Sánchez", posString: "MADRID", pos: { lat: 40.4168, lng: -3.7038 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "XWuItQ4WwAw",
            shorts: false
        },
        {
            title: "SEEDS OF FREEDOM", author: "Martyna Sabadasz", posString: "Cheltenham", pos: { lat: 51.9001, lng: -2.0797 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "5giGz57XvTw",
            shorts: false
        },
        {
            title: "LIKE WILDFLOWERS", author: "Lauren Flinner", posString: "Saugus", pos: { lat: 42.4648, lng: -71.0101 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "6Ab2f57D7R0",
            shorts: false
        },
        {
            title: "SENDING LOVE", author: "Deanna Morse", posString: "Junction City", pos: { lat: 44.2193, lng: -123.2048 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "Ji9YRNNHi4E",
            shorts: false
        },
        {
            title: "SAFETY AND PEACE", author: "Arran Carey", posString: "Cardiff", pos: { lat: 51.4816, lng: -3.1791 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "9hC3wwBy4vw",
            shorts: false
        },
        {
            title: "PEACE PERFORMER", author: "Barbara Schedl", posString: "Vienna", pos: { lat: 48.2082, lng: 16.3738 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "9wUyoWyT1vo",
            shorts: true
        },
        {
            title: "POTS AND PRAYERS", author: "Liz Maelane", posString: "Johannesburg", pos: { lat: -26.2041, lng: 28.0473 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "ULnp4_JqBac",
            shorts: false
        },
        {
            title: "BETTER DAYS", author: "JULIE AK", posString: "Rolle", pos: { lat: 46.4578, lng: 6.3398 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "4eXMa3pU1qs",
            shorts: false
        },
        {
            title: "GROW OLD", author: "Eloise Jenninger", posString: "Winchester", pos: { lat: 51.0629, lng: -1.308 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "rlbBhnW74Ek",
            shorts: false
        },
        {
            title: "UNITED FOR GAZA", author: "Catherine Khounlivong", posString: "Rosny-sous-Bois", pos: { lat: 48.8708, lng: 2.4903 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "OnLa-X23bhE",
            shorts: false
        },
        {
            title: "FREE AS THE BIRDS", author: "Rachel McBride", posString: "Alness", pos: { lat: 57.683, lng: -4.250 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "wkdRx1j5zck",
            shorts: false
        },
        {
            title: "EVERYTHING IN THIS WORLD", author: "James Thacher", posString: "Brant Rock", pos: { lat: 42.0807, lng: -70.9954 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "wHzkyLcgvpY",
            shorts: false
        },
        {
            title: "A BOAT TO PALESTINE", author: "Branko Solce", posString: "Ljubljana", pos: { lat: 46.0569, lng: 14.5058 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "9adqR7dUvXE",
            shorts: false
        },
        {
            title: "BOOK FOR PALESTINE", author: "Sara/ Michel/María/ Deiverly Buitrago/Buitrago/Bermúdez/Cordones", posString: "Bogotá", pos: { lat: 4.711, lng: -74.0721 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "84aclt0dwzU",
            shorts: false
        },
        {
            title: "OLIVE", author: "Valeria Weerasinghe", posString: "Gallarate", pos: { lat: 45.6606, lng: 8.7934 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "72vZbwIBJMU",
            shorts: false
        },
        {
            title: "HOPE", author: "Subhan Zafar", posString: "Leicester", pos: { lat: 52.6369, lng: -1.1398 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "zyswgmbYezQ",
            shorts: false
        },
        {
            title: "WAR IS NOT JUST NEWS", author: "Zahra Arabi", posString: "Tehran", pos: { lat: 35.6892, lng: 51.389 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "S7VIC0g55Sw",
            shorts: false
        },
        {
            title: "INTIFADA'S CHILDREN", author: "Sampriti Dasgupta", posString: "Kolkata", pos: { lat: 22.5726, lng: 88.3639 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "Ga27ev1gWi8",
            shorts: false
        },
        {
            title: "ANIJAM from FMK Workshop", author: "Viola Mancini", posString: "Pordenone", pos: { lat: 45.9569, lng: 12.6605 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "PgQJpw2evUE",
            shorts: false
        },
        {
            title: "RESCUE DRAWS", author: "Diana Cortés & Antonio Pastor", posString: "Alcoy", pos: { lat: 38.698, lng: -0.4743 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "0tt9ahnRejI",
            shorts: false
        },
        {
            title: "DEAR CHILDREN OF GAZA", author: "Tony Gammidge", posString: "Brighton", pos: { lat: 50.82838, lng: -0.13947 }, dateAdded: new Date(2025, 6, 29),
            youtubeId: "PWi6xVPHTsM",
            shorts: false
        },
        {
            title: "KITE CIRCUS DRONE",
            author: "Rachel Dring",
            posString: "Hackney",
            pos: { lat: 51.545, lng: -0.055 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "k-Q4AZ0iibY",
            shorts: false
        },
        {
            title: "GAZA FILM KIDS",
            author: "Sam Fell",
            posString: "London",
            pos: { lat: 51.5074, lng: -0.1279 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "9-S6Num04ak",
            shorts: false
        },
        {
            title: "SEEDS OF PEACE",
            author: "Geoffrey Beatty",
            posString: "Philadelphia",
            pos: { lat: 39.9526, lng: -75.1652 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "cHhz1fnGnDc",
            shorts: false
        },
        {
            title: "POPPY",
            author: "Anne McCall",
            posString: "Austin",
            pos: { lat: 30.2672, lng: -97.7431 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "kwMGmLf7w-Q",
            shorts: false
        },
        {
            title: "DESERT ROSE",
            author: "Bonobithi Biswas",
            posString: "Montrouge",
            pos: { lat: 48.8166, lng: 2.3136 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "Xkrblg5InDA",
            shorts: false
        },
        {
            title: "THREE SCENES FROM GAZA",
            author: "Claudia Munksgaard-Palmqvist",
            posString: "Copenhagen",
            pos: { lat: 55.6761, lng: 12.5683 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "I9BDgwuevnc",
            shorts: false
        },
        {
            title: "THEIR SKIES CRY BUT DREAMS STILL RISE",
            author: "Salma Lrhayyate",
            posString: "Brussels",
            pos: { lat: 50.85045, lng: 4.34878 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "Bkcz7qYluMo",
            shorts: false
        },
        {
            title: "DON-KEY",
            author: "ERICK CUEVAS",
            posString: "L’Aquila",
            pos: { lat: 42.3506, lng: 13.3995 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "fWLhJHYy6Gs",
            shorts: false
        },
        {
            title: "WHEN BUTTERFLIES ARE SUBJECTED TO WIND",
            author: "Hannaneh Vahedi",
            posString: "Tehran",
            pos: { lat: 35.6892, lng: 51.389 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "OolXjYsQXuk",
            shorts: false
        },
        {
            title: "SILHOUETTE",
            author: "Maliheh Gholamzadeh",
            posString: "Birmingham",
            pos: { lat: 52.4862, lng: -1.8904 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "yrajlz3BF44",
            shorts: false
        },
        {
            title: "Watermelon and Dandelion",
            author: "Sam Chou",
            posString: "Toronto",
            pos: { lat: 43.6511, lng: -79.3839 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "P8qw3Nxsp0E",
            shorts: false
        },
        {
            title: "LOVE TO GAZA",
            author: "victoria lungu",
            posString: "Leeds",
            pos: { lat: 53.8008, lng: -1.5491 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "VeL9wkFuh0k",
            shorts: false
        },
        {
            title: "WHAT, WHEN?",
            author: "Eleni Aerts",
            posString: "Ieper",
            pos: { lat: 50.8512, lng: 2.8857 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "GXf81DYoau4",
            shorts: false
        },
        {
            title: "FOR THE CHILDREN WITH LOVE",
            author: "Shreyasi Das",
            posString: "Montreal",
            pos: { lat: 45.5019, lng: -73.5674 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "0BADhN0TEtk",
            shorts: false
        },
        {
            title: "WE ARE FAMILIES",
            author: "Billy Mpetha",
            posString: "Stockport",
            pos: { lat: 53.4106, lng: -2.1575 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "PFB02C3Ru24",
            shorts: false
        },
        {
            title: "DECOLONIZED DANCE",
            author: "Zeinab Araghinia",
            posString: "Babol",
            pos: { lat: 36.5519, lng: 52.6789 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "rgErQqD9E0A",
            shorts: false
        },
        {
            title: "THE WALK",
            author: "Xavier Aguayo",
            posString: "Quito",
            pos: { lat: -0.1807, lng: -78.4678 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "oLV9hF_zpxo",
            shorts: false
        },
        {
            title: "TAKE HANDS",
            author: "Diek Grobler",
            posString: "Pretoria",
            pos: { lat: -25.7479, lng: 28.2293 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "FgKN3T42Y4A",
            shorts: false
        },
        {
            title: "PRESSED FLOWERS",
            author: "Elizabeth Hobbs",
            posString: "LONDON",
            pos: { lat: 51.5074, lng: -0.1274 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "0I8Hd9UGmzg",
            shorts: false
        },
        {
            title: "FLYING FREE",
            author: "Christina Booth",
            posString: "Bristol",
            pos: { lat: 51.4545, lng: -2.5879 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "yvsM1VbVs6k",
            shorts: false
        },
        {
            title: "HEAVEN",
            author: "Alheli Ochoa",
            posString: "Azcapotzalco",
            pos: { lat: 19.485, lng: -99.175 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "Z4LNxrVBl6o",
            shorts: false
        },
        {
            title: "ARI",
            author: "Rodrigo Del Pino",
            posString: "Buenos Aires",
            pos: { lat: -34.6037, lng: -58.3816 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "JReNR4-amI8",
            shorts: false
        },
        {
            title: "HUG OF PEACE (ABRAZODEPAZ)",
            author: "Rulo Mileg",
            posString: "Guatemala City",
            pos: { lat: 14.6349, lng: -90.5069 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "q5McefhwQwE",
            shorts: false
        },
        {
            title: "THE POEM",
            author: "Drew de Silva",
            posString: "Colombo",
            pos: { lat: 6.9271, lng: 79.8612 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "pmXHr5Orby0",
            shorts: false
        },
        {
            title: "TO GAZA WITH LOVE",
            author: "Gareth Bennett",
            posString: "Newport",
            pos: { lat: 51.5842, lng: -2.9977 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "SYgmG6q92DY",
            shorts: false
        },
        {
            title: "SEED WALKER",
            author: "Sara Forero, María José Ramírez, Joe Vásquezl, Mallivi Melo Rey",
            posString: "Bogotá",
            pos: { lat: 4.711, lng: -74.0721 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "86fzgJqk1ok",
            shorts: false
        },
        {
            title: "SEED OF PEACE",
            author: "Fergy Bustacara, Mallivi Melo Rey, Cielo Forero",
            posString: "Bogotá",
            pos: { lat: 4.711, lng: -74.0721 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "vyUfZvowGA8",
            shorts: false
        },
        {
            title: "LUZ",
            author: "Ben Fox",
            posString: "London",
            pos: { lat: 51.5074, lng: -0.1277 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "twH59oMNRl8",
            shorts: false
        },
        {
            title: "RED WAVE",
            author: "Esther Vital",
            posString: "Zaragoza",
            pos: { lat: 41.6488, lng: -0.8891 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "MtNobDIp10A",
            shorts: false
        },
        {
            title: "LOVE TO GAZA",
            author: "Brenda Goodchild",
            posString: "Reading",
            pos: { lat: 51.4543, lng: -0.9781 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "1iUVehppg_E",
            shorts: false
        },
        {
            title: "ANIMONTAGE",
            author: "Alissar Kobeissi",
            posString: "Vancouver",
            pos: { lat: 49.2827, lng: -123.1207 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "Uvl2CYfQT08",
            shorts: true
        },
        {
            title: "FREE PALESTINE",
            author: "Navaporn Boonmasiri",
            posString: "Vancouver",
            pos: { lat: 49.2827, lng: -123.1207 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "MKy6jzaBEac",
            shorts: false
        },
        {
            title: "BACK HOME",
            author: "Chiara Carnovale",
            posString: "Paola",
            pos: { lat: 39.3667, lng: 16.0333 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "912Yfo-eI8Y",
            shorts: false
        },
        {
            title: "PEACE FOR THE CHILDREN OF PALESTINE",
            author: "Maria Tsakiri",
            posString: "Edinburgh",
            pos: { lat: 55.9533, lng: -3.1883 },
            dateAdded: new Date(2025, 6, 31),
            youtubeId: "_gdv-2G7M4s",
            shorts: true
        },
    ]
}
