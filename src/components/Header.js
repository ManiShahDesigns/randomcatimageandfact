import React, { Fragment } from "react";

function Header() {
    return (
        <Fragment>
            <h1 className="text-center mt-3">
                <span role="img" aria-label="emojy">🐈</span> Random Cat Facts and Images <span role="img" aria-label="emojy">😻</span>
            </h1>
            <p className="text-center intro mt-4 mb-4">
                To get a random cat fact and image, click on the button below. (Unless you're not a cat fan... which means you're bonkers! GET OUT!)
            </p>
        </Fragment>
    );
}

export default Header;
