let options = {
    threshold: 1 //threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
}
const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const img_src = img.dataset.src;
            console.log(entry)
            console.log("lazy load", img)
            img.src = img_src;
            observer.unobserve(img); // to prevent reloading of images and refreshing the page
        }
    })
}

let imgs = document.querySelectorAll('img.lazy');

imgs.forEach(img => observer.observe(img))
