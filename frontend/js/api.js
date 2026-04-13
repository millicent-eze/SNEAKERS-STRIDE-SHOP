// frontend/js/api.js
const API_BASE = 'http://your-alb-url-here.eu-central-1.elb.amazonaws.com';


const API = {
  register: (data) => fetch(`${API_BASE}/api/users/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
  login: (data) => fetch(`${API_BASE}/api/users/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
  getProducts: () => fetch(`${API_BASE}/api/products`),
  placeOrder: (data, token) => fetch(`${API_BASE}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(data) })
};
