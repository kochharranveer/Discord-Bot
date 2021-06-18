const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function () {
    console.log(`Logged in as ${client.user.tag}!`);
    client.guilds.cache.forEach( function (guild) {
        console.log("#"+guild.name);
        guild.channels.cache.forEach( function (channel) {
            console.log("-"+channel.name+" "+channel.type+" "+channel.id);
        })
    })
    channel = client.channels.cache.get("channel-id");
});

client.on('message', function (receivedMessage) {

    if (receivedMessage.author == client.user) {
        return
    }

    if (receivedMessage.content.includes(client.user.toString())) {

    console.log(receivedMessage.content);

    Greetings = "Hi "+receivedMessage.author.toString();

    let MessageArray = [];

    for (let i = 0; i < receivedMessage.content.length; i++) {
        MessageArray.push(receivedMessage.content[i]);
    }

    function Commands () {

        //Hi

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "h" || MessageArray[i] == "H") {
                i++;
                if (MessageArray[i] == "i" || MessageArray[i] == "I") {
                    channel.send(Greetings+"!");
                }
            }
        }

        //Hello

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "h" || MessageArray[i] == "H") {
                i++;
                if (MessageArray[i] == "e" || MessageArray[i] == "E") {
                    i++;
                    if (MessageArray[i] == "l" || MessageArray[i] == "L") {
                        i++;
                        if (MessageArray[i] == "l" || MessageArray[i] == "L") {
                            i++;
                            if (MessageArray[i] == "o" || MessageArray[i] == "O") {
                                channel.send(Greetings+"!");
                            }
                        }
                    }
                }
            }
        }

        //Time

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "t" || MessageArray[i] == "T") {
                i++;
                if (MessageArray[i] == "i" || MessageArray[i] == "I") {
                    i++;
                    if (MessageArray[i] == "m" || MessageArray[i] == "M") {
                        i++;
                        if (MessageArray[i] == "e" || MessageArray[i] == "E") {
                            const CurrentDate = new Date();
                            let Hours = CurrentDate.getHours();
                            let Minutes = CurrentDate.getMinutes();
                            if (Hours > 12) {
                                Hours = Hours - 12;
                            }
                            channel.send(Greetings+", The time is "+Hours+":"+Minutes);
                        }
                    }
                }
            }
        }

        //Date

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "d" || MessageArray[i] == "D") {
                i++;
                if (MessageArray[i] == "a" || MessageArray[i] == "A") {
                    i++;
                    if (MessageArray[i] == "t" || MessageArray[i] == "T") {
                        i++;
                        if (MessageArray[i] == "e" || MessageArray[i] == "E") {

                            const CurrentDate = new Date();
                            let Day = CurrentDate.getDay();
                            let TodaysDate = CurrentDate.getDate();
                            let Month = CurrentDate.getMonth();
                            let Year = CurrentDate.getFullYear();

                            let cMonth = Month;
                            let cDay = Day;

                            switch (cMonth) {
                                case 1 :
                                    cMonth = "January";
                                    break;
                                case 2 :
                                    cMonth = "Feburary";
                                    break;
                                case 3 :
                                    cMonth = "March";
                                    break;
                                case 4 :
                                    cMonth = "April";
                                    break;
                                case 5 :
                                    cMonth = "May";
                                    break;
                                case 6 :
                                    cMonth = "June";
                                    break;
                                case 7 :
                                    cMonth = "July";
                                    break;
                                case 8:
                                    cMonth = "August";
                                    break;
                                case 9 :
                                    cMonth = "September";
                                    break;
                                case 10 :
                                    cMonth = "October";
                                    break;
                                case 11 :
                                    cMonth = "November";
                                    break;
                                case 12 :
                                    cMonth = "December";
                                    break;
                            }
                            
                            switch (cDay) {
                                case 1:
                                    cDay = "Monday";
                                    break;
                                case 2 :
                                    cDay = "Tuesday";
                                    break;
                                case 3 :
                                    cDay = "Wednesday";
                                    break;
                                case 4 :
                                    cDay = "Thursday";
                                    break;
                                case 5 :
                                    cDay = "Friday";
                                    break;
                                case 6 :
                                    cDay = "Saturday";
                                    break;
                                case 7 :
                                    cDay = "Sunday";
                                    break;
                            }

                            channel.send(Greetings+", The date is "+TodaysDate+"/"+Month+"/"+Year+" or "+cDay+" the "+TodaysDate+" of "+cMonth+", "+Year);
                        }
                    }
                }
            }
        }

        //How are you ?

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "h" || MessageArray[i] == "H") {
                i++;
                if (MessageArray[i] == "o" || MessageArray[i] == "O") {
                    i++;
                    if (MessageArray[i] == "w" || MessageArray[i] == "W") {
                        i++;
                        if (MessageArray[i] == " " || MessageArray[i] == " ") {
                            i++;
                            if (MessageArray[i] == "a" || MessageArray[i] == "A") {
                                i++;
                                if (MessageArray[i] == "r" || MessageArray[i] == "R") {
                                    i++;
                                    if (MessageArray[i] == "e" || MessageArray[i] == "E") {
                                        i++;
                                        if (MessageArray[i] == " " || MessageArray[i] == " ") {
                                            i++;
                                            if (MessageArray[i] == "y" || MessageArray[i] == "Y") {
                                                i++;
                                                if (MessageArray[i] == "o" || MessageArray[i] == "O") {
                                                    i++;
                                                    if (MessageArray[i] == "u" || MessageArray[i] == "U") {
                                                        channel.send(Greetings+", I am doing great and hope the same for you.")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //Thank you

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "t" || MessageArray[i] == "T") {
                i++;
                if (MessageArray[i] == "h" || MessageArray[i] == "H") {
                    i++;
                    if (MessageArray[i] == "a" || MessageArray[i] == "A") {
                        i++;
                        if (MessageArray[i] == "n" || MessageArray[i] == "N") {
                            i++;
                            if (MessageArray[i] == "k" || MessageArray[i] == "K") {
                                i++;
                                if (MessageArray[i] == " " || MessageArray[i] == " ") {
                                    i++;
                                    if (MessageArray[i] == "y" || MessageArray[i] == "Y") {
                                        i++;
                                        if (MessageArray[i] == "o" || MessageArray[i] == "O") {
                                            i++;
                                            if (MessageArray[i] == "u" || MessageArray[i] == "U") {
                                                channel.send("You're Welcome");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    Commands();

    function Calculations () {

        let num1Array = [];
        let num2Array = [];
        let operator;
        let num1 = "";
        let num2 = "";
        let result;

        for (let i = 0; i < MessageArray.length; i++) {
            if (MessageArray[i] == "m" || MessageArray[i] == "M") {
                i++;
                if (MessageArray[i] == "a" || MessageArray[i] == "A") {
                    i++;
                    if (MessageArray[i] == "t" || MessageArray[i] == "T") {
                        i++;
                        if (MessageArray[i] == "h" || MessageArray[i] == "H") {
                            i+=2;

                            for (i; i < MessageArray.length; i++) {
                                if ( MessageArray[i] == '1'|| MessageArray[i] == '2'|| MessageArray[i] == '3'||
                                     MessageArray[i] == '4'|| MessageArray[i] == '5'|| MessageArray[i] == '6'||
                                     MessageArray[i] == '7'|| MessageArray[i] == '8'|| MessageArray[i] == '9'||
                                     MessageArray[i] == '0'|| MessageArray[i] == '.') {
                                        num1Array.push(MessageArray[i]);
                                } else {
                                    break;
                                }
                            }

                            operator = MessageArray[i];

                            i+=1;

                            for (i; i < MessageArray.length; i++) {
                                if ( MessageArray[i] == '1'|| MessageArray[i] == '2'|| MessageArray[i] == '3'||
                                     MessageArray[i] == '4'|| MessageArray[i] == '5'|| MessageArray[i] == '6'||
                                     MessageArray[i] == '7'|| MessageArray[i] == '8'|| MessageArray[i] == '9'||
                                     MessageArray[i] == '0'|| MessageArray[i] == '.') {
                                        num2Array.push(MessageArray[i]);
                                } else {
                                    break;
                                }
                            }

                            for (let i = 0; i < num1Array.length; i++) {
                                num1 += num1Array[i];
                            }

                            for (let i = 0; i < num2Array.length; i++) {
                                num2 += num2Array[i];
                            }

                            num1 = parseFloat(num1);
                            num2 = parseFloat(num2);

                            switch (operator) {
                                case "+":
                                    result = num1 + num2;
                                    break;
                                case "-":
                                    result = num1 - num2;
                                    break;
                                case "/":
                                    result = num1 / num2;
                                    break;
                                case "*":
                                    result = num1 * num2;
                                    break;
                            }

                            channel.send(Greetings+", "+num1+" "+operator+" "+num2+" = "+result);
                        }
                    }
                }
            }
        }
    }


    Calculations();

    }

})

client.login('login-key')