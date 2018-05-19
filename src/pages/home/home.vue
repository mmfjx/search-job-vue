<template>
    <div class="hello">
        <mt-tabbar v-model="selected" :fixed="true">
          <mt-tab-item id="job">
            <img slot="icon" src="../../assets/job.svg">
          </mt-tab-item>
          <mt-tab-item id="wo">
            <img slot="icon" src="../../assets/wo.svg">
          </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="selected" :swipeable="true">
          <mt-tab-container-item id="job">
             <job></job>
          </mt-tab-container-item>
          <mt-tab-container-item id="wo">
            wo
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import Job from '../job/job';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
    name: 'Home',
    data () {
        return {
            selected: 'job'
        };
    },
    components: {
        Job
    }
};
</script>

<style scoped>

</style>
