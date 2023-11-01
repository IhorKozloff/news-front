/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,jsx,tsx}'],
    theme: {
        colors: {
            layoutDark: '#dedede',
            layoutExtraDark: '#767676',
            layoutLight: '#f0f0f0',
            white: '#FFF',
            black: '#000',
            commentHeaderMale: '#f5f6f7',
            commentHeaderFemale: '##f5f7fb',
            commentIcon: '#889fcd',
            likeIcon: '#c0c4cb',
            replyBtnText: '#065fd4',
            replyBtnBg: '#def1ff',
            footerUp: '#6451cd',
            footerDown: '#151b29',
            footerPrimary: '#1c2431',
            borderImg: '#cc1f08',
        },
        extend: {
            spacing: {
                '18': '72px'
            },
        },
    },
    plugins: [],
};
