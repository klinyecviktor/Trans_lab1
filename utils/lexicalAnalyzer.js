// const lexems = ;

class LexicalAnalyzer {
    constructor(codeForAnalyze) {
        this.lexems = [
            {
                name: "program",
                id: 1
            },
            {
                name: "var",
                id: 2
            },
            {
                name: "integer",
                id: 3
            },
            {
                name: "real",
                id: 4
            },
            {
                name: "begin",
                id: 5
            },
            {
                name: "end",
                id: 6
            },
            {
                name: "if",
                id: 7
            },
            {
                name: "then",
                id: 8
            },
            {
                name: "else",
                id: 9
            },
            {
                name: "end if",
                id: 10
            },
            {
                name: "and",
                id: 11
            },
            {
                name: "or",
                id: 12
            },
            {
                name: "<",
                id: 13
            },
            {
                name: ">",
                id: 14
            },
            {
                name: "==",
                id: 15
            },
            {
                name: "<=",
                id: 16
            },
            {
                name: ">=",
                id: 17
            },
            {
                name: "!=",
                id: 18
            },
            {
                name: ":=",
                id: 19
            },
            {
                name: "read",
                id: 20
            },
            {
                name: "write",
                id: 21
            },
            {
                name: "for",
                id: 22
            },
            {
                name: "to",
                id: 23
            },
            {
                name: "step",
                id: 24
            },
            {
                name: "next",
                id: 25
            },
            {
                name: "+",
                id: 26
            },
            {
                name: "-",
                id: 27
            },
            {
                name: "*",
                id: 28
            },
            {
                name: "/",
                id: 29
            },
            {
                name: ";",
                id: 30
            },
            {
                name: "(",
                id: 31
            },
            {
                name: ")",
                id: 32
            },
            {
                name: "id",
                id: 33
            },
            {
                name: "con",
                id: 34
            }
        ];
        this.codeForAnalyze = codeForAnalyze;
    }

    analyze() {
        console.log(typeof this.codeForAnalyze);
    }

    countRows() {
        return this.codeForAnalyze.match(/\n/g).length + 1;
    }
}

module.exports = LexicalAnalyzer;