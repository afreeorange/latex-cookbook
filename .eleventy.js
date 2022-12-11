const md = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/** @type {import('@11ty/eleventy').LocalConfig} */
module.exports = function (eleventyConfig) {
  /**
   * Use markdown-it as the renderer and configure its plugins
   */
  eleventyConfig.setLibrary(
    "md",
    md({
      html: true,
      breaks: true,
      linkify: true,
    }).use(require("markdown-it-mathjax3", { tex: { tags: "ams" } }))
  );

  eleventyConfig.addCollection("recipes", (collection) =>
    collection.getFilteredByGlob("./recipes/*.md")
  );

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({
    "./template/styles.css": "styles.css",
  });

  return {
    dir: {
      input: ".",
      includes: "template/includes",
      layouts: "template/layouts",
      templates: "template",
      output: "build",
    }
  };
};
