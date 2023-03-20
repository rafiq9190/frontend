import { getStrapiMedia } from "../../lib/media";
// import NextImage from "next/image";
import NextImage from 'next/legacy/image'

const myloader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Image = ({ image }) => {
    const { alternativeText, width, height } = image.data.attributes;

    return (
        <NextImage
            // myloader={myloader}
            layout="fill"

            // width={width}
            height={height}
            objectFit="contain"
            
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
    );
};

export default Image;