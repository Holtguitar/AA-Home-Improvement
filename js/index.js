"use strict";
const portfolioGrid = document.getElementById("grid-portfolio");


const insertImages = (maxIndex, dataFilterType) => {
    for(let i = 1; i <= maxIndex; i++){
        const div = document.createElement("div");
        div.setAttribute('class', 'grid-sizer');
        let imgSrc = `img/portfolio/${dataFilterType}/${i}.jpeg`;
        let dataFilter = dataFilterType;
        div.innerHTML = 
            `<div class="grid-sizer"></div>
                <div class="gutter-sizer"></div>
                <div class="grid-item ${dataFilter}">
                <div class="grid-item-wrapper">
                    <img src=${imgSrc} alt="portfolio-img" class="portfolio-item">
                    <div class="grid-info">
                        <div class="grid-link d-flex justify-content-center">
                            <a class="img-pop" data-rel="lightcase" href=${imgSrc}>
                                <span class="lnr lnr-move"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        portfolioGrid.appendChild(div);
    };
};

insertImages(14, "decks");
insertImages(17, "bathrooms");
insertImages(4, "drywall");
insertImages(4, "porches")

const width = $(window).width();
if(width < 800){
    const links = document.getElementById("filter-button-group");
    links.classList.remove("d-flex");
};