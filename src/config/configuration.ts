import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default {
    getDatabase():TypeOrmModuleOptions{
        return {
            type: 'mongodb',
            host: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@meritts.ybqrx.mongodb.net/${process.env.DATABASE_TABLE}?retryWrites=true&w=majority`,
            useNewUrlParser: true,
            synchronize: true,
            logging: true,
            entities: ["src/entity/*.*"],
            autoLoadEntities: true
        }
    }
}