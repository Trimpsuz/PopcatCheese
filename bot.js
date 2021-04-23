/*
HOW TO USE

1) Go to https://popcat.click
2) Open console by pressing F12 or CTRL+SHIFT+I
3) Paste the code in and hit enter
4) Bot progress is logged in console

Popcat.click servers register 800 pops every 30 seconds for each IP address (this means that running this in multiple tabs will not work).
If you send over 800 clicks 10 times in a row, you get banned for 12 hours (the "ban" cookie will be set).
You do not need to worry about that issue with this bot, i've taken care of that.

FINLAND FTW!
*/

(()=>{
    // Clear console

    console.clear()

    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });

    // Start interval

    document.dispatchEvent(event);

    // Set total pop amount

    var total = 0;

    var interval = setInterval(()=>{
        var vue = document.getElementById('app').__vue__;

        // Has user been marked as bot?

        if(vue.bot){
            console.log("%c You have been marked as a bot, clear your cookies.", "background: #a00; color: #fff");
            clearInterval(interval);
            return;
        }

        // Ban prevention

        vue.sequential_max_pops = 0;

        // Detect sendStats function run

        if(vue.accumulator == 0){
            total += 800;
            console.log(`[${new Date().toLocaleTimeString()}] %cAdded 800 pops, (Total: ${total})`, "color: #0f0");

            // Add pops to top of screen counter

            vue.counter += 800;

			// Open and close cat's mount

            vue.open = true;
            setTimeout(()=>{
                vue.open = false;
            }, 1000);
        }

        // Add 800 pops

        vue.accumulator = 800;
        
    }, 1000);

    console.log("%c Started bot. Waiting to send first request. ", "background: #050; color: #0f0");
})();