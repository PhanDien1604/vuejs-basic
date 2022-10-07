<template lang="">
  <a-layout-header
    :style="{backgroundColor: '#fff', padding: '0 24px', position: 'fixed', 
    width: !collapsed ? 'calc(100% - 200px)' : 'calc(100% - 80px)', transition: 'all 0.2s', boxShadow: '0 5px 10px -10px gray'}"
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
            <FullscreenOutlined class="trigger" :style="{margin: '0 8px'}"/>
            <FullscreenExitOutlined class="trigger" :style="{margin: '0 8px', display: 'none'}"/>
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
  },

  methods: {
    clickMenu() {
      this.$emit('checkCollapsed');
    },
    changeTheme() {
      this.$emit('checkThemed')
    }
  },
}
</script>
<style>
  
</style>