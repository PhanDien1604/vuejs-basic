<template>
  <div class="box-login">
    <a-form
    :model="formState"
    name="basic"
    class="login-form"
    v-bind="layout"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" style="color: rgba(0, 0, 0, 0.25)"/>
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" style="color: rgba(0, 0, 0, 0.25)"/>
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item v-bind="tailLayout">
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember" >Remember me</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
    </a-form-item>

    <a-form-item v-bind="tailLayout">
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="">register now!</a>
    </a-form-item>
  </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });

    const layout = {
      labelCol: {
        span: 6,
      },
    };
    const tailLayout = {
      wrapperCol: { 
        sm: {
          offset: 6, 
        }
      },
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      layout,
      tailLayout
    };
  },

});
</script>
<style>
.box-login {
  padding-top: 5rem;
}
.login-form {
  padding: 2rem !important;
  background: #ececec;
  border-radius: 4px;
  width: 400px;
  margin: auto !important;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>