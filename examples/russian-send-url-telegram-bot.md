# Как сохранять в телеграм

### Инструкция

Для начала установите расширение, создайте доску и перейдите в настройки доски

![step1](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-1.png)

Затем перейдите в телеграм и создайте своего бота через встроенного официального бота по имени [BotFather](https://t.me/BotFather) и получите специальный токен для управления ботом в моем случае это ```1933441686:AAGcU7fYq5-CTnmjT75mg_V7_xQ1f681enY```

![step2](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-2.png)

Следующий шаг это узнать ```id``` вашего профиля в телеграм это можно сделать через бота [IDBot](https://t.me/myidbot) к моему профилю оказывается прикреплен следующий id ```1813232702```

![step3](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-3.png)

Затем вы должны отправить сообщение своему боту чтобы он смог писать вам иначе боты телеграм не могут писать первые пользователям телеграм.

![step4](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-4.png)

Следующий шаг это добавить ссылку с вашими данными в расширение.

![step5](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-5.png)

Моя ссылка выглядит следующим образом: ```https://api.telegram.org/bot1933441686:AAGcU7fYq5-CTnmjT75mg_V7_xQ1f681enY/sendMessage?chat_id=1813232702&text=copycan``` где ```1933441686:AAGcU7fYq5-CTnmjT75mg_V7_xQ1f681enY``` — это токен для управления ботом и ```1813232702``` — идентификатор чата или канала которому будут поступать сообщения от раширения, в моем случае это мой пользовательский профиль, а ```copycan``` — это переменная которая будет заменена на текст сообщения.

![step6](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-6.png)

Проверим что у нас получилось

![step7](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-7.png)

Отлично! Мы сохранили контакты docker, теперь мы точно ничего не потеряем!

![step8](https://github.com/prohetamine/Copycan/blob/main/media/send-url-telegram-bot-8.png)

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamines)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.
