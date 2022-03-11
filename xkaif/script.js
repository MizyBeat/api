let bibi ='https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';



async function getData() {
    const res = await fetch(bibi);
    const data = await res.json();
    console.log(data.results[17].urls.full);
    const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = data.results[17].urls.full;
img.alt = `image`;
document.body.append(img);

}


  getData();

