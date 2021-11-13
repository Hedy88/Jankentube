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

const urlExists = (url, callback) => {
    $.ajax({
        type: "HEAD",
        url: url,
        success: () => {
            callback(true);
        },
        error: () => {
            callback(false);
        },
    });
};

const navigate = (page, error = false) => {
    page = checkPath(page);
    const unclickable = () => {
        $("a").attr("onclick", "return false;");
    };
    unclickable();
    urlExists(pagesDir + page, (exists) => {
        if (exists) {
            if (!error) {
                $("#dy-header").load(pagesDir + "/_header.html");
            }
            root.load(pagesDir + page, () => {
                unclickable();
                $("a").on("click", () => {
                    var path = $(this).attr("href");
                    path = checkPath(path);
                    if (path == "/index.html") {
                        path = "/";
                    }
                    var historyPath = path;
                    if (historyPath.endsWith(".html")) {
                        historyPath = historyPath.slice(0, -5);
                    }
                    window.history.pushState(
                        {},
                        historyPath,
                        window.location.origin + historyPath
                    );
                    urlExists(path, (exists) => {
                        if (exists) {
                            navigate(path);
                        } else {
                            navigate("/_404.html");
                        }
                    });
                });
                if (error) {
                    $("#err-header").load(pagesDir + "/_header.html");
                }
            });
        } else {
            navigate("/_404.html", true);
        }
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
