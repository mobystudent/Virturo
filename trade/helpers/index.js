import { DEPOSIT_METHODS, WITHDRAW_METHODS, methodsFaq, defaultFaqData, defaultFaqList } from '../constants';

export const combineFaq = params => {
  const sortedParams = defaultFaqData;
  params.forEach(el => {
    if (Object.keys(methodsFaq).includes(el.category)) {
      if (!sortedParams[el.category][el.subcategory]) {
        sortedParams[el.category][el.subcategory] = [];
      }
      sortedParams[el.category][el.subcategory].push(el);
    }
  });
  const data = defaultFaqData;
  for (const [category, items] of Object.entries(methodsFaq)) {
    items.forEach(({ id }) => {
      const existed = sortedParams[category][id] || [];
      data[category][id] = [...existed, ...defaultFaqList.map(el => ({ ...el, category, subcategory: id }))].slice(0, 3);
    });
  }
  return data;
};
export const formatDate = params => {
  const date = new Date(params);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const [hour, minutes] = [date.getHours(), (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedMonth = months[month].slice(0, 3);
  const formattedDate = `${formattedMonth} ${day}, ${year} ${hour}:${minutes}`;
  return formattedDate;
};

export const formatDateWithoutTime = params => {
  const date = new Date(params);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedMonth = months[month].slice(0, 3);
  return `${formattedMonth} ${day}, ${year}`;
};

export const depositMethodLabelByMethod = method => {
  const m = DEPOSIT_METHODS.find(el => el.method === method);
  return m ? m.label : '';
};

export const withdrawMethodLabelByMethod = method => {
  const m = WITHDRAW_METHODS.find(el => el.method === method);
  return m ? m.label : '';
};
