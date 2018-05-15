<template>
  <div>
      <mt-search
        v-model="serch"
        cancel-text="取消"
        :show="true"
        @click="queryJob"
        placeholder="搜索">
          <job-item></job-item>
      </mt-search>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search, Button } from 'mint-ui';
import JobItem from '../../components/jobItem';

Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
export default {
    name: 'job',
    data () {
        return {
            serch: ''
        };
    },
    components: {
        JobItem
    },
    methods: {
        queryJob () {
            console.log('query');
        }
    }
};
</script>

<style>

</style>
