// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-clamp',
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    Declaration: {
      '*': (decl) => {
        console.log(decl.value)
        // All declarations
      }
    }
  }
}
module.exports.postcss = true
