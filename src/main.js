import $ from "jquery";
import "./styles/index.scss";

const root = $("#app");
const pagesDir = "pages";

const urlExists = (url, callback) => {
    $.ajax({
        type: "GET",
        url: url,
        success: () => {
            callback(true);
        },
        error: () => {
            callback(false);
        },
    });
};

// const navigate = (url, error = false) => {

// };

// window.history.pushState(
//     {},
//     historyPath,
//     window.location.origin + historyPath
// );

if (window.location.pathname == "/") {
    navigate("/index.html");
} else if (window.location.pathname.endsWith(".html")) {
    navigate(window.location.pathname);
} else {
    navigate(window.location.pathname + ".html");
}

$(window).on("popstate", () => {
    navigate(window.location.pathname);
});
