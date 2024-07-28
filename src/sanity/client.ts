import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./environmentVariables";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
