<template>
    <div class="">
        <mt-button >default</mt-button>
        <mt-button >primary</mt-button>
        <mt-button >danger</mt-button>
        <mt-button >danger</mt-button>
    </div>
</template>

<script>
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
export default {
    name: 'condition',
    data () {
        return {

        }
    },
    components: {

    }
}
</script>

<style>


</style>
