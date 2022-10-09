<template>
    <a-layout-content>
      <a-button type="primary">
        <router-link :to="{name: 'users.create'}">
          Add
        </router-link>
      </a-button>

      <a-table 
        :dataSource="dataSource" 
        :columns="columns" 
        :pagination="pagination"
        @change="handleTableChange"
        :style="{marginTop: '1rem'}"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span style="color: #1890ff">Name</span>
          </template>
        </template>
        <template
          #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
        >
          <div style="padding: 8px">
            <a-input
              ref="searchInput"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
              @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
            />
            <a-button
              type="primary"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template #icon><SearchOutlined /></template>
              Search
            </a-button>
            <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
              Reset
            </a-button>
          </div>
        </template>
        <template #customFilterIcon="{ filtered, column }">
          <template v-if="column.key === 'name'">
            <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
          </template>
          <template v-else>
            <FilterFilled :style="{ color: filtered ? '#108ee9' : undefined }" />
          </template>
        </template>

        <template #bodyCell="{ text, column }">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else-if="column.key === 'action'">
            <span>
              <router-link :to="{name: 'users.detail'}">More</router-link>
            </span>
          </template>
          <template v-else-if="column.key === 'avatar'">
            <span>
              <div class="avatar">
                <img src="../../assets/logo.png" alt="">
              </div>
            </span>
          </template>
        </template>
      </a-table>
    </a-layout-content>
</template>
<script>
import Admin from "@/layouts/Admin"
import { SmileOutlined, DownOutlined ,SearchOutlined, FilterFilled} from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    customFilterDropdown: true,
    onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
    sorter: (a, b) => a.name.localeCompare(b.name),
  }, 
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  }, 
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
    filters: [
      {
        text: 'Male',
        value: 'male',
      }, 
      {
        text: 'Female',
        value: 'female',
      }
    ],
    onFilter: (value, record) => record.sex.indexOf(value) === 0,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [
      {
        text: 'New York',
        value: 'New York',
      }, 
      {
        text: 'London',
        value: 'London',
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  }, 
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  }, 
  {
    title: 'Action',
    key: 'action',
  }
];
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    sex: 'female',
    address: 'New York No. 1 Lake Park',
    status: 'Doing',
  }, 
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    sex: 'female',
    address: 'London No. 1 Lake Park',
    status: 'Doing',
  }, 
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    sex: 'male',
    address: 'Sidney No. 1 Lake Park',
    status: 'Close',
  }
];
export default defineComponent({
  created() {
    this.$emit('setSelectedKeys', ['users'])
    this.$emit('update:layout', Admin)
  },
  components: {
    SmileOutlined,
    DownOutlined,
    SearchOutlined,
    FilterFilled
  },

  setup() {
    const pagination = { 
      defaultPageSize: 2, 
      showSizeChanger: false, 
    }
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });
    const searchInput = ref();
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = clearFilters => {
      clearFilters({
        confirm: true,
      });
      state.searchText = '';
    };

    return {
      dataSource,
      columns,
      pagination,
      handleSearch,
      handleReset,
      searchInput,
      ...toRefs(state),
    };
  },
})
</script>
<style>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
.avatar {
  width: 40px;
  height: 40px;
  background: #ccc;
  overflow: hidden;
  border-radius: 50%;
}
.avatar img {
  width: 100%;
}
</style>