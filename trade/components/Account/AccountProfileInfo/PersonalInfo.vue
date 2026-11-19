<template>
  <div class="section">
    <h2 class="title">Profile info</h2>
    <div class="container">
      <AccountRowInfo :title="'Full Name'" :content="user.fullName" />
      <AccountRowInfo :title="'Email'" :content="user.email" />
      <AccountRowInfo :title="'Phone'" :content="user.phone" />
      <AccountRowInfo :title="'Date of Birth'" :content="user.birthDate ? formatDate(user.birthDate) : ''" />
      <AccountRowInfo :title="'Country'" :content="countryName" :img="formatCountry(user.location.countryCode).toLocaleLowerCase()" />
      <AccountRowInfo :title="'Account Type'" :content="user.accountType" />
      <AccountRowInfo :title="'KYC Status'" :content="KYCEnum[user.kyc] || ''" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AccountRowInfo from './AccountRowInfo';
import countries from '@/components/common/PhoneNumberInput/countriesData';
import { KYCEnum } from '@/constants';

export default {
  name: 'PersonalInfo',
  components: { AccountRowInfo },
  data() {
    return {
      KYCEnum,
      countryList: countries,
      countryName: '',
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    this.selectedCountry = this.countryList.find(item => item.isoCode === this.user.location.countryCode);
    this.countryName = this.selectedCountry ? this.selectedCountry.county : '';
  },
  methods: {
    formatDate: date => {
      const parsedDate = new Date(date);
      const day = parsedDate.getDate().toString().padStart(2, '0');
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = parsedDate.getFullYear().toString();
      const formattedDate = `${day}.${month}.${year}`;
      return formattedDate;
    },
    formatCountry: code => {
      const countryData = countries.find(item => item.code === code);
      return countryData ? countryData.county : code;
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  max-width: 653px;
  padding-top: 24px;
}

.title {
  color: $dark-grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 767px) {
  .section {
    max-width: 100%;
  }
}
</style>
