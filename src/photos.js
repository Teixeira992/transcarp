const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `${process.env.PUBLIC_URL}/${id}`;

const unsplashPhotos = [
    { id: "galeria_1.jpg", width: 1080, height: 700 },
    { id: "galeria_2.jpg", width: 1080, height: 720 },
    { id: "galeria_3.jpg", width: 1080, height: 720 },
    { id: "galeria_4.jpg", width: 1080, height: 800 },
    { id: "galeria_5.jpg", width: 1080, height: 1420 },
    { id: "galeria_6.jpg", width: 1080, height: 707 },
    { id: "galeria_7.jpg", width: 1080, height: 858 },
    { id: "galeria_8.jpg", width: 1080, height: 720 },
    { id: "galeria_9.jpg", width: 1080, height: 949 },
    { id: "galeria_10.jpg", width: 1080, height: 490 },
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
