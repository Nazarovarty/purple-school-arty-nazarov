const greetingLang = prompt('Введите нужный язык');
switch (greetingLang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'de':
        console.log('Gutten tug!');
        break;
    case 'ru':
        console.log('Здравствуйте!');
        break;
    default:
        console.log('Язык не поддерживается');
};
