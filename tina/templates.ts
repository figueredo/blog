import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "datetime",
      name: "lastmod",
      label: "lastmod",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
    {
      type: "string",
      name: "aliases",
      label: "aliases",
      list: true,
    },
    {
      type: "string",
      name: "canonicalURL",
      label: "canonicalURL",
    },
  ] as TinaField[];
}
