// const div1 = document.getElementById('div1')
// console.log('div1', div1)

// const divList = document.getElementsByTagName('div') // 集合
// console.log('divList.length', divList.length)
// console.log('divList[1]', divList[1])

// const containerList = document.getElementsByClassName('container') // 集合
// console.log('containerList.length', containerList.length)
// console.log('containerList[1]', containerList[1])

// const pList = document.querySelectorAll('p')
// console.log('pList', pList)

// const pList = document.querySelectorAll('p')
// const p1 = pList[0]


// property:修改对象属性，不会体现在html结构中（尽量使用property，比较attribue,可以尽量避免dom重新渲染）
// attribue:修改html属性，会改变html结构
// // property 形式 （修改的是dom元素的js变量）
// p1.style.width = '100px'
// console.log( p1.style.width )
// p1.className = 'red'
// console.log( p1.className )
// console.log(p1.nodeName)
// console.log(p1.nodeType) // 1

// // attribute （修改的是dom标签）
// p1.setAttribute('data-name', 'imooc')
// console.log( p1.getAttribute('data-name') )
// p1.setAttribute('style', 'font-size: 50px;')
// console.log( p1.getAttribute('style') )
