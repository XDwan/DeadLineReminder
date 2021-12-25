var moment = require('../lib/moment');
var us = require('../lib/underscore');

  const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const formatDate = date =>{
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map(formatNumber).join('/')} `
}
// 时间格式转换 yyyy－mm－dd
function formatTime2(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate() 
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()  
  return [year, month, day].map(formatNumber).join('-')
}

const formatTimeHM = date =>{
  const hour = date.getHours()
  const minute = date.getMinutes()

  return `${[hour, minute].map(formatNumber).join(':')}`
}
const formatTimeH = date =>{
  const hour = date.getHours()
  const minute=0;
  return `${[hour,minute].map(formatNumber).join(':')}`
}
const formatTimeMIN = date =>{
  const hour = date.getHours()
  const minute = date.getMinutes()
  var mins=hour*60+minute
  return mins
}
const formatEndTimeHM = date =>{
  const hour = date.getHours()+1
  const minute = date.getMinutes()
  return `${[hour, minute].map(formatNumber).join(':')}`
}
const formatEndTimeH = date =>{
  const hour = date.getHours()+1
  const minute = 0
  return `${[hour, minute].map(formatNumber).join(':')}`
}
const formatEndTimeMin= date =>{
  const hour = date.getHours()+1
  const minute = date.getMinutes()
  var mins=hour*60+minute
  return mins
}


// 计算变化多少天后的日期
function DateAddDay(d, days) {
  var d = new Date(d); 
  return new Date(d.setDate(d.getDate() + days));
}
 
// 获得本周周日的日期
function FirstDayInThisWeek(d) { 
  var d = new Date(d);  
  return DateAddDay(d, 0 - d.getDay());
}
function formatCreateTime(date) {
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()  
  return [hour, minute, second].map(formatNumber).join(':')
}



module.exports = {
  formatTime,
  formatDate,
  formatTimeHM,
  formatTimeH,
  formatEndTimeHM,
  formatEndTimeH,
  DateAddDay,
  FirstDayInThisWeek,
  formatTimeMIN:formatTimeMIN,
  formatEndTimeMin:formatEndTimeMin,
  addZero: formatNumber,
  formatTime2,
  formatCreateTime
}