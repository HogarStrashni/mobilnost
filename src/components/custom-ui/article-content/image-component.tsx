import { urlFor } from "@/sanity/image";
import Image from "next/image";

type SampleImageComponent = {
  value: {
    asset: {
      _ref: string;
    };
    imageAlt: string;
  };
  isInline: boolean;
};

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: SampleImageComponent) => {
  return (
    <div className="flex flex-col">
      <Image
        src={urlFor(value).image(value).fit("max").auto("format").url()}
        alt={value.imageAlt || ""}
        width={1280}
        height={800}
        loading="lazy"
        className="rounded"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",
        }}
      />
      <p className="-mt-7 text-sm text-gray-500">{value.imageAlt}</p>
    </div>
  );
};

export default SampleImageComponent;
