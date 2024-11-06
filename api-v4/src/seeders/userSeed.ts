import { appDataSource } from "../data-source"
import User from "../entities/user";
import UserRepository from "../repositories/userRepository"
import { faker } from '@faker-js/faker';

export class UserSeed {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(appDataSource);
    }
    public async seed(): Promise<void> {
        if (!appDataSource.isInitialized) {
            await appDataSource.initialize();
        }

        const userCount = 3;

        for(let i=0; i < userCount; i++){
            await this.userRepository.create({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password()
           });
        }
        console.log("User seeding is finished.");
    }
}