import {CommandOptions} from "../CommandOptions";
import {CommandMetadata} from "../CommandMetadata";


export function Command(options?: CommandOptions) {

    return (target: any, key: string, descriptor) => {

        const method = descriptor.value;

        descriptor.value = (...args) => {
            const func = () => method.apply(target, args);
            const command = new CommandMetadata();

            command.exec(func);
        };
    }

}