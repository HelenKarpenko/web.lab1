var fs = require( 'fs' ),
    html5Lint = require( 'html5-lint' );

var allFiles = ['index.html','folders.html','f1.html','f2.html','f3.html','f4.html','f5.html','f6.html'];

for(let file of allFiles) {
    fs.readFile(file, 'utf8', function (err, html) {
        if (err)
            throw err;

        html5Lint(html, function (err, results) {
            results.messages.forEach(function (msg) {
                var type = msg.type, // error or warning
                    message = msg.message;

                console.log(file+" HTML5 Lint [%s]: %s", type, message);
            });
        });
    });
}