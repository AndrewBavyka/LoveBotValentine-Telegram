module.exports = {
    botControlMenu: {
        reply_markup: JSON.stringify({
            resize_keyboard: true,
            keyboard: [
                [{text: 'Что ты можешь? 🤔'}], 
                [{text: 'Хочу пикчу ❤️'}],
                [{text: 'Скажи что ни-будь 😍'}],
                [{text: 'Что такое любовь? 🐺'}],
                [{text: 'Совместимость знаков Зодиака 🥺👉👈'}],
                [{text: 'Кто я ? 🗿'}],
            ]
        })
    },

    botControlMenuHoroscop: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Овен ♈️', callback_data: 'Овен'}, {text: 'Телец ♉️', callback_data: 'Тельцы'}],   
                [{text: 'Близнецы ♊️', callback_data: 'Близнецы'}, {text: 'Рак ♋️', callback_data: 'Рак'}],
                [{text: "Лев ♌️", callback_data: "Лев"}, {text: "Дева ♍️", callback_data: "Дева"}],
                [{text: "Весы ♎️", callback_data: "Весы"}, {text: "Скорпион ♏️", callback_data: "Скорпион"}],
                [{text: "Стрелец ♐️", callback_data: "Стрелец"}, {text: "Козерог ♑️", callback_data: "Козерог"}],   
                [{text: "Водолей ♒️", callback_data: "Водолей"}, {text: "Рыбы ♓️", callback_data: "Рыбы"}],   
                [{text: 'Открыть главное меню ↕️', callback_data: 'Открыть главное меню'}],          
            ]
        })
    },

    horoscopCompatibilityAries: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Овен + Овен', callback_data: 'Овен + Овен'}, {text: 'Овен + Тельцы', callback_data: 'Овен + Тельцы'}],       
                [{text: 'Овен + Близнецы', callback_data: 'Овен + Близнецы'}, {text: 'Овен + Рак', callback_data: 'Овен + Рак'}],            
                [{text: 'Овен + Лев', callback_data: 'Овен + Лев'}, {text: 'Овен + Дева', callback_data: 'Овен + Дева'}],    
                [{text: 'Овен + Весы', callback_data: 'Овен + Весы'}, {text: 'Овен + Скорпион', callback_data: 'Овен + Скорпион'}],        
                [{text: 'Овен + Стрелец', callback_data: 'Овен + Стрелец'}, {text: 'Овен + Козерог', callback_data: 'Овен + Козерог'}],   
                [{text: 'Овен + Водолей', callback_data: 'Овен + Водолей'}, {text: 'Овен + Рыбы', callback_data: 'Овен + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityTaurus: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Телец + Овен', callback_data: 'Тельцы + Овен'}, {text: 'Телец + Тельцы', callback_data: 'Тельцы + Тельцы'}],       
                [{text: 'Телец + Близнецы', callback_data: 'Тельцы + Близнецы'}, {text: 'Телец + Рак', callback_data: 'Тельцы + Рак'}],            
                [{text: 'Телец + Лев', callback_data: 'Тельцы + Лев'}, {text: 'Телец + Дева', callback_data: 'Тельцы + Дева'}],    
                [{text: 'Телец + Весы', callback_data: 'Тельцы + Весы'}, {text: 'Телец + Скорпион', callback_data: 'Тельцы + Скорпион'}],        
                [{text: 'Телец + Стрелец', callback_data: 'Тельцы + Стрелец'}, {text: 'Телец + Козерог', callback_data: 'Тельцы + Козерог'}],   
                [{text: 'Телец + Водолей', callback_data: 'Тельцы + Водолей'}, {text: 'Телец + Рыбы', callback_data: 'Тельцы + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityTwink: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Близнецы + Овен', callback_data: 'Близнецы + Овен'}, {text: 'Близнецы + Тельцы', callback_data: 'Близнецы + Тельцы'}],       
                [{text: 'Близнецы + Близнецы', callback_data: 'Близнецы + Близнецы'}, {text: 'Близнецы + Рак', callback_data: 'Близнецы + Рак'}],            
                [{text: 'Близнецы + Лев', callback_data: 'Близнецы + Лев'}, {text: 'Близнецы + Дева', callback_data: 'Близнецы + Дева'}],    
                [{text: 'Близнецы + Весы', callback_data: 'Близнецы + Весы'}, {text: 'Близнецы + Скорпион', callback_data: 'Близнецы + Скорпион'}],        
                [{text: 'Близнецы + Стрелец', callback_data: 'Близнецы + Стрелец'}, {text: 'Близнецы + Козерог', callback_data: 'Близнецы + Козерог'}],   
                [{text: 'Близнецы + Водолей', callback_data: 'Близнецы + Водолей'}, {text: 'Близнецы + Рыбы', callback_data: 'Близнецы + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityCancer: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Рак + Овен', callback_data: 'Рак + Овен'}, {text: 'Рак + Тельцы', callback_data: 'Рак + Тельцы'}],       
                [{text: 'Рак + Близнецы', callback_data: 'Рак + Близнецы'}, {text: 'Рак + Рак', callback_data: 'Рак + Рак'}],            
                [{text: 'Рак + Лев', callback_data: 'Рак + Лев'}, {text: 'Рак + Дева', callback_data: 'Рак + Дева'}],    
                [{text: 'Рак + Весы', callback_data: 'Рак + Весы'}, {text: 'Рак + Скорпион', callback_data: 'Рак + Скорпион'}],        
                [{text: 'Рак + Стрелец', callback_data: 'Рак + Стрелец'}, {text: 'Рак + Козерог', callback_data: 'Рак + Козерог'}],   
                [{text: 'Рак + Водолей', callback_data: 'Рак + Водолей'}, {text: 'Рак + Рыбы', callback_data: 'Рак + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityLeon: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Лев + Овен', callback_data: 'Лев + Овен'}, {text: 'Лев + Тельцы', callback_data: 'Лев + Тельцы'}],       
                [{text: 'Лев + Близнецы', callback_data: 'Лев + Близнецы'}, {text: 'Лев + Рак', callback_data: 'Рак + Рак'}],            
                [{text: 'Лев + Лев', callback_data: 'Лев + Лев'}, {text: 'Лев + Дева', callback_data: 'Лев + Дева'}],    
                [{text: 'Лев + Весы', callback_data: 'Лев + Весы'}, {text: 'Лев + Скорпион', callback_data: 'Лев + Скорпион'}],        
                [{text: 'Лев + Стрелец', callback_data: 'Лев + Стрелец'}, {text: 'Лев + Козерог', callback_data: 'Лев + Козерог'}],   
                [{text: 'Лев + Водолей', callback_data: 'Лев + Водолей'}, {text: 'Лев + Рыбы', callback_data: 'Лев + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityVirgo: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Дева + Овен', callback_data: 'Дева + Овен'}, {text: 'Дева + Тельцы', callback_data: 'Дева + Тельцы'}],       
                [{text: 'Дева + Близнецы', callback_data: 'Дева + Близнецы'}, {text: 'Дева + Рак', callback_data: 'Дева + Рак'}],            
                [{text: 'Дева + Лев', callback_data: 'Дева + Лев'}, {text: 'Дева + Дева', callback_data: 'Дева + Дева'}],    
                [{text: 'Дева + Весы', callback_data: 'Дева + Весы'}, {text: 'Дева + Скорпион', callback_data: 'Дева + Скорпион'}],        
                [{text: 'Дева + Стрелец', callback_data: 'Дева + Стрелец'}, {text: 'Дева + Козерог', callback_data: 'Дева + Козерог'}],   
                [{text: 'Дева + Водолей', callback_data: 'Дева + Водолей'}, {text: 'Дева + Рыбы', callback_data: 'Дева + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityLibro: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Весы + Овен', callback_data: 'Весы + Овен'}, {text: 'Весы + Тельцы', callback_data: 'Весы + Тельцы'}],       
                [{text: 'Весы + Близнецы', callback_data: 'Весы + Близнецы'}, {text: 'Весы + Рак', callback_data: 'Весы + Рак'}],            
                [{text: 'Весы + Лев', callback_data: 'Весы + Лев'}, {text: 'Весы + Дева', callback_data: 'Весы + Дева'}],    
                [{text: 'Весы + Весы', callback_data: 'Весы + Весы'}, {text: 'Весы + Скорпион', callback_data: 'Весы + Скорпион'}],        
                [{text: 'Весы + Стрелец', callback_data: 'Весы + Стрелец'}, {text: 'Весы + Козерог', callback_data: 'Весы + Козерог'}],   
                [{text: 'Весы + Водолей', callback_data: 'Весы + Водолей'}, {text: 'Весы + Рыбы', callback_data: 'Весы + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityScorpion: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Скорпион + Овен', callback_data: 'Скорпион + Овен'}, {text: 'Скорпион + Тельцы', callback_data: 'Скорпион + Тельцы'}],       
                [{text: 'Скорпион + Близнецы', callback_data: 'Скорпион + Близнецы'}, {text: 'Скорпион + Рак', callback_data: 'Скорпион + Рак'}],            
                [{text: 'Скорпион + Лев', callback_data: 'Скорпион + Лев'}, {text: 'Скорпион + Дева', callback_data: 'Скорпион + Дева'}],    
                [{text: 'Скорпион + Весы', callback_data: 'Скорпион + Весы'}, {text: 'Скорпион + Скорпион', callback_data: 'Скорпион + Скорпион'}],        
                [{text: 'Скорпион + Стрелец', callback_data: 'Скорпион + Стрелец'}, {text: 'Скорпион + Козерог', callback_data: 'Скорпион + Козерог'}],   
                [{text: 'Скорпион + Водолей', callback_data: 'Скорпион + Водолей'}, {text: 'Скорпион + Рыбы', callback_data: 'Скорпион + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilitySagittarius: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Стрелец + Овен', callback_data: 'Стрелец + Овен'}, {text: 'Стрелец + Тельцы', callback_data: 'Стрелец + Тельцы'}],       
                [{text: 'Стрелец + Близнецы', callback_data: 'Стрелец + Близнецы'}, {text: 'Стрелец + Рак', callback_data: 'Стрелец + Рак'}],            
                [{text: 'Стрелец + Лев', callback_data: 'Стрелец + Лев'}, {text: 'Стрелец + Дева', callback_data: 'Стрелец + Дева'}],    
                [{text: 'Стрелец + Весы', callback_data: 'Стрелец + Весы'}, {text: 'Стрелец + Скорпион', callback_data: 'Стрелец + Скорпион'}],        
                [{text: 'Стрелец + Стрелец', callback_data: 'Стрелец + Стрелец'}, {text: 'Стрелец + Козерог', callback_data: 'Стрелец + Козерог'}],   
                [{text: 'Стрелец + Водолей', callback_data: 'Стрелец + Водолей'}, {text: 'Стрелец + Рыбы', callback_data: 'Стрелец + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },

    horoscopCompatibilityGoat: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Козерог + Овен', callback_data: 'Козерог + Овен'}, {text: 'Козерог + Тельцы', callback_data: 'Козерог + Тельцы'}],       
                [{text: 'Козерог + Близнецы', callback_data: 'Козерог + Близнецы'}, {text: 'Стрелец + Рак', callback_data: 'Козерог + Рак'}],            
                [{text: 'Козерог + Лев', callback_data: 'Козерог + Лев'}, {text: 'Козерог + Дева', callback_data: 'Козерог + Дева'}],    
                [{text: 'Козерог + Весы', callback_data: 'Козерог + Весы'}, {text: 'Козерог + Скорпион', callback_data: 'Козерог + Скорпион'}],        
                [{text: 'Козерог + Стрелец', callback_data: 'Козерог + Стрелец'}, {text: 'Козерог + Козерог', callback_data: 'Козерог + Козерог'}],   
                [{text: 'Козерог + Водолей', callback_data: 'Козерог + Водолей'}, {text: 'Козерог + Рыбы', callback_data: 'Козерог + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },

    horoscopCompatibilityAquarius: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Водолей + Овен', callback_data: 'Водолей + Овен'}, {text: 'Водолей + Тельцы', callback_data: 'Водолей + Тельцы'}],       
                [{text: 'Водолей + Близнецы', callback_data: 'Водолей + Близнецы'}, {text: 'Водолей + Рак', callback_data: 'Водолей + Рак'}],            
                [{text: 'Водолей + Лев', callback_data: 'Водолей + Лев'}, {text: 'Водолей + Дева', callback_data: 'Водолей + Дева'}],    
                [{text: 'Водолей + Весы', callback_data: 'Водолей + Весы'}, {text: 'Водолей + Скорпион', callback_data: 'Водолей + Скорпион'}],        
                [{text: 'Водолей + Стрелец', callback_data: 'Водолей + Стрелец'}, {text: 'Водолей + Козерог', callback_data: 'Водолей + Козерог'}],   
                [{text: 'Водолей + Водолей', callback_data: 'Водолей + Водолей'}, {text: 'Водолей + Рыбы', callback_data: 'Водолей + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    horoscopCompatibilityFishes: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Водолей + Овен', callback_data: 'Водолей + Овен'}, {text: 'Водолей + Тельцы', callback_data: 'Водолей + Тельцы'}],       
                [{text: 'Водолей + Близнецы', callback_data: 'Водолей + Близнецы'}, {text: 'Водолей + Рак', callback_data: 'Водолей + Рак'}],            
                [{text: 'Водолей + Лев', callback_data: 'Водолей + Лев'}, {text: 'Водолей + Дева', callback_data: 'Водолей + Дева'}],    
                [{text: 'Водолей + Весы', callback_data: 'Водолей + Весы'}, {text: 'Водолей + Скорпион', callback_data: 'Водолей + Скорпион'}],        
                [{text: 'Водолей + Стрелец', callback_data: 'Водолей + Стрелец'}, {text: 'Водолей + Козерог', callback_data: 'Водолей + Козерог'}],   
                [{text: 'Водолей + Водолей', callback_data: 'Водолей + Водолей'}, {text: 'Водолей + Рыбы', callback_data: 'Водолей + Рыбы'}],
                [{text: 'Вернуться к списку выбора знаков', callback_data: 'backToMenuHoroscop'}],
            ]
        })
    },
    
};