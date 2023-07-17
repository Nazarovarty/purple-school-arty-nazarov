const greetingLang = prompt('Введите нужный язык');
switch (true) {
    case String(greetingLang) === 'en':
        console.log('Hello!');
        break;
    case String(greetingLang) === 'de':
        console.log('Gutten tug!');
        break;
    case String(greetingLang) === 'ru':
        console.log('Здравствуйте!');
        break;
    default:
        console.log('Язык не поддерживается');
};
