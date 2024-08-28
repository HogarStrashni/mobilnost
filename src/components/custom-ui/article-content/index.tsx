import { PortableTextReactComponents } from "next-sanity";
import SampleImageComponent from "@/components/custom-ui/article-content/image-component";

export const components: Partial<PortableTextReactComponents> = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-lora text-xl font-bold text-gray-700 md:text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-lora text-lg font-bold text-gray-700 md:text-xl">
        {children}
      </h3>
    ),
  },
};
