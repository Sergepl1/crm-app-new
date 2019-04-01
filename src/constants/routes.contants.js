export default {
  root: {
    getRoot: () => '/',
  },
  orders: {
    getOrders: () => '/orders',
    getOrderNew: () => '/orders/new',
    getOrderById: orderId => `/orders/${orderId}`,
  },
};
