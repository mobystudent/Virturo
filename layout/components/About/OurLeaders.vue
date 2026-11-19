<template>
  <section class="section our-leaders">
    <div class="wrapper">
      <h2 class="block-title">
        Committed to Your Success
      </h2>
      <div class="blocks-wrap">
        <div
          v-for="(item, index) in infoList"
          :key="index"
          class="block"
        >
          <component
            :is="item.labelComponent"
            @click.native="()=> openDialog(index)"
          />
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="874px"
    >
      <component :is="currentDialog" />
    </el-dialog>
  </section>
</template>

<script>
import SimpleBar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

import Button1 from './buttons/Button1.vue';
import Button2 from './buttons/Button2.vue';
import Button3 from './buttons/Button3.vue';
import Button4 from './buttons/Button4.vue';
import Button5 from './buttons/Button5.vue';

import Modal1 from './modals/Modal1.vue';
import Modal2 from './modals/Modal2.vue';
import Modal3 from './modals/Modal3.vue';
import Modal4 from './modals/Modal4.vue';
import Modal5 from './modals/Modal5.vue';

export default {
  components: {
    Button1,
    Button2,
    Button3,
    Button4,
    Button5,
    Modal1,
    Modal2,
    Modal3,
    Modal4,
    Modal5,
    SimpleBar,
  },
  data() {
    return {
      infoList: [
        {
          labelComponent: 'Button1',
          dialogComponent: 'Modal1',
        },
        {
          labelComponent: 'Button2',
          dialogComponent: 'Modal2',
        },
        {
          labelComponent: 'Button3',
          dialogComponent: 'Modal3',
        },
        {
          labelComponent: 'Button4',
          dialogComponent: 'Modal4',
        },
        {
          labelComponent: 'Button5',
          dialogComponent: 'Modal5',
        },
      ],
      active: 0,
      dialogVisible: false,
      dialogHeight: '90%',
    };
  },
  computed: {
    currentDialog() {
      return this.infoList[this.active].dialogComponent;
    },
  },
  methods: {
    openDialog(index) {
      this.active = index;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped lang="scss">
.section {
    padding: 60px 0;
    position: relative;
    @media (max-width: 768px) {
        padding-top: 40px;
        padding-bottom: 60px;
    }

    .wrapper {
        max-width: 1340px;
        padding: 0 30px;
        margin: 0 auto;
        position: relative;
        z-index: 1;

        @media (max-width: 1024px) {
            width: 100%;
        }

        @media (max-width: 768px) {
            padding: 0 15px;
        }
    }
}

.block-title {
    margin-bottom: 40px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-align: center;
    @media (max-width: 992px) {
        font-size: 38px;
    }
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 120%; /* 38.4px */
    }
}

.caption {
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
    @media (max-width: 768px) {
        margin-bottom: 45px;
    }
}

.blocks-wrap {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    gap: 42px 60px;
    @media (max-width: 768px) {
        gap: 42px 30px;
    }

    @media (max-width: 696px) {
        gap: 42px 10px;
    }
}

.block {
    width: 100%;
    max-width: 318px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 480px) {
        max-width: 100%;
    }
}

.wrap-img {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
}

.img {
    height: 40px;
    width: 40px;
}

.title {
    margin-bottom: 16px;
    color: #074429;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
}

.description {
    color: #282929;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
}
</style>
