<template>
    <div class="job-item">
        <div class="job-img">
            <img :src="jobInfo.firm.logo" alt="job-item">
        </div>
        <div class="job-detail">
            <div class="left-side">
                <div class="name">{{jobInfo.jobName}}</div>
                <div class="light-color">{{jobInfo.firm.name}}</div>
                <div class="light-color">{{jobInfo.cityName + '|' + jobInfo.cityAddress + '|' + jobInfo.workYear}}</div>
            </div>
            <div class="right-side">
              <div class="salary">
                {{jobInfo.workWage}}K
              </div>
              <div class="date light-color">
                  {{jobInfo.updateTime | moment}}
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../utils/filter.js';
export default {
    name: 'job-item',
    props: {
        jobInfo: {
            type: Object,
            default: function () {
                return {
                    firm: {}
                };
            }
        }
    },
    data () {
        return {

        };
    },
    components: {

    }
};
</script>

<style lang="scss" scoped>
.job-item {
    height: 100px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: center;
    .job-img {
        display: flex;
        flex: 0 0 60px;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
        }
    }
    .job-detail {
        padding: 8px;
        display: flex;
        flex: 5 1 auto;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        .light-color {
            color: #666666;
        }
        .left-side {
          display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .name {
                color: #000000;
            }
        }
        .right-side {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            .salary {
                color: orange;
            }
            .date {
                font-size: 0.8rem;
            }
        }
    }
}

</style>
