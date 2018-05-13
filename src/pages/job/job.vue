<template>
 <div>
   <mt-search
    v-model="serch"
    cancel-text="取消"
    :show="true"
    placeholder="搜索">
  </mt-search>
 </div>
</template>

<script>
import Vue from 'vue';
import { Search, Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
export default {
    name: 'job',
    data () {
        return {
            serch: ''
        };
    }
};
</script>

<style>

</style>
