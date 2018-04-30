let set_blocks;

function bemblocks(tokens) {
    'use strict';
    
    if (this.pages.has(tokens[0].loc.filename)) {
        set_blocks = this.pages.get(tokens[0].loc.filename).blocks;
    }

    tokens.forEach(token => {
        if (token.type === 'call') set_blocks.add(token.val);
    });

    return tokens;
}

module.exports = {
    postLex: bemblocks,
    pages: new Map()
}
