const tailwindWebpackRule = {
  test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
  loader: 'postcss-loader',
  // options: {
  //   plugins: [
  //     require('postcss-import'),
  //     require('tailwindcss')('./tailwind.config.js'),
  //     require('autoprefixer'),
  //   ],
  // },
};

exports.tailwindWebpackRule = tailwindWebpackRule;
