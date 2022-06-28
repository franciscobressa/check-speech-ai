<template>
    <div>
        <b-navbar toggleable="lg" class="d-flex justify-content-around">
            <img
                src="@/assets/logos/logo-black.png"
                class="mr-auto"
                alt="logo"
                height="30"
            />

            <b-collapse id="nav-collapse" class="d-none d-md-flex" is-nav>
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
                        @click="openLinkedin()"
                        class="navbar-item text-center"
                    >
                        <b-img
                            src="@/assets/social/linkedin.svg"
                            height="25"
                            width="25"
                        ></b-img>
                    </b-nav-item>
                    <b-nav-item
                        @click="openInstagram()"
                        class="navbar-item text-center"
                    >
                        <b-img
                            src="@/assets/social/instagram.svg"
                            height="25"
                            width="25"
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
        name: "FooterPage",

        data() {
            return {
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
            openLinkedin() {
                window.open("https://www.linkedin.com/", "_blank")
            },
            openInstagram() {
                window.open("https://www.instagram.com/", "_blank")
            },
            scrollTo(id) {
                store.commit("scroll/selectScroll", id)
            },
        },

        computed: {
            language() {
                return store.state.language.selectedLanguage
            },
        },
    }
</script>

<style scoped>
    .navbar {
        font-family: "Open Sans", sans-serif;
        background-color: #fff;
    }

    .navbar-item a {
        color: black !important;
    }

    .navbar-item a:hover {
        color: darkslateblue !important;
    }
</style>
