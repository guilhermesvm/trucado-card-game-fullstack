import { UserSeed } from "./userSeed"

const seed = async() => {
    const userSeeder = new UserSeed()
    await userSeeder.seed();
}

seed().then(() => {
    console.log("Seeding completed successfully.");
}).catch((error) => {
    console.error("Seeding failed:", error);
})