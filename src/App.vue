<template>
    <div id="app">
        <Navbar class="fixed-top"></Navbar>
        <Banner></Banner>
        <Presentation id="presentation"></Presentation>
        <Chart class="mt-5 mt-md-0"></Chart>
        <Partners id="customers"></Partners>
        <Solutions id="solutions"></Solutions>
        <Prices id="prices"></Prices>
        <Contact id="contact"></Contact>
        <Footer></Footer>
        <Cookies></Cookies>
    </div>
</template>

<script>
    import store from "@/store"
    import Navbar from "./components/Navbar.vue"
    import Banner from "./components/Banner.vue"
    import Presentation from "./components/Presentation.vue"
    import Chart from "./components/Chart.vue"
    import Partners from "./components/Partners.vue"
    import Solutions from "./components/Solutions.vue"
    import Prices from "./components/Prices.vue"
    import Contact from "./components/Contact.vue"
    import Footer from "./components/Footer.vue"
    import Cookies from "./components/Cookies.vue"
    export default {
        name: "App",
        components: {
            Navbar,
            Banner,
            Presentation,
            Chart,
            Partners,
            Solutions,
            Prices,
            Contact,
            Footer,
            Cookies,
        },

        computed: {
            scroll() {
                return store.state.scroll.selectedScroll
            },
        },

        watch: {
            scroll() {
                // scroll to id
                if (this.scroll != "") {
                    let element = document.getElementById(this.scroll)
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    }
                    store.commit("scroll/selectScroll", "")
                }
            },
        },
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    body {
        background-color: #262829;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        background-color: #343a4065;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(146, 139, 139);
        border-radius: 10px;
    }
</style>
