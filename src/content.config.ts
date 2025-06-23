import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { videosSchema } from 'starlight-videos/schemas';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema(
		{
			extend: videosSchema
		}
	) }),

	blog: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
		  extend: (context) => blogSchema(context)
		})
	  })
};
