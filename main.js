let url = 'https://api.github.com/users/tombousquet'

let landingZone = document.querySelector('.container')

fetch(url)
.then(response => response.json())
.then(function (data) {
    console.log(data)
    let header = document.createElement('h1')
    header.innerText = data.name
    landingZone.appendChild(header)
    console.log(header)
    let list = document.createElement('ul')
    landingZone.appendChild(list)
    let listItem = document.createElement('li')
    list.appendChild(listItem)
    let basics = document.createElement('h3')
    basics.innerText = 'The Basics'
    listItem.appendChild(basics)
    let name = document.createElement('p')
    name.innerText = 'Name ' + data.name
    listItem.appendChild(name)
    let github = document.createElement('a')
    github.href = data.html_url
    github.innerText = "GitHub Url: " + data.login
    listItem.appendChild(github)
    let company = document.createElement('p')
    company.innerText = 'Company ' + data.company
    listItem.appendChild(company)
    let website = document.createElement('p')
    website.innerText = 'Website ' + data.blog
    let list2 = document.createElement('ul')
    landingZone.appendChild(list2)
    listItem.appendChild(website)
    let listItem2 = document.createElement('li')
    list2.appendChild(listItem2)
    let story = document.createElement('h3')
    story.innerText = 'The Story'
    listItem2.appendChild(story)
    let bio = document.createElement('p')
    bio.innerText = data.bio
    listItem2.appendChild(bio)
    let list3 = document.createElement('ul')
    landingZone.appendChild(list3)
    let listItem3 = document.createElement('li')
    list3.appendChild(listItem3)
    let imgTom = document.createElement('img')
    imgTom.src = data.avatar_url
    listItem3.appendChild(imgTom)
})

