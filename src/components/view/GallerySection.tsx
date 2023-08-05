import Image from "next/image";
import { Gallery } from "../../../Types/Gallery";
import { getGallery1 } from "../../../sanity/sanity-config";

interface prop {
  data: Gallery[];
}

const GallerySection = ({ data }: prop) => {
  return (
    <section className="mb-[50px] mt-[100px]">
      <h1 className="text-center text-6xl font-bold underline mb-6 ">
        Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3   justify-between items-center  ">
        {data.map((item) => (
          <div  key={item._id}>
            {
              <Image
                src={item.galleryImages[0]}
                width={350}
                height={350}
                alt="img"
                className="w-[400px] h-[300px] transition duration-300 ease-in-out hover:scale-110  object-cover"
              />
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
