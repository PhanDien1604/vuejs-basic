<template lang="">
  <a-layout-header
    class="header"
    :style="{width: !collapsed ? 'calc(100% - 200px)' : 'calc(100% - 80px)'}"
  >
    <a-row type="flex" justify="space-between">
      <a-col>
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="clickMenu"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="clickMenu"
        />
      </a-col>
      <a-col>
        <a-row>
          <a-col>
            <BellOutlined class="trigger" :style="{margin: '0 8px'}" />
          </a-col>
          <a-col>
            <WechatOutlined class="trigger" :style="{margin: '0 8px'}" />
          </a-col>
          <a-col>
            <ExportOutlined class="trigger" :style="{margin: '0 8px'}"/>
          </a-col>
          <a-col>
            <FullscreenOutlined class="trigger" 
              :style="{margin: '0 8px', display: !fullscreen ? '' : 'none'}" 
              @click="changeScreen" 
            />
            <FullscreenExitOutlined class="trigger" 
              :style="{margin: '0 8px', display: fullscreen ? '' : 'none'}" 
              @click="changeScreen" 
            />
          </a-col>
          <a-col>
            <a-switch :checked="themed ==='dark'" @change="changeTheme" :style="{marginLeft: '16px'}"/>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import {
  MenuUnfoldOutlined, WechatOutlined, BellOutlined, ExportOutlined, FullscreenOutlined, FullscreenExitOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    WechatOutlined,
    BellOutlined,
    ExportOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined
  },

  props: {
      collapsed: Boolean,
      themed: String,
      fullscreen: Boolean
  },

  methods: {
    clickMenu() {
      this.$emit('checkCollapsed')
    },
    changeTheme() {
      this.$emit('checkThemed')
    },
    changeScreen() {
      this.$emit('clickFullScreen')
    }
  },
}
</script>
<style>
.header {
  background: #fff !important;
  padding: 0 24px !important;
  position: fixed;
  transition: all 0.2s;
  box-shadow: 0 5px 10px -10px gray;
  z-index: 1000;
}
</style>