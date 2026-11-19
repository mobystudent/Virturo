export default function ({ $http, redirect }) {
  $http.onError(err => {
    // In case of unauthorized, redirect to a specific page
    if (err.statusCode === 401) {
      redirect('/login');
    }
    // eslint-disable-next-line no-console
    setTimeout(() => console.clear(), 100);
  });
}
