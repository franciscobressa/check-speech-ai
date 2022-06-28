<template>
    <div>
        <b-navbar
            toggleable="lg"
            type="dark"
            class="d-flex justify-content-around"
        >
            <img
                src="@/assets/logos/logo-white.png"
                class="mr-auto"
                alt="logo"
                height="30"
            />
            <p style="color: #fff">{{ scroll }}</p>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav
                    class="mx-auto col-md-6 d-flex justify-content-around"
                >
                    <b-nav-item
                        v-for="(item, index) in navItems"
                        :key="index"
                        class="navbar-item text-center"
                        @click="scrollTo(item.id)"
                    >
                        <template v-if="language == 'en'">
                            {{ item.en_name }}
                        </template>
                        <template v-else>
                            {{ item.pt_name }}
                        </template>
                    </b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav>
                    <b-nav-item
                        class="navbar-item text-center"
                        @click="selectLanguage()"
                    >
                        <template v-if="language == 'en'"> pt </template>
                        <template v-else> en </template>
                        <b-img
                            src="@/assets/countries/united-states.svg"
                            height="25"
                            width="25"
                            v-if="language != 'en'"
                        ></b-img>
                        <b-img
                            src="@/assets/countries/brazil.svg"
                            height="25"
                            width="25"
                            v-else
                        ></b-img>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
    import store from "@/store"
    export default {
        name: "NavBar",

        data() {
            return {
                english: true,
                navItems: [
                    {
                        pt_name: "SOLUÇÕES",
                        en_name: "SOLUTIONS",
                        id: "solutions",
                        link: "#",
                    },
                    {
                        pt_name: "CLIENTES",
                        en_name: "CUSTOMERS",
                        id: "customers",
                        link: "#",
                    },
                    {
                        pt_name: "PREÇOS",
                        en_name: "PRICES",
                        id: "prices",
                        link: "#",
                    },
                    {
                        pt_name: "CONTATO",
                        en_name: "CONTACT",
                        id: "contact",
                        link: "#",
                    },
                ],
            }
        },

        methods: {
            selectLanguage() {
                if (this.language == "en") {
                    store.commit("language/setLanguage", "pt")
                } else {
                    store.commit("language/setLanguage", "en")
                }
            },

            scrollTo(id) {
                store.commit("scroll/selectScroll", id)
            },
        },

        computed: {
            language() {
                return store.state.language.selectedLanguage
            },

            scroll() {
                return store.state.scroll.selectedScroll
            },
        },
    }
</script>

<style scoped>
    .navbar {
        font-family: "Open Sans", sans-serif;
        background-color: #262829;
    }

    .navbar-item a {
        color: #fff !important;
    }

    .navbar-item a:hover {
        color: darkslateblue !important;
    }
</style>
