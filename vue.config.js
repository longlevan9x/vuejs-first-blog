module.exports = {
    baseUrl:             "/",
    outputDir:           "./dist/",
    assetsDir:           "./build/",
    runtimeCompiler:     undefined,
    productionSourceMap: undefined,
    parallel:            undefined,
    configureWebpack:    {
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/,
                    use:  [
                        {
                            loader:  "file-loader",
                            options: {
                                outputPath: "./assets/img",
                                name:       "./assets/img/[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        }
    }
};