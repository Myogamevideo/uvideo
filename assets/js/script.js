const mobileScreen = window.matchMedia("(max-width: 990px )");
(function () {
    [].forEach.call(document.getElementsByClassName("dashboard-nav-dropdown-toggle"), function (el) {
        el.addEventListener('click', function () {
            el.closest(".dashboard-nav-dropdown")
                .classList.toggle("show");
            [].forEach.call(el.querySelectorAll(".dashboard-nav-dropdown"), function (elemen) {
                elemen.classList.remove("show");
            });
            [].forEach.call(getSiblings(getParents(el)), function (elemen) {
                elem.classList.remove("show");
            });
        });
    });
    [].forEach.call(document.getElementsByClassName("menu-toggle"), function (el) {
        el.addEventListener('click', function () {
            if (mobileScreen.matches) {
                [].forEach.call(document.getElementsByClassName("dashboard-nav"), function (el) {
                    el.classList.toggle("mobile-show");
                });
            } else {
                [].forEach.call(document.getElementsByClassName("dashboard"), function (el) {
                    el.classList.toggle("dashboard-compact");
                });
            }
        });
    });
})();

function getParents(e) {
    var result = [];
    for (var p = e && e.parentElement; p; p = p.parentElement) {
        result.push(p);
    }
    return result;
}

let getSiblings = function (e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};