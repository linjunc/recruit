/*
 * @Author: 林俊丞
 * @Date: 2021-08-29 09:33:29
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-08-29 12:30:06
 * @Description: 
 */
function mySubmit(form) {
    let myData = []
    let formData = new FormData(form)
    let userData = formData.getAll('username')
    let recruitData = formData.getAll('week')
    let recruitDataWish = formData.getAll('wish')
    const showBox = document.querySelector('.showBox')
    const body = document.querySelector('body')
    myData = [...userData, ...recruitData,...recruitDataWish]
    showBox.style.display = 'block'
    showBox.innerHTML = myData
    body.className = 'bgFix'
    return false
}