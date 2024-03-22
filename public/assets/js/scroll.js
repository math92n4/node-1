console.log('ello')

// h1s
const headings = document.querySelectorAll('h1')
const lis = document.querySelectorAll('li > a')

lis.forEach(a => {
    a.addEventListener('click', scroll)
})

function scroll(e) {
    e.preventDefault();
    headings.forEach(heading => {
        if(e.target.textContent === heading.textContent) {
            const scrollTo = heading.getBoundingClientRect()
            window.scrollTo({
                top: window.scrollY + scrollTo.top,
                behavior: 'smooth'
            })      
        }
    })
}

