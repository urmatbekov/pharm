import React from "react";

const GridSections = () => {
    return(
        <section className="breadcrumb-section set-bg" style={{backgroundImage:"url(img/breadcrumb.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Organi Shop</h2>
                            <div className="breadcrumb__option">
                                <a href="#">Home</a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GridSections;