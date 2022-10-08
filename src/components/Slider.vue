<template lang="">
  <a-layout-sider
    :style="{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, padding: '8px'}"
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    :theme="themed"
    class="slider"
  >
      <div class="boxLogo">
        <a-avatar :size="40">
          <template #icon>
            <img src="@/assets/logo.png" alt="">
          </template>
        </a-avatar>
        <span :class="{txtUsername:true, txtUsernameCollapsed:collapsed}" 
          :style="{marginLeft: '8px', color: themed === 'light' ? 'black' : '#fff'}">
          Phan Quang Điện
        </span>
      </div>

      <div class="box-search" :style="{display: collapsed ? 'none' : 'flex', padding: '16px 0', borderTop: '2px solid #f8f8f8'}">
        <a-input 
          v-model:value="value" 
          placeholder="Search" 
          :style="{width: 'calc(100% - 48px)', borderRadius: '4px 0 0 4px'}" 
        />

        <a-button type="primary" 
          :style="{width: '48px', borderRadius: '0 4px 4px 0'}"
          size="large"
        >
          <template #icon><SearchOutlined /></template>
        </a-button>
      </div>

    <div :style="{display: 'flex', flexWrap: 'wrap', alignContent: 'space-between', height: collapsed ? 'calc(100% - 148px + 74px)' : 'calc(100% - 148px)'}">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        :theme="themed"
        mode="inline"
      >
        <a-menu-item key="1">
          <router-link to="/">
            <DashboardOutlined />
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="users">
          <router-link to="/users">
            <TeamOutlined />
            <span>Users</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="products">
          <router-link to="/products">
            <SkinOutlined />
            <span>Products</span>
          </router-link>
        </a-menu-item>

        <a-sub-menu key="orders">
          <template #title>
            <span>
              <BulbOutlined />
              <span>Order</span>
            </span>
          </template>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="warehouse">
          <router-link to="/warehouse">
            <HomeOutlined />
            <span>Warehouse</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="statistical">
          <router-link to="/statistical">
            <BarChartOutlined />
            <span>Statistical</span>
          </router-link>
        </a-menu-item>
        
        <a-menu-item key="category">
          <router-link to="/category">
            <UnorderedListOutlined />
            <span>Category</span>
          </router-link>
        </a-menu-item>
      </a-menu>

      <a-menu
        v-model:selectedKeys="selectedKeys"
        :theme="themed"
        mode="inline"
      >
        <a-menu-item key="contact">
          <router-link to="/contact">
            <ContactsOutlined />
            <span>Contact</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="account">
          <router-link to="/account">
            <UserOutlined />
            <span>Account</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="setting">
          <router-link to="/setting">
            <SettingOutlined />
            <span>Setting</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>
<script>
import {UserOutlined, VideoCameraOutlined, UploadOutlined, SearchOutlined, SettingOutlined, 
  HomeOutlined, ContactsOutlined, BarChartOutlined, IdcardOutlined, SkinOutlined,
  UnorderedListOutlined, DashboardOutlined, TeamOutlined, BulbOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SearchOutlined,
    SettingOutlined,
    HomeOutlined,
    ContactsOutlined,
    BarChartOutlined,
    IdcardOutlined,
    SkinOutlined,
    UnorderedListOutlined,
    DashboardOutlined,
    TeamOutlined,
    BulbOutlined
  },
  props: {
      collapsed: Boolean,
      themed: String,
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },
}
</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.slider::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slider {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.boxLogo {
  margin: 16px 0px;
  margin-left: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;  
}
.txtUsername{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: calc(100% - 48px);
}
.txtUsernameCollapsed {
  display: none;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
.ant-menu-item {
  border-radius: 4px;
}

.ant-tooltip .anticon {
  margin-right: 8px;
}
.ant-menu-vertical.ant-menu-sub {
  margin-left: 8px !important;
}
.ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed {
  width: 100% !important;
}
.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border: none !important;
}
</style>