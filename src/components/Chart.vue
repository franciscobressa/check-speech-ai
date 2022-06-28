<template>
    <div class="chart-container d-flex flex-wrap align-items-center px-4">
        <h1 class="chart-title mx-auto">
            <template v-if="language == 'en'">
                {{ title.en }}
            </template>
            <template v-else>
                {{ title.pt }}
            </template>
        </h1>
        <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            class="mx-auto col-12"
            :styles="styles"
            :width="width"
            :height="height"
        />
    </div>
</template>

<script>
    import { Bar } from "vue-chartjs/legacy"
    import store from "@/store"

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from "chart.js"

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    )

    export default {
        name: "BarChart",
        components: {
            Bar,
        },
        props: {
            chartId: {
                type: String,
                default: "bar-chart",
            },
            datasetIdKey: {
                type: String,
                default: "label",
            },
            width: {
                type: Number,
                default: 400,
            },
            height: {
                type: Number,
                default: 400,
            },
            cssClasses: {
                default: "",
                type: String,
            },
            styles: {
                type: Object,
                default: () => {},
            },
            plugins: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                chartData: {
                    labels: [
                        "Eficiência",
                        "Qualidade",
                        "Preço",
                        "Atendimento",
                        "Garantia",
                    ],
                    datasets: [
                        {
                            label: "CheckSpeech AI",
                            backgroundColor: "#483d8b",
                            data: [50, 45, 70, 45, 69],
                        },
                        {
                            label: "Concorrentes",
                            backgroundColor: "#007bff",
                            data: [5, 2, 3, 9, 5],
                        },
                    ],
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
                title: {
                    pt: "DE ACORDO COM ESSES GRÁFICOS NÓS SOMOS O MÁXIMO",
                    en: "ACCORDING TO THESE GRAPHICS WE ARE THE MAXIMUM",
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
    .chart-container {
        min-height: 100vh;
        background-color: #262829;
    }

    .chart-title {
        font-family: "Open Sans", sans-serif;
        color: darkslateblue;
        font-size: 1.8rem;
        text-align: center;
    }
</style>
