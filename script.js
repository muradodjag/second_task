class Message {
    name;
    time;
    text;
    constructor(name, text, time = this.gettime()) {
        this.name = name;
        this.time = time;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.name}: ${this.text}`
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

}

class Messenger {
    messages = [];

    show_history() {
        this.messages.forEach(msg => console.log(msg.toString()));
    }

    send(author, text) {
        this.messages.push(new Message(author, text))
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()