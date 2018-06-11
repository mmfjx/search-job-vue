<template>
    <div class="searchbar">
        <div class="searchbar-inner">
            <image class="search" src="../assets/job.png"/>
            <input
            ref="input"
            @click="visible = true"
            type="search"
            v-model="currentValue"
            :placeholder="placeholder"
            class="searchbar-core">
        </div>
        <a
            class="searchbar-cancel"
            @click="visible = false, currentValue = ''"
            v-show="visible"
            v-text="cancelText">
        </a>
    </div>
</template>

<script>
import Vue from 'vue';
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
export default {
    name: 'search',
    data () {
        return {
            visible: false,
            currentValue: this.value
        };
    },

    watch: {
        currentValue (val) {
            this.$emit('input', val);
        },
        value (val) {
            this.currentValue = val;
        },
        visible () {
            this.$emit('update:visible', this.visible);
        }
    },

    props: {
        value: String,
        autofocus: Boolean,
        show: Boolean,
        cancelText: {
            default: '取消'
        },
        placeholder: {
            default: '搜索'
        }
        // result: Array
    },

    mounted () {
        this.autofocus && this.$refs.input.focus();
    }
};
</script>
<style lang="scss" scoped>
// .search {
//     overflow: hidden;
//     }
    .searchbar {
      position: relative;
      align-items: center;
      background-color:lightsalmon;
      box-sizing: border-box;
      display: flex;
      padding: 8px 10px;
      z-index: 1;

     .searchbar-inner {
        align-items: center;
        background-color: #ffffff;
        border-radius: 2px;
        display: flex;
        flex: 1;
        height: 28px;
        padding: 4px 6px;

        .search {
          font-size: 12px;
          color: lightsalmon;
        }
      }

     .searchbar-core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
      }

      .searchbar-cancel {
        color:lightskyblue;
        margin-left: 10px;
        text-decoration: none;
      }
    }
</style>
