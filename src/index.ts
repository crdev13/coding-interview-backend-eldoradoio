import { initializeServer, startServer } from './server';

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

(async () => {
    await startServer();
})();
