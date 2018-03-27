/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies, no-useless-escape */
const babelJest = require('babel-jest');
const {resolve} = require('./webpackAliasResolver');

const getWebpackAliasPreprocessor = src => {
    const anyChartersNotPresentInSet = '[^,;]+';
    const requireOrJestMockWithOpenBracketPart = '(?:require|jest.mock)\\(';
    const ImportAllAsSomethingOptional = '(?:\\*\\s+as\\s+)?';
    const importByName = '(?:\\s+)?{(?:\\s+)?[\\w ,\\n\\r]+(?:\\s+)?}(?:\\s+)?';
    const fullImportPart = `import(?:\\s+${ImportAllAsSomethingOptional}\\w*\\s+|${importByName})from(?:\\s+)?`;
    const regexp = new RegExp(`(${fullImportPart}|${requireOrJestMockWithOpenBracketPart})'(${anyChartersNotPresentInSet})'`, 'g');

    return src.replace(regexp, (match, p1, p2) => `${p1}'${resolve(p2)}'`);
};

module.exports = {
    canInstrument: true,
    getCacheKey(...rest) {
        return babelJest.getCacheKey(...rest);
    },
    process(src, ...rest) {
        return babelJest.process(getWebpackAliasPreprocessor(src), ...rest);
    }
};