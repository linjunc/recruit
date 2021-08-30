/*
 * @Author: 林俊丞
 * @Date: 2021-08-29 09:33:29
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-08-30 12:14:49
 * @Description: 
 */
function mySubmit(form) {
    // 上传数据
    let myData = []
    // 获取表单数据
    let formData = new FormData(form)
    console.log(formData);
    let userData = formData.getAll('username')
    // 第一第二资源数据
    let recruitData = formData.getAll('week')
    let recruitDataWish = formData.getAll('wish')
    // 获取body以及提示框
    const showBox = document.querySelector('.showBox')
    const body = document.querySelector('body')
    // 数据整合
    myData = [...userData, ...recruitData, ...recruitDataWish]
    // 弹出提示框
    showBox.style.display = 'block'
    // 显示报名数据
    showBox.innerHTML = myData
    body.className = 'bgFix'
    return false
}