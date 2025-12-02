// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    // MDX options
  }
});
export {
  source_config_default as default,
  docs
};
