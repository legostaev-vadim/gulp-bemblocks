let lex = require('pug-lexer'),
    through2 = require('through2').obj,
    pages = new Map(),
    blocks = new Map(),
    mixins;


exports.pages = pages;
exports.blocks = blocks;

exports.lex = function(type) {

    if (type === 'pages') pages.clear();
    else if (type === 'blocks') blocks.clear();
    else return through2(function(file, enc, callback) {callback(null, file)});
    
    return through2(function(file, enc, callback) {

        if (type === 'pages') {
            pages.set(file.stem, new Set());
            mixins = pages.get(file.stem);
        } else if (type === 'blocks') {
            blocks.set(file.stem, new Set());
            mixins = blocks.get(file.stem);
        }

        lex(file.contents.toString()).forEach(token => {
            if (token.type === 'call') {
                mixins.add(token.val);
            }
        });

        callback(null, file);
    });
}
