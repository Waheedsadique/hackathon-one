import { getGallery1 } from "../../../sanity/sanity-config"
import GallerySection from "../view/GallerySection"
export const Gallery = async () => {
    const gallery = await getGallery1();
  return (
    <div>
        <GallerySection data={gallery}/>
    </div>
  )
}
