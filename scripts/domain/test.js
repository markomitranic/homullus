const test = {
    message: 'Batman!',
    init() {
        console.log(this.message);
    }
};

export default test.init();
