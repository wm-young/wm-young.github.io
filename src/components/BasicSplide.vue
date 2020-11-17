<template>
  <div class="wrapper">
    <splide
      :options="options"
      @splide:moved="moved"
    >
      <splide-slide v-for="slide in slidesList" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    export default {
        components: {
            Splide,
            SplideSlide,
        },
        props: [
          'slidesList'
        ],
        data() {
            return {
                options: {
                    rewind: true,
                    gap   : '1rem',
                    perPage: 1,
	                  focus  : 'center',
                }
            };
        },
        methods: {
            moved( splide, newIndex ) {
                //console.log( 'moved', newIndex );
            },
        },
    }
</script>