module.exports = class SQLQuery {
    constructor(pcomandText, pparams) {
        this.comandText = pcomandText;
        this.params = pparams;
    }
}