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
    console.clear()

    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });

    document.dispatchEvent(event);

    var totalpops = 0;

    var interval = setInterval(()=>{
        var vue = document.getElementById('app').__vue__;

        if(vue.bot){
            console.log("%c You have been marked as a bot, clear your cookies.", "color: #a00");
            clearInterval(interval);
            return;
        }

        vue.sequential_max_pops = 0;


        if(vue.accumulator == 0){
            totalpops += 800;
<<<<<<< HEAD
            console.log(`[${new Date().toLocaleTimeString()}] %c+ 800 pops, (Total: ${totalpops})`, "color: #0f0");
=======
            console.log(`[${new Date().toLocaleTimeString()}] %cAdded 800 pops, (Total: ${totalpops})`, "color: #0f0");
>>>>>>> 1976032444dbf8c2a919a0bac9ab24aa8ff8e4a2

            vue.counter += 800;

            vue.open = true;
            setTimeout(()=>{
                vue.open = false;
            }, 1000);
        }

        vue.accumulator = 800;
        
    }, 1000);

    console.log("%c Started bot. Waiting to send first request. ", "background: #00; color: #0f0");
<<<<<<< HEAD
})();
=======
})();
>>>>>>> 1976032444dbf8c2a919a0bac9ab24aa8ff8e4a2
