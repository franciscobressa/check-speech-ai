<template>
    <div class="solutions-container py-4">
        <SectionTitle
            class="title"
            title="PRICES"
            v-if="language == 'en'"
            color="#262829"
        />
        <SectionTitle class="title" title="PREÇOS" v-else color="#262829" />
        <div class="row w-75 d-flex mx-auto d-flex justify-content-around">
            <template v-if="language == 'pt'">
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="person"></b-icon>
                        <h4 class="mb-0 ml-1">Beginner</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h3 class="text-center mt-4 mb-0">R$29/mês</h3>
                        <p class="text-center mb-0">ou R$328/ano</p>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>
                                Transcrição de Áudio Assíncrono (120min)<br />
                                <small>R$0,20 / min excedente</small>
                            </li>
                            <li>
                                Transcrição de Áudio em tempo real (90min)<br />
                                <small>R$0,40 / min excedente</small>
                            </li>
                            <li>
                                Identificação de Idiomas em áudios (200min)<br />
                                <small>R$0,05 / min excedente</small>
                            </li>
                            <li>
                                Análise de sentimento a partir do áudio
                                pré-gravado (120 min) <br />
                                <small>R$0,40 / min excedente</small>
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button class="w-100 buy-button" target="_blank">
                            Adiquirir
                        </button>
                    </b-card-footer>
                </b-card>
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="building"></b-icon>
                        <h4 class="mb-0 ml-1">Business</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h3 class="text-center mt-4 mb-0">R$44/mês</h3>
                        <p class="text-center mb-0">ou R$499/ano</p>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>
                                Transcrição de Áudio Assíncrono (200min)<br />
                                <small>R$0,15 / min excedente</small>
                            </li>
                            <li>
                                Transcrição de Áudio em tempo real (120min)<br />
                                <small>R$0,40 / min excedente</small>
                            </li>
                            <li>
                                Identificação de Idiomas em áudios (500min)<br />
                                <small>R$0,03 / min excedente</small>
                            </li>
                            <li>
                                Análise de sentimento a partir do áudio
                                pré-gravado (200 min) <br />
                                <small>R$0,35 / min excedente</small>
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button class="w-100 buy-button" target="_blank">
                            Adiquirir
                        </button>
                    </b-card-footer>
                </b-card>
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="bookmark-star-fill"></b-icon>
                        <h4 class="mb-0 ml-1">Enterprise</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h4 class="text-center mt-4 auto mb-0">
                            Preço sob consulta
                        </h4>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>Preços especiais para grandes volumes</li>
                            <li>Prioridade no suporte técnico</li>
                            <li>Gestor de conta dedicado</li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button
                            @click="scrollTo('contact')"
                            class="w-100 buy-button"
                            target="_blank"
                        >
                            Consulte
                        </button>
                    </b-card-footer>
                </b-card>
            </template>
            <template v-if="language == 'en'">
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="person"></b-icon>
                        <h4 class="mb-0 ml-1">Beginner</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h3 class="text-center mt-4 mb-0">R$29/month</h3>
                        <p class="text-center mb-0">ou R$328/year</p>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>
                                Asynchronous Audio Transcription (120min)<br />
                                <small>R$0,20 / min excedent</small>
                            </li>
                            <li>
                                Real-time Audio Transcription (90min)<br />
                                <small>R$0,40 / min excedent</small>
                            </li>
                            <li>
                                Language Identification in Audio (200min)<br />
                                <small>R$0,05 / min excedent</small>
                            </li>
                            <li>
                                Sentiment Analysis from Audio (120 min) <br />
                                <small>R$0,40 / min excedent</small>
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button class="w-100 buy-button" target="_blank">
                            Purchase
                        </button>
                    </b-card-footer>
                </b-card>
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="building"></b-icon>
                        <h4 class="mb-0 ml-1">Business</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h3 class="text-center mt-4 mb-0">R$44/month</h3>
                        <p class="text-center mb-0">or R$499/year</p>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>
                                Asynchronous Audio Transcription (200min)<br />
                                <small>R$0,15 / min excedent</small>
                            </li>
                            <li>
                                Real-time Audio Transcription (120min)<br />
                                <small>R$0,40 / min excedent</small>
                            </li>
                            <li>
                                Language Identification in Audio (500min)<br />
                                <small>R$0,03 / min excedent</small>
                            </li>
                            <li>
                                Sentiment Analysis from Audio (200 min) <br />
                                <small>R$0,35 / min excedent</small>
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button class="w-100 buy-button" target="_blank">
                            Purchase
                        </button>
                    </b-card-footer>
                </b-card>
                <b-card class="col-md-4 col-12 mb-4 mb-md-0">
                    <b-card-title
                        class="pb-3 mt-3 text-center d-flex align-items-center justify-content-center"
                    >
                        <b-icon icon="bookmark-star-fill"></b-icon>
                        <h4 class="mb-0 ml-1">Enterprise</h4>
                    </b-card-title>
                    <div class="price-container">
                        <h4 class="text-center mt-4 auto mb-0">
                            Price on request
                        </h4>
                    </div>
                    <b-card-body class="pr-0 pb-0">
                        <ul class="lista-beneficios">
                            <li>Special prices for large volumes</li>
                            <li>Priority support</li>
                            <li>Dedicated account manager</li>
                        </ul>
                    </b-card-body>
                    <b-card-footer>
                        <button
                            @click="scrollTo('contact')"
                            class="w-100 buy-button"
                            target="_blank"
                        >
                            Consult
                        </button>
                    </b-card-footer>
                </b-card>
            </template>
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
    .solutions-container {
        min-height: 100vh;
        background-color: #f5f5f5;
    }

    .card {
        min-height: 350px;
        background-color: #262829;
        color: #fff;
        font-family: "Open Sans", sans-serif;
        border-radius: 0;
    }

    .card-body {
        min-height: 370px;
    }

    .price-container {
        min-height: 70px;
    }

    .card-title {
        border-bottom: 1px solid #fff;
    }

    .lista-beneficios {
        padding: 0;
    }

    .lista-beneficios li {
        font-size: 1em;
        margin-bottom: 0.5em;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    .buy-button {
        background-color: darkslateblue;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0.7em 1em;
        font-size: 1em;
        font-weight: bold;
    }
</style>
