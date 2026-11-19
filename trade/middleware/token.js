export const ssoCookie = 'trade_sso_token';
export const registerCookie = 'trade_register_email';
export const passwordCookie = 'trade_pass';
export const verificationCodeCookie = 'trade_code';
export const accessToken = 'access_token';
export const countryCodeKey = 'country_code';
export const referralEmailKey = 'referral_email';

export default function ({ app, route, redirect }) {
  const routeName = route.name;
  const ssoToken = app.$cookies.get(ssoCookie);
  const registerEmail = app.$cookies.get(registerCookie);

  const authPaths = ['login', 'sign-up', 'reset', 'new-password', 'confirm-address', 'restricted'];

  if (!ssoToken && !authPaths.includes(routeName)) {
    return redirect('/login');
  }
  if (registerEmail && routeName !== 'sign-up') {
    return redirect('/sign-up');
  }
}
