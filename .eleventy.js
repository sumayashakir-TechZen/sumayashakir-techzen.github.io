export default function (eleventyConfig) {
  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
}
