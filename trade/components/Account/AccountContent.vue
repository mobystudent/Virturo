<template>
  <div class="page-content">
    <div class="page-inner">
      <Tabs :enabled="enaccount">
        <Tab label="Personal info">
          <PersonalInfo />
          <AccountLastLogin />
        </Tab>
        <Tab label="Security">
          <Authentication />
          <ChangePassword />
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>
import PersonalInfo from './AccountProfileInfo/PersonalInfo.vue';
import AccountLastLogin from './AccountProfileInfo/AccountLastLogin';
import Authentication from './AccountSecurity/Authentication.vue';
import ChangePassword from './AccountSecurity/ChangePassword';
import Tabs from '@/components/common/Tabs.vue';
import Tab from '@/components/common/Tab.vue';

export default {
  name: 'AccountContent',
  components: {
    Tabs,
    Tab,
    PersonalInfo,
    Authentication,
    AccountLastLogin,
    ChangePassword,
  },
  data() {
    return {
      enaccount: [0, 1],
    };
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  padding-bottom: 16px;
}

@media (max-width: 767px) {
  .page-inner {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
