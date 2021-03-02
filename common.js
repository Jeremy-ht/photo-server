//时间日期转换成string

module.exports = {
  data_string: () => {
    let d = new Date();
    let str = d.getFullYear().toString() + '-' +
        addZero(d.getMonth() + 1) + '-' +
        addZero(d.getDate()) + ' ' +
        addZero(d.getHours()) + ':' +
        addZero(d.getMinutes()) + ':' +
        addZero(d.getSeconds());
    console.log(str)
    return str;
  },

  addZero: () => {
    if (v < 10)
      return '0' + v;
    return v.toString();
  },

}



