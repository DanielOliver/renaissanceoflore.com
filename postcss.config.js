const tailwindcss = require(`tailwindcss`);

module.exports = {
    plugins: [
        tailwindcss(`./tailwind.config.js`),
        require('postcss-apply'),
        require(`autoprefixer`),
        require(`cssnano`)({
            preset: `default`
        })
    ]
};
