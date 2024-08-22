import { urlFor } from "@/sanity/image";
import Image from "next/image";

type SampleImageComponent = {
  value: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  isInline: boolean;
};

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: SampleImageComponent) => {
  return (
    <Image
      src={urlFor(value).image(value).fit("max").auto("format").url()}
      alt={value.alt || " "}
      width={1280}
      height={800}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

export const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};
