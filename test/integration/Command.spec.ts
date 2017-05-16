import "../TestHelper";
import {Command} from "../../src/decorator/Command";

describe("Command", () => {


    class ATestService {


        @Command()
        public syncCall() {
        }

        @Command()
        public async asyncCall() {
        }

        @Command()
        public syncErrorCall() {
        }

        @Command()
        public async asyncErrorCall() {
        }
    }

    const service = new ATestService();

    it('Command protect sync success call', () => {
        for (let i = 0; i < 5; i++) {
            service.syncCall();
        }
    });

    it('Command protect async success call', async () => {
        for (let i = 0; i < 5; i++) {
            await service.asyncCall();
        }
    });

    it('Command protect sync fail call', () => {
        for (let i = 0; i < 5; i++) {
            service.syncErrorCall();
        }
    });

    it('Command protect async fail call', async () => {
        for (let i = 0; i < 5; i++) {
            await service.asyncErrorCall();
        }
    })

});

