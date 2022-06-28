<template>
    <div>
        <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            background="#ababab"
            img-width="600"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                img-src="@/assets/carousel/carousel-1.png"
            ></b-carousel-slide>
            <b-carousel-slide
                img-src="@/assets/carousel/carousel-2.png"
            ></b-carousel-slide>            
            <b-carousel-slide
                img-src="@/assets/carousel/carousel-3.png"
            ></b-carousel-slide>                        
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "MyCarousel",
        data() {
            return {
                sliding: null,
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            },
        },
    }
</script>
