const app = require('./src/app.js');
const {PORT} = require('./src/config/dotenv.js');

async function startServer() {
    try {        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

startServer();