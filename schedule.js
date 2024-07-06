import cron from "node-cron";
import { exec } from "child_process";


// Schedule the resetBookedSlots script to run every Sunday at midnight IST
cron.schedule("59 23 * * 0", () => {
  exec("node ./model/resetBookedSlots.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${stderr}`);
    } else {
      console.log(`Script output: ${stdout}`);
    }
  });
}, {
  timezone: "Asia/Kolkata" // Set the timezone to IST
});

//sunday 