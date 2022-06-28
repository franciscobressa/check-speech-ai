<template>
    <div class="partners-container py-4">
        <SectionTitle
            v-if="language == 'en'"
            :title="text.en.title"
            color="#fff"
        />
        <SectionTitle v-else :title="text.pt.title" color="#fff" />
        <div
            class="partners-container-content mx-auto col-12 col-md-10 d-flex align-items-center justify-content-center"
        >
            <div
                class="carousel-controlers d-md-flex align-items-center d-none"
                @click="scrollLeft()"
            >
                <b-icon icon="chevron-left"></b-icon>
            </div>

            <div class="carousel d-flex" ref="carousel">
                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Sitemark-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Trace-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/U-Turn-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Umbrella-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Vertigo-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Vision-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Volume-Color.svg" fluid />
                </b-card>

                <b-card style="max-width: 20rem">
                    <b-img src="@/assets/partners/Waveless-Color.svg" fluid />
                </b-card>
            </div>

            <div
                class="carousel-controlers d-flex align-items-center"
                @click="scrollRight()"
            >
                <b-icon icon="chevron-right"></b-icon>
            </div>
        </div>
        <div
            class="text-container mt-5 d-flex flex-wrap justify-content-around"
        >
            <p class="presentation-text col-12 col-md-5 text-center">
                <template v-if="language == 'en'">
                    {{ text.en.subtitle }}
                </template>
                <template v-else>
                    {{ text.pt.subtitle }}
                </template>
            </p>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle.vue"
    import store from "@/store"
    export default {
        name: "CompanyParters",
        components: {
            SectionTitle,
        },

        methods: {
            scrollRight() {
                this.$refs.carousel.scrollLeft += 323
            },

            scrollLeft() {
                this.$refs.carousel.scrollLeft -= 323
            },
        },

        data() {
            return {
                text: {
                    pt: {
                        title: "NOSSOS PARCEIROS",
                        subtitle:
                            "Construímos relações sólidas que agregam valor ao negócio e resultados que superam expectativas.",
                    },
                    en: {
                        title: "OUR PARTNERS",
                        subtitle:
                            "We build strong relationships that add value to the business and results that exceed expectations.",
                    },
                },
            }
        },
        computed: {
            language() {
                return store.state.language.selectedLanguage
            },
        },
    }
</script>
<style scoped>
    .chart-title {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 2.8rem;
        text-align: center;
    }

    .partners-container {
        background-color: darkslateblue;
        min-height: 100vh;
    }

    .carousel {
        width: 100%;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .partners-container-content {
        margin-top: 3em;
    }

    .carousel::-webkit-scrollbar {
        display: none;
    }

    .carousel-controlers {
        cursor: pointer;
    }
    .card {
        min-width: 34%;
        padding: 0 !important;
        background: none;
        border: none;
    }

    .b-icon {
        font-size: 2em;
        color: white;
        display: flex;
        margin-top: auto;
    }

    .card-body {
        padding: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .presentation-text {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 1.5rem;
        text-align: justify;
    }

    @media screen and (max-width: 768px) {
        .card {
            min-width: 100%;
            margin: 0 0.3em;
        }
    }
</style>
