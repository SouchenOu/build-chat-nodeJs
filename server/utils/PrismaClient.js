import { PrismaClient } from "@prisma/client";

let PrismaInstance = null;

function getPrismaInstance() {
    if (!PrismaInstance) {
        PrismaInstance = new PrismaClient();
    }
    return PrismaInstance;
}

export default getPrismaInstance;