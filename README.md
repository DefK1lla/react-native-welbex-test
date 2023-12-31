# Тестовое задание web-программист (React.Native)

### Инструкция к запуску

1. `npm install -g expo-cli`
2. В папке с проектом `npm i` или `yarn`
3. В папке с проектом `npm start` или `yarn start`

## Техническое задание

### Описание приложения:

- Экран ТС
  1. Пользователь должен иметь возможность отфильтровать ТС по их категориям, нажатием кнопки “Применить” по категориям:
     - Грузовой
     - Пассажирский
     - Спецтранспорт
  2. Элементы списка должны содержать:
     - Название ТС — формируется: ТС #порядковый номер в базе;
     - Имя водителя;
     - Категория ТС.
  3. Экран должен иметь возможность переключать вид с режима списка на просмотр на карте, где будут отображено местоположение ТС разными значками в соответствии с типом ТС.
- Экран ТС.
  1. Кликая на ТС, пользователь попадает на Экран конкретного ТС. Данный экран должен содержать:
     - Карту с местонахождением водителя;
     - Категория ТС;
     - Имя водителя;
     - Контактный номер водителя;
     - Кнопка “Позвонить”. Открывает приложение с набором номера и уже подставленным номером водителя;
     - Кнопка “Написать”. Открывает приложение whatsapp с чатом водителя и предустановленным сообщением: “Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе”.
- Экран с настройками. Должен содержать только возможность переключение языков с английского на русский и наоборот.

### Требования к коду:

1. Приложение должно быть написано на TypeScript;
2. Должны быть использованы функциональные компоненты и хуки React;
3. Код должен быть чистым и легким для чтения, с надлежащими комментариями и документацией.

### Сдача работы:

1. Код приложения должен быть загружен в репозиторий на GitHub или аналогичной платформе;
2. База должна браться из файла .json, минимум 10 элементов ТС;
3. Включите в README-файл все необходимые инструкции по установке и запуску приложения;
4. Допустимо использование Expo.

### Критерии оценки:

1. Работоспособность согласно ТЗ;
2. Архитектура решения;
3. Удобство чтения кода и комментарии;
4. Удобство проверки.
