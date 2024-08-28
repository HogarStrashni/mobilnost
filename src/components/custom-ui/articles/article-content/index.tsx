import { PortableTextReactComponents } from "next-sanity";
import SampleImageComponent from "@/components/custom-ui/articles/article-content/image-component";

export const components: Partial<PortableTextReactComponents> = {
  types: {
    image: SampleImageComponent,
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
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};
