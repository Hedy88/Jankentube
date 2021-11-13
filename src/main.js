import $ from "jquery";
import "./styles/index.scss";

const root = $("#app");
const pagesDir = "pages";

const checkPath = (path) => {
    if (!path.startsWith("/")) {
        path = "/" + path;
    }
    if (path == "/") {
        path = "/index.html";
    }
    return path;
};

const navigate = (page) => {
    page = checkPath(page);
    root.load(pagesDir + page, () => {
        root.children("a").on("click", function () {
            var path = $(this).attr("href");
            path = checkPath(path);
            if (path == "/index.html") {
                path = "/";
            }
            var historyPath = path;
            if (historyPath.endsWith(".html")) {
                historyPath = historyPath.slice(0, -5);
                console.log(historyPath);
            }
            window.history.pushState(
                {},
                historyPath,
                window.location.origin + historyPath
            );
            navigate(path);
            return false;
        });
    });
};

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
