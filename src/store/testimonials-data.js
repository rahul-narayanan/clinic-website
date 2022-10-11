import TempImage from "../images/temp-image-1.svg";

const perChunk = 3;

const TestimonialsDataList = [
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros.",
        authorName: "Author Name",
        authorTitle: "CEO / Company",
        authorImg: TempImage
    }
];

export const TestimonialsData = TestimonialsDataList.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
}, []);
