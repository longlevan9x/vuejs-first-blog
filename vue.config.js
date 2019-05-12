const webpack = require('webpack');

module.exports = {
    baseUrl:             "/",
    outputDir:           "./dist/",
    assetsDir:           "./build/",
    runtimeCompiler:     undefined,
    productionSourceMap: undefined,
    parallel:            undefined,
    configureWebpack:    {
        resolve: {
            extensions: ['.js']
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "./assets/img",
                                name: "./assets/img/[name].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: require.resolve("owl.carousel"),
                    use: "imports-loader?define=>false",
                },
                // {
                //     test: require.resolve("popper"),
                //     use: "imports-loader?define=>false",
                // },
                // {
                //     test: require.resolve("bootstrap"),
                //     use: "imports-loader?define=>false",
                // },
                // {
                //     test: require.resolve("jquery.easing"),
                //     use: "imports-loader?define=>false",
                // },
                // {
                //     test: require.resolve("jquery-waypoints"),
                //     //use: "imports-loader?define=>false",
                //     use: [
                //         { loader: 'expose-loader', options: 'waypoint' },
                //     ]
                // },
                // {
                //     test: require.resolve("jquery.stellar"),
                //     use: "imports-loader?define=>false",
                // },

            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
    }
};
