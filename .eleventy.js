const md = require("markdown-it");

module.exports = function (eleventyConfig) {
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

  return {
    dir: {
      input: ".",
      includes: "template/includes",
      layouts: "template/layouts",
      templates: "template",
      output: "build",
    },
  };
};
