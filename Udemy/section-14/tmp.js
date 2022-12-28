class MyString {
    constructor(v) {
        if (typeof v === 'string') {
            this.val = v;
        } else {
            this.val = "hello world";
        }
    }

    get get_length() {
        return this.val.length;
    }

    replaceZero() {
        let q = this.val.split("");
        q[0] = '0';
        return q.join("");
    }

}



let y = new MyString();
console.log(y.replaceZero());
console.log(y.val)