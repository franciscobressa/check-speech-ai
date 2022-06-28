<template>
    <div class="contact-container py-4 px-5">
        <SectionTitle
            color="#69479c"
            v-if="language == 'pt'"
            title="CONTATO"
        ></SectionTitle>
        <SectionTitle color="#69479c" v-else title="CONTACT"></SectionTitle>
        <div class="form-wrapper px-md-5 mx-auto">
            <div class="row">
                <div class="form-container col-md-7 col-12">
                    <div class="input-group col-12">
                        <input
                            type="text"
                            class="input-field col-12"
                            :placeholder="language == 'en' ? 'Name' : 'Nome'"
                        />
                    </div>
                    <div class="input-group col-12">
                        <input
                            type="email"
                            class="input-field col-12"
                            :placeholder="language == 'en' ? 'Email' : 'Email'"
                        />
                    </div>
                    <div class="input-group col-12">
                        <div class="col-2 m-0 p-0">
                            <b-dropdown>
                                <template #button-content>
                                    <b-img
                                        v-if="selectedCountry === 'en'"
                                        src="@/assets/countries/united-states.svg"
                                        height="25"
                                        width="25"
                                    ></b-img>
                                    <b-img
                                        v-else
                                        src="@/assets/countries/brazil.svg"
                                        height="25"
                                        width="25"
                                    ></b-img>
                                </template>
                                <b-dropdown-item
                                    class="d-flex justify-content-around"
                                    @click="selectedCountry = 'en'"
                                >
                                    <b-img
                                        src="@/assets/countries/united-states.svg"
                                        height="25"
                                        width="25"
                                    ></b-img>
                                    +1
                                </b-dropdown-item>
                                <b-dropdown-item
                                    class="d-flex justify-content-around"
                                    @click="selectedCountry = 'br'"
                                >
                                    <b-img
                                        src="@/assets/countries/brazil.svg"
                                        height="25"
                                        width="25"
                                    ></b-img>
                                    +55
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <input
                            type="tel"
                            class="input-field col-10"
                            :placeholder="phonePlaceholder"
                            id="phone"
                        />
                    </div>
                    <div class="input-group col-12">
                        <textarea
                            class="input-field col-12"
                            :placeholder="
                                language == 'en' ? 'Message' : 'Mensagem'
                            "
                        ></textarea>
                    </div>
                    <!-- concordar com as regras -->
                    <div class="input-group col-12 d-flex align-items-center">
                        <input
                            type="checkbox"
                            class="input-field mr-2"
                            id="rules"
                            v-model="aceptedRules"
                        />
                        <small for="rules">
                            <template v-if="language == 'pt'">
                                Eu concordo com a Política de Privacidade
                            </template>
                            <template v-else>
                                I accept the Privacy Policy
                            </template>
                        </small>
                    </div>
                    <div class="input-group col-12">
                        <button
                            class="col-12 send"
                            @click="submit()"
                            target="_blank"
                        >
                            <template v-if="language == 'pt'">
                                Enviar
                            </template>
                            <template v-else> Send </template>
                        </button>
                    </div>
                </div>

                <div class="illustration-container col-md-5 col-12">
                    <img
                        class="img-fluid"
                        src="@/assets/illustrations/contact.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle.vue"
    import store from "@/store"
    export default {
        name: "FormContact",
        components: {
            SectionTitle,
        },

        data() {
            return {
                selectedCountry: "en",
                aceptedRules: false,
            }
        },

        computed: {
            phonePlaceholder() {
                return `+${
                    this.selectedCountry === "en" ? "1" : "55"
                } (11) 99999-9999`
            },
            language() {
                return store.state.language.selectedLanguage
            },
        },
    }
</script>

<style>
    .contact-container {
        min-height: 100vh;
        background-color: #262829;
        color: #6250da;
    }

    .input-group {
        margin-bottom: 1rem;
    }

    .input-field {
        border: none;
        background-color: #34363677;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        outline: none;
    }

    .input-group-text {
        padding: 0;
    }

    .b-dropdown {
        width: 100%;
        height: 100%;
    }

    .dropdown-toggle {
        background-color: #34363677;
        border: none;
    }

    #phone {
        border-radius: 0 1rem 1rem 0;
    }

    .send {
        background-color: darkslateblue;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0.7em 1em;
        font-size: 1em;
        font-weight: bold;
    }
</style>
