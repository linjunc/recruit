/*
 * @Author: 林俊丞
 * @Date: 2021-08-30 14:23:31
 * @LastEditors: 林俊丞
 * @LastEditTime: 2021-08-30 14:24:57
 * @Description: 
 */
const allAcademy = ['信息工程学院', '计算机学院', '自动化学院', '机电工程学院', '物理与光电工程学院', '材料与能源学院', '轻工化工学院', '土木与交通工程学院', '环境科学与工程学院', '外国语学院'];
const allClass = [
    ['电子信息类1班', '电子信息类2班', '电子信息类3班', '电子信息类4班', '电子信息类5班', '电子信息类6班', '电子信息类7班', '电子信息类8班', '电子信息类9班', '电子信息类10班', '电子信息类11班', '电子信息类12班', '电子信息类13班',],
    ['人工智能1班', '人工智能2班', '计算机类1班', '计算机类2班', '计算机类3班', '计算机类4班', '计算机类5班', '计算机类6班', '计算机类7班', '计算机类8班', '计算机类9班', '计算机类10班', '计算机类11班', '计算机类12班', '计算机类13班', '计算机类14班', '计算机类15班', '计算机类16班', '计算机类17班'],
    ['物联网工程1班', '物联网工程2班', '数据科学与大数据技术1班', '数据科学与大数据技术2班', '自动化类1班', '自动化类2班', '自动化类3班', '自动化类4班', '自动化类5班', '自动化类6班', '自动化类7班', '电气工程及其自动化1班', '电气工程及其自动化2班', '电气工程及其自动化3班', '电气工程及其自动化4班', '电气工程及其自动化5班', '电气工程及其自动化6班'],
    ['机械电子工程', '智能制造工程', '工业工程', '测控技术与仪器1班', '测控技术与仪器2班', '机械类1班', '机械类2班', '机械类3班', '机械类4班', '机械类5班', '机械类6班', '机械类7班', '机械类8班', '机械类9班', '机械类10班', '机械类11班', '机械类12班', '机械类13班'],
    ['微电子科学与工程1班', '微电子科学与工程2班', '材料成型及控制工程1班', '材料成型及控制工程2班', '能源动力类1班', '能源动力类2班', '能源动力类3班', '能源动力类4班', '能源动力类5班', '能源动力类6班', '材料类1班', '材料类2班', '材料类3班', '材料类4班', '材料类5班', '材料类6班', '材料类7班', '材料类8班'],
    ['化学工程与工艺', '食品科学与工程1班', '食品科学与工程2班', '应用化学1班', '应用化学2班', '化工与制药类1班', '化工与制药类2班', '化工与制药类3班', '化工与制药类4班', '化工与制药类5班'],
    ['交通运输', '测绘工程', '工程管理1班', '工程管理2班', '土木类1班', '土木类2班', '土木类3班', '土木类4班', '土木类5班', '土木类6班', '土木类7班', '土木类8班', '土木类9班', '土木类10班'],
    ['电子科学与技术1班', '电子科学与技术2班', '电子科学与技术3班', '电子科学与技术4班', '光电信息科学与工程1班', '光电信息科学与工程2班', '光电信息科学与工程3班', '光电信息科学与工程4班', '光电信息科学与工程5班'],
    ['安全工程', '环境科学与工程类1班', '环境科学与工程类2班', '环境科学与工程类3班', '环境科学与工程类4班'],
    ['日语', '外国语言文学类1班', '外国语言文学类2班', '外国语言文学类3班', '外国语言文学类4班', '外国语言文学类5班'],
];
const myAcademy = document.getElementById('allAcademy');
const myClass = document.getElementById('allClass');
let fragment1 = document.createDocumentFragment();
let fragment2 = document.createDocumentFragment();
for (let i = 0; i < allAcademy.length; i++) {
    fragment1.appendChild(new Option(allAcademy[i], allAcademy[i]))
}
myAcademy.appendChild(fragment1);
for (let i = 0; i < allClass[0].length; i++) {
    fragment2.appendChild(new Option(allClass[0][i], allClass[0][i]))
}
myClass.appendChild(fragment2);


function mySubmit(form) {
    let myData = []
    let formData = new FormData(form);
    let userData = formData.getAll('username');
    regular(userData);
    let recruitData = formData.getAll('week')
    let recruitDataWish = formData.getAll('wish')
    const showBox = document.querySelector('.showBox')
    const body = document.querySelector('body')
    myData = [...userData, ...recruitData, ...recruitDataWish]
    showBox.style.display = 'block'
    showBox.innerHTML = myData
    body.className = 'bgFix'
    return false
}

function regular(userData) {
    const isStuName = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    const isSutNum = /^(312100|322100)\d{4}$/;
    const isStuPhone = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if (!isStuName.test(userData[0])) { console.log('姓名格式不对'); return false }
    if (!isSutNum.test(userData[2])) { console.log('学号格式不对'); return false }
    if (!isStuPhone.test(userData[3])) { console.log('手机号格式不对');; return false }
}

// 班级
function changeSelect() {
    myClass.innerHTML = '';
    const selectedIndex = myAcademy.selectedIndex;
    const oneAcademy = allClass[selectedIndex];
    let fragmentChange = document.createDocumentFragment();
    for (let i = 0; i < oneAcademy[i].length; i++) {
        fragmentChange.appendChild(new Option(oneAcademy[i], allClass[i]))
    }
    myClass.appendChild(fragmentChange);
}

