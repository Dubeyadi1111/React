

const fs = require("fs");

// Create file (Async)
console.log("Start");
fs.writeFile("./demo.txt", "Hello world", "utf-8", (err) => {
    if (err) {
        console.error("Error creating file:", err);
    } else {
        console.log("File created (Async)");
        
        // Read file (Async) after it is created
        fs.readFile("./demo.txt", "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log("Read file (Async):", data);
            }
        });
    }
});

// Sync file operations
try {
    fs.writeFileSync("./demo1.txt", "Hello world (Sync)", "utf-8");
    console.log("File created (Sync)");
    const dataSync = fs.readFileSync("./demo1.txt", "utf-8");
    console.log("Read file (Sync):", dataSync);
} catch (err) {
    console.error("Error in sync operations:", err);
}

console.log("End");
