import { type NuxtConfig } from '@nuxt/types'
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
            title: '路亚记 - 钓鱼记录与装备管理应用'
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
        defaultLocale: 'zh',

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
            }
        ],

        langDir: 'lang/',
        vueI18n: './i18n.options.js',
        strategy: "no_prefix"
    },

    runtimeConfig: {
        public: {
            clientVersion: version,
            mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN || '',
            weatherApiKey: process.env.NUXT_PUBLIC_WEATHER_API_KEY || '',
            useLocalStorage: process.env.NUXT_USE_LOCAL_STORAGE || true,
        },
    }
}

export default config
