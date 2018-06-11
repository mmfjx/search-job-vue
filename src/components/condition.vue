<template>
    <div>
        <div class="btn-container">
            <span class="btn" :class="{ active: jobConditionActive}" @click="jobCondition">职位</span>
            <span class="btn" :class="{ active: companyConditionActive}" @click="companyCondition">公司</span>
            <span class="btn" :class="{ active: sortActive}" @click="sort">排序</span>
        </div>
        <div v-if="jobConditionActive" class="popup">
            <div class="popup-inner">
                <div>发布时间</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
export default {
    name: 'condition',
    props: {
        mask: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            jobConditionActive: false,
            companyConditionActive: false,
            sortActive: false
        };
    },
    components: {

    },
    computed: {
        needMask: {
            get: function () {
                return this.mask;
            },
            // setter
            set: function (newValue) {
                this.$emit('update:mask', newValue);
            }
        }
    },
    methods: {
        jobCondition () {
            this.jobConditionActive = true;
            this.needMask = true;
        },
        companyCondition () {

        },
        sort () {

        }
    }
};
</script>

<style lang="scss" scoped>
.btn-container {
    margin-top: 8px;
    margin-bottom: 5px;
    display: flex;
    height: 40px;
    font-size: 0.9rem;
    justify-content: space-between;
    .btn {
        flex: auto;
        text-align: center;
        padding: 5px;
        vertical-align: middle;
    }
    .active {
        color:lightskyblue;
    }
}
.popup {
    top: 100px;
    width: 100%;
    width: 100vw;
    .popup-innner {
        text-align: left;
    }
}

</style>
