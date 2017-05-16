import {CommandOptions} from "../CommandOptions";


export function BreakerCommand(options?: CommandOptions) {

    return (target: any, key: string, descriptor) => {

        const method = descriptor.value;

        descriptor.value = (...args) => {

            try {
                const ret = method.apply(target, args);

                if (ret && ret.then && typeof ret.then === 'function') {
                    return ret
                        .then(() => "async success")
                        .catch(() => "async error");
                } else {
                    return "sync success;"
                }

            } catch (e) {
                return "sync error";
            }

        };
    }

}