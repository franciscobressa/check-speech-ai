<template>
    <b-card v-if="!acepted">
        <b-card-body>
            <b-card-title> Cookies </b-card-title>

            <b-card-text>
                Este site utiliza cookies para melhorar a experiência do
                usuário.
            </b-card-text>
            <b-card-text> Aceite para continuar navegando </b-card-text>
            <b-button @click="acceptCookies()" class="btn-acept">
                Aceitar
            </b-button>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "AceptCookies",
        data() {
            return {
                acepted: false,
            }
        },
        methods: {
            acceptCookies() {
                this.acepted = true
            },
        },
    }
</script>

<style scoped>
    .card {
        position: fixed;
        z-index: 99999;
        bottom: 0;
        right: 0;
        margin: 0 1rem 1rem 0;
        background-color: rgba(0, 0, 0, 0.548);
        color: #fff;
    }

    .btn-acept {
        background-color: darkslateblue;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0.7em 1em;
        font-size: 1em;
        font-weight: bold;
    }
</style>
