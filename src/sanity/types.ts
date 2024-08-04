export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Article = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  actual?: boolean;
  author?: string;
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?:
          | "normal"
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6"
          | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        imageAlt?: string;
        _type: "image";
        _key: string;
      }
  >;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  excerpt?: string;
  articleCategory?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  tags?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "tag";
  }>;
  source?: string;
  sourceUrl?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Tag = {
  _id: string;
  _type: "tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Article
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Tag
  | Category
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/queries.ts
// Variable: CATEGORY_QUERY
// Query:   *[_type == "category"] | order(_createdAt asc) {    title,    "slug":slug.current    }
export type CATEGORY_QUERYResult = Array<{
  title: string | null;
  slug: string | null;
}>;
// Variable: ARCTICLES_HOME_PAGE_QUERY
// Query:   *[_type == "category"] | order(_createdAt asc){    "category": title,    "slug": slug.current,    "actualArticles": *[_type == "article"       && actual == true      && references(^._id)      ] | order(_createdAt desc)        {            title,          excerpt,          "slug": slug.current,          author,          "published": _createdAt,          coverImage,          "tags": tags[]->{title, "slug": slug.current}        },    "newestArticles": *[_type == "article"      && actual == false      && references(^._id)      ] | order(_createdAt desc)         {          title,          excerpt,          "slug": slug.current,          author,          "published": _createdAt,          coverImage,          "tags": tags[]->{title, "slug": slug.current}        }[0..3]    }
export type ARCTICLES_HOME_PAGE_QUERYResult = Array<{
  category: string | null;
  slug: string | null;
  actualArticles: Array<{
    title: string | null;
    excerpt: string | null;
    slug: string | null;
    author: string | null;
    published: string;
    coverImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    tags: Array<{
      title: string | null;
      slug: string | null;
    }> | null;
  }>;
  newestArticles: Array<{
    title: string | null;
    excerpt: string | null;
    slug: string | null;
    author: string | null;
    published: string;
    coverImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    tags: Array<{
      title: string | null;
      slug: string | null;
    }> | null;
  }>;
}>;
// Variable: ARTICLES_BY_CATEGORY_QUERY
// Query:     *[_type == "article" && articleCategory->slug.current == $category]{       title,       excerpt,       "slug": slug.current,       author,       "published": _createdAt,       coverImage,       "tags": tags[]->{title, "slug": slug.current}    }
export type ARTICLES_BY_CATEGORY_QUERYResult = Array<{
  title: string | null;
  excerpt: string | null;
  slug: string | null;
  author: string | null;
  published: string;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  tags: Array<{
    title: string | null;
    slug: string | null;
  }> | null;
}>;
// Variable: ARTICLE_QUERY
// Query:     *[_type == "article" && slug.current == $articleSlug][0]{      title,      author,      "slug": slug.current,      "published": _createdAt,      "category": articleCategory -> {title, "slug":slug.current},      "tags": tags[] -> {title, "slug": slug.current},      source,      sourceUrl,      content    }
export type ARTICLE_QUERYResult = {
  title: string | null;
  author: string | null;
  slug: string | null;
  published: string;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  tags: Array<{
    title: string | null;
    slug: string | null;
  }> | null;
  source: string | null;
  sourceUrl: string | null;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?:
          | "blockquote"
          | "h1"
          | "h2"
          | "h3"
          | "h4"
          | "h5"
          | "h6"
          | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        imageAlt?: string;
        _type: "image";
        _key: string;
      }
  > | null;
} | null;
