const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options');
const token = '5191626341:AAHP3lGrC_dvNSZscWzd6_cI5XOFeFzuWd8';

const bot = new TelegramApi(token, {polling: true});

const chats = {};

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'Я загадываю цифру от 0 до 9, а ты должен её угадать!');
    const randomNumber = Math.floor(Math.random() * 10);
    chats[chatId] = randomNumber;
    await bot.sendMessage(chatId, 'Отгадывай', gameOptions);
};

const start = () =>{
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Информация о пользователе'},
        {command: '/game', description: 'Запустить игру "Отгадайка"'}
    ]);
    
    
    bot.on('message', async msg =>{
        const text = msg.text;
        const chatId = msg.chat.id;
        const user = msg.chat.first_name;
    
        //bot.sendMessage(chatId, `Ты написал мне ${user}`);
        if (text === '/start'){
           await bot.sendMessage(chatId, `Привет ${user}`);
           return bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp`);
        }
        if (text === '/info'){
            return bot.sendMessage(chatId, `Хочешь узнать что я могу ${user} ?`);
        }
        if (text === '/game'){
           return startGame(chatId);
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю попробуй еще раз!');
    });

    bot.on('callback_query', async msg =>{
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data === '/again'){
            return startGame(chatId);
        }
        if(data === chats[chatId]){
            return await bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${chats[chatId]}`, againOptions);
        }else{
            return bot.sendMessage(chatId, `К сожалению, ты  не отгадал цифру, бот загадал ${chats[chatId]}`, againOptions);
        }
    });
};
start();
