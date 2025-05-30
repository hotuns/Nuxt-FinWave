import { NuxtConfig } from '@nuxt/types'
import {resolve} from "path";
import {readFileSync} from "fs";

const packageJsonPath = resolve(process.cwd(), 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
const version = packageJson.version

const config: NuxtConfig = {
    ssr: false,

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {rel: 'manifest', href: '/manifest.json'}
            ],
        }
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@nuxtjs/i18n',
        'nuxt-papa-parse',
        '@nuxtjs/mdc'
    ],

    buildModules: [
    ],

    i18n: {
        defaultLocale: 'en',

        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_lang',
            redirectOn: 'root',
        },

        locales: [
            {
                code: 'zh',
                name: 'Chinese',
                file: 'zh-CN.json'
            },
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json'
            },
            {
                code: 'ru',
                name: 'Russian',
                file: 'ru-RU.json'
            },
            {
                code: 'ro',
                name: 'Romanian',
                file: 'ro-RO.json'
            },
        ],

        langDir: 'lang/',
        vueI18n: './i18n.options.js',
        strategy: "no_prefix"
    },

    runtimeConfig: {
        public: {
            clientVersion: version,
            apiURL: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:8080/',
            allowCustomApiURL: process.env.NUXT_ALLOW_CUSTOM_API_URL || false,
        },
    }
}

export default config