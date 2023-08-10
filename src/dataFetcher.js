var endpoints = [
  'shortcut_key',
  'tiles',
  'tiles_up',
  'tiles_qu',
  'daily_points',
  'quarterly_points',
  'portal_level',
  'portal_open',
  'vote',
  'object'
];

function fetchData(callback) {
  var API_URL = 'https://forge.e2app.asia/api/';
  Promise.all(endpoints.map(endpoint => axios.get(API_URL + endpoint)))
    .then(responses => {
      var data = {};
      responses.forEach((response, index) => {
        data[endpoints[index]] = response.data;
      });
      callback(data); // 将数据传递给回调函数
    })
    .catch(function(error) {
      console.error(error);
    });
}
