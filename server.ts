import App from "./src/app"
import sequelize from "./src/database/config/connect"
import associateModels from "./src/database/config/association";
import env from "./src/config.env"


App.app.listen(env.PORT, async()=>{
    console.log(`SERVER RUNNING ON PORT ${env.PORT}`);
    try {
        await sequelize.authenticate();
        associateModels(sequelize);        
        console.log("DB CONNECTED");
    } catch (error) {
        console.log(`SERVER FAIL: ${error}`);
        process.exit(0);
    }
});