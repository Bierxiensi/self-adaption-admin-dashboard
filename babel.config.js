module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    {
      "plugins": [["import", {
        "libraryName": "view-design",
        "libraryDirectory": "src/components"
      }]]
    }
    // ,
    // {
    //   "presets": [["es2015", { "modules": false }]],
    //   "plugins": [
    //     [
    //       "component",
    //       {
    //         "libraryName": "element-ui",
    //         "styleLibraryName": "theme-chalk"
    //       }
    //     ]
    //   ]
    // }
  ]
}
