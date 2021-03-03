//时间日期转换成string

module.exports = {
  data_string: () => {
    let d = new Date();
    let str = d.getFullYear().toString() + '-' +
        d.getMonth() + 1 + '-' +
        d.getDate() + ' ' +
       d.getHours() + ':' +
    d.getMinutes() + ':' +
        d.getSeconds();
    console.log(str)
    return str;
  },

  addZero: () => {
    if (v < 10)
      return '0' + v;
    return v.toString();
  },

}

function a() {
  let d = new Date();
  let creatime = d.getFullYear().toString() + '-' +
      (d.getMonth()+1) + '-' +
      d.getDate() + ' ' +
      d.getHours() + ':' +
      d.getMinutes() + ':' +
      d.getSeconds();

  let aa = new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/, ' ')
  console.log(new Date())
  console.log(new Date(parseInt(new Date().getTime())))
  console.log(new Date(parseInt(new Date().getTime())+28800000).toLocaleString())
  console.log(parseInt(new Date().getTime())+28800000)
}
// a()




