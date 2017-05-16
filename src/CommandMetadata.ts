
export class CommandMetadata {

    private isOpen: boolean;

    private isReject: boolean;

    private fallback: (...args) => any;

    // core logic for circuit break
    public exec(func) {

        if (this.isOpen) {
            return this.fallback();
        }

        if (this.isReject) {
            return this.fallback();
        }

        try {
            const ret = func();

            if (ret && ret.then && typeof ret.then === 'function') {

                return ret
                    .then(data => data)
                    .catch(this.fallback.bind(this));

            } else {
                return ret;
            }

        } catch (e) {
            return this.fallback();
        }
    }
}