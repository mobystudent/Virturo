<template>
  <span class="link-icon">
    <template v-if="name === 'trade'">
      <TradeIcon />
    </template>
    <template v-else-if="name === 'account'">
      <AccountIcon />
    </template>
    <template v-else-if="name === 'deposit'">
      <DepositIcon />
    </template>
    <template v-else-if="name === 'withdraw'">
      <WithdrawIcon />
    </template>
    <template v-else-if="name === 'support'">
      <SupportIcon />
    </template>
    <template v-else-if="name === 'kyc'">
      <KycIcon />
    </template>
    <template v-else-if="name === 'referral'">
      <ReferralIcon />
    </template>
    <template v-else-if="name === 'log-out'">
      <LogoutIcon />
    </template>
    <template v-else>
      <TradeIcon />
    </template>
  </span>
</template>

<script>
import TradeIcon from '@/static/img/sidebar/trade.svg?inline';
import AccountIcon from '@/static/img/sidebar/account.svg?inline';
import DepositIcon from '@/static/img/sidebar/deposit.svg?inline';
import WithdrawIcon from '@/static/img/sidebar/withdraw.svg?inline';
import SupportIcon from '@/static/img/sidebar/support.svg?inline';
import KycIcon from '@/static/img/sidebar/kyc.svg?inline';
import ReferralIcon from '@/static/img/sidebar/referral.svg?inline';
import LogoutIcon from '@/static/img/sidebar/logout.svg?inline';

export default {
  components: { TradeIcon, AccountIcon, DepositIcon, WithdrawIcon, SupportIcon, KycIcon, ReferralIcon, LogoutIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
