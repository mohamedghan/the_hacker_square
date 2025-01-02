import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({ client, serverToken: process.env.SANITY_WRITE_TOKEN, browserToken: process.env.SANITY_WRITE_TOKEN});
