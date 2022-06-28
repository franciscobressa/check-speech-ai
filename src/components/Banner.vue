<template>
    <div class="banner-fluid">
        <div
            class="h-100 banner-container d-flex align-items-center px-1 px-md-4"
        >
            <div class="col-12 col-md-7 mx-auto h-50">
                <h1 class="banner-title mt-md-5 mt-0 text-center">
                    <template v-if="language == 'en'">
                        {{ text.en.title }}
                    </template>
                    <template v-else>
                        {{ text.pt.title }}
                    </template>
                </h1>
                <p class="banner-text text-center mt-5 p-2">
                    <template v-if="language == 'en'">
                        {{ text.en.subtitle }}
                    </template>
                    <template v-else>
                        {{ text.pt.subtitle }}
                    </template>
                </p>
                <div class="banner-action mx-auto">
                    <h4 @click="scrollTo('presentation')">
                        <template v-if="language == 'en'">
                            {{ text.en.button }}
                        </template>
                        <template v-else>
                            {{ text.pt.button }}
                        </template>
                        <b-icon icon="chevron-double-down"></b-icon>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue"
    import store from "@/store"
    import { IconsPlugin } from "bootstrap-vue"

    // Import Bootstrap and BootstrapVue CSS files (order is important)
    import "bootstrap-vue/dist/bootstrap-vue.css"

    // Make BootstrapVue available throughout your project
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)

    export default {
        name: "MyBanner",

        data() {
            return {
                text: {
                    pt: {
                        title: "Soluções modernas para seu negócio",
                        subtitle: "A transformação do seu negócio está aqui...",
                        button: "SAIBA MAIS",
                    },
                    en: {
                        title: "Modern solutions for your business",
                        subtitle:
                            "The transformation of your business is here...",
                        button: "LEARN MORE",
                    },
                },
            }
        },

        computed: {
            language() {
                return store.state.language.selectedLanguage
            },
        },

        methods: {
            scrollTo(id) {
                store.commit("scroll/selectScroll", id)
            },
        },
    }
</script>

<style scoped>
    .banner-fluid {
        background-color: #343a40;
        background-image: url("https://images.squarespace-cdn.com/content/v1/597c40fd893fc0db6466d196/1603817765368-3Z7QHY0QY6JNPT8VIPF5/Emergent+neural+networks.gif");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
        z-index: 0;
        color: #fff;
    }
    .banner-container {
        background-color: rgba(71, 61, 139, 0.603);
        min-height: 100vh;
    }

    .banner-title {
        font-family: "Open Sans", sans-serif;
        font-size: 4rem;
    }

    @media screen and (max-width: 480px) {
        .banner-title {
            font-size: 3rem;
        }
    }

    .banner-text {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .banner-action {
        margin-top: 5%;
        cursor: pointer;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        width: fit-content;
    }

    .banner-action:hover {
        background-color: darkslateblue;
        transition: all 0.3s;
    }

    .banner-action h4 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
</style>
