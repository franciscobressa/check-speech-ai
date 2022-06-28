<template>
    <div
        class="presentation-container pt-4 pt-5 pt-md-4 d-flex flex-wrap justify-content-around"
    >
        <div class="text-container col-12 col-md-6">
            <div class="presentation-title-container col-md-5">
                <h1 class="presentation-title mt-5 text-left">
                    CHECKSPEECH AI
                </h1>
            </div>
            <div class="presentation-text-container col-md-12">
                <p class="presentation-text m-0">
                    <template v-if="language == 'en'">
                        {{ text.en }}
                    </template>
                    <template v-else>
                        {{ text.pt }}
                    </template>
                </p>
            </div>
        </div>
        <div class="carousel-container col-12 col-md-5 mt-3 my-md-auto">
            <Carousel class="" />
        </div>
    </div>
</template>
<script>
    import Carousel from "@/components/Carousel.vue"
    import store from "@/store"
    export default {
        name: "ProductPresentation",
        components: {
            Carousel,
        },
        data() {
            return {
                text: {
                    pt: `
                     O CheckSpeech AI é um conjunto de APIs de conversão de fala
                    em textos, bem como a interpretação do sentimento dominante
                    nos dizeres. Nossa solução é treinada em mais de 500.000
                    horas de áudios, transcritos por humanos de uma ampla
                    variedade de idades, nacionalidades, sotaques e níveis de
                    instruções A API é comercializada no modelo SAAS (software
                    as a service).
                    `,
                    en: `
                    The CheckSpeech AI is a set of APIs for speech to text,
                    as well as the interpretation of the dominant sentiment
                    in the words. Our solution is trained in more than 500.000
                    hours of audio, transcribed by humans from a wide variety
                    of ages, nationalities, dialects and levels of instruction
                    The API is sold in the model SAAS (software as a service).
                    `,
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
    .presentation-container {
        min-height: 100vh;
        background-color: #262829;
    }

    .text-container,
    .carousel-container {
        height: fit-content;
    }

    .presentation-title {
        font-family: "Open Sans", sans-serif;
        color: darkslateblue;
        font-size: 1.4rem;
        text-align: center;
    }

    .presentation-text {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 1.8rem;
        text-align: justify;
    }

    @media screen and (max-width: 768px) {
        .presentation-text {
            font-size: 1.2rem;
        }
    }
</style>
