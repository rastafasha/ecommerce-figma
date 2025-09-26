const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';




export { API_BASE_URL };

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000/api',
  mediaUrl: 'http://localhost:3000/api/uploads/',
  soketServer : 'http://localhost:3000',
  //remoto vercel
  // baseUrl: 'https://back-ecomm-mall.vercel.app/api',
  // soketServer : 'https://back-ecomm-mall.vercel.app/',
  // mediaUrl: 'https://back-ecomm-mall.vercel.app/api/uploads/',
  mediaUrlRemoto: 'https://res.cloudinary.com/dmv6aukai/image/upload/v1741218430/mallConnect',
  //pluggins
  rapidapiKey: 'a7036a3222mshc2920e679cd1cafp141e56jsn81cbe707ac15',
  rapidapiHost: 'apidojo-17track-v1.p.rapidapi.com',
  clientIdPaypal: 'AXlazeNsZ0CmjfJIronSzcqzw4hLHkcoVEM5fO5BY7AbD-_GhKoKezRcavq6-T4kQuRqaTXFB_VXmheG',
  sandboxPaypal: 'AQhKPBY5mgg0JustLJCcf6ncmd9RghCiNhXT_b6rNUakyQtnEn8MzCn_dkHAyt5n7_P0Omo5M05to5j0',
  client_idGoogle: '291137676127-svvuuca518djs47q2v78se9q6iggi4nq.apps.googleusercontent.com'
};
