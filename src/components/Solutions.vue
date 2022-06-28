<template>
    <div class="solutions-container py-4">
        <SectionTitle
            class="title"
            v-if="language == 'en'"
            title="SOLUTIONS"
            color="#fff"
        />
        <SectionTitle class="title" v-else title="SOLUÇÕES" color="#fff" />
        <div class="row w-75 d-flex mx-auto d-flex justify-content-around">
            <b-card class="col-md-5 col-12 mb-4 mb-md-0">
                <b-card-title class="pb-3 mt-3">
                    <template v-if="language == 'en'">
                        {{ cards.en.card1.title }}
                    </template>
                    <template v-else>
                        {{ cards.pt.card1.title }}
                    </template>
                </b-card-title>
                <template v-if="language == 'en'">
                    {{ cards.en.card1.subtitle }}
                </template>
                <template v-else>
                    {{ cards.pt.card1.subtitle }}
                </template>
            </b-card>
            <b-card class="col-md-5 col-12 mb-4 mb-md-0">
                <b-card-title class="pb-3 mt-3">
                    <template v-if="language == 'en'">
                        {{ cards.en.card2.title }}
                    </template>
                    <template v-else>
                        {{ cards.pt.card2.title }}
                    </template>
                </b-card-title>
                <template v-if="language == 'en'">
                    {{ cards.en.card2.subtitle }}
                </template>
                <template v-else>
                    {{ cards.pt.card2.subtitle }}
                </template>
            </b-card>
        </div>
        <div
            class="row w-75 d-flex mx-auto d-flex justify-content-around mt-md-5"
        >
            <b-card class="col-md-5 col-12 mb-4 mb-md-0">
                <b-card-title class="pb-3 mt-3">
                    <template v-if="language == 'en'">
                        {{ cards.en.card3.title }}
                    </template>
                    <template v-else>
                        {{ cards.pt.card3.title }}
                    </template>
                </b-card-title>
                <template v-if="language == 'en'">
                    {{ cards.en.card3.subtitle }}
                </template>
                <template v-else>
                    {{ cards.pt.card3.subtitle }}
                </template>
            </b-card>
            <b-card class="col-md-5 col-12 mb-4 mb-md-0">
                <b-card-title class="pb-3 mt-3">
                    <template v-if="language == 'en'">
                        {{ cards.en.card4.title }}
                    </template>
                    <template v-else>
                        {{ cards.pt.card4.title }}
                    </template>
                </b-card-title>
                <template v-if="language == 'en'">
                    {{ cards.en.card4.subtitle }}
                </template>
                <template v-else>
                    {{ cards.pt.card4.subtitle }}
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle.vue"
    import store from "@/store"

    export default {
        name: "SolutionsSection",
        components: {
            SectionTitle,
        },

        data() {
            return {
                cards: {
                    pt: {
                        card1: {
                            title: "Transcrição de Áudio Assíncrono",
                            subtitle:
                                " API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala. ",
                        },
                        card2: {
                            title: "Transcrição de Áudio em tempo real",
                            subtitle:
                                " O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro. ",
                        },
                        card3: {
                            title: "Identificação de Idiomas em áudios",
                            subtitle:
                                "Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.",
                        },
                        card4: {
                            title: "Análise de sentimento a partir do áudio",
                            subtitle:
                                "Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.",
                        },
                    },
                    en: {
                        card1: {
                            title: "Asyncronous Speech-to-Text",
                            subtitle:
                                "API for asynchronous speech-to-text. We have the best speech-to-text engine in the world! The asynchronous speech-to-text is a strategic partner for your business. This is where you extract insights from audio or transcribe content in scale. ",
                        },
                        card2: {
                            title: "Live Speech-to-Text",
                            subtitle:
                                "The live-speech-to-text is a solution for live transcription of speech. Our transcripts guarantee that live transcripts are accessible and can be archived for future use. ",
                        },
                        card3: {
                            title: "Language Identification in Audio",
                            subtitle:
                                "Obtaining speech and insights globally. Our solution supports 52 languages.",
                        },
                        card4: {
                            title: "Sentiment Analysis from Audio",
                            subtitle:
                                "Find the most important moments in speech, differentiate positive and negative speech and take decisions more assertive with a deeper understanding.",
                        },
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
    .solutions-container {
        min-height: 100vh;
        background-image: url("../assets/banner.jpg");
    }

    .title {
        z-index: 100;
    }

    .card {
        min-height: 350px;
        background-color: rgba(71, 61, 139, 0.705);
        color: #fff;
        font-family: "Open Sans", sans-serif;
        border-radius: 10px;
    }

    .card:hover {
        background-color: rgba(71, 61, 139);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .card-title {
        border-bottom: 1px solid #fff;
    }
</style>
