const mongoose = require('mongoose');
const chat = require('./models/chat.js');

async function db_connect() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
db_connect().then(() => console.log('Connected!')).catch((e) => {
    console.log(e)
});


let allChats = [

    {
        from: 'user1',
        to: 'user37',
        msg: 'Hey, how\'s your day going?',
        created_at: new Date(),
    },
    {
        from: 'user12',
        to: 'user45',
        msg: 'Remember to bring the documents for the meeting.',
        created_at: new Date(),
    },
    {
        from: 'user23',
        to: 'user8',
        msg: 'Thanks for your help yesterday!',
        created_at: new Date(),
    },
    {
        from: 'user4',
        to: 'user19',
        msg: 'Can we reschedule our call to tomorrow?',
        created_at: new Date(),
    },
    {
        from: 'user31',
        to: 'user2',
        msg: 'Did you see the latest project update?',
        created_at: new Date(),
    },
    {
        from: 'user7',
        to: 'user42',
        msg: 'Lunch at the usual spot?',
        created_at: new Date(),
    },
    {
        from: 'user18',
        to: 'user29',
        msg: 'Can you review this code snippet for me?',
        created_at: new Date(),
    },
    {
        from: 'user9',
        to: 'user36',
        msg: 'Don\'t forget about the team building event next week!',
        created_at: new Date(),
    },
    {
        from: 'user25',
        to: 'user11',
        msg: 'I\'ve sent you the updated spreadsheet.',
        created_at: new Date(),
    },
    {
        from: 'user3',
        to: 'user47',
        msg: 'Can we discuss the new feature implementation?',
        created_at: new Date(),
    },
    {
        from: 'user14',
        to: 'user33',
        msg: 'Great presentation earlier!',
        created_at: new Date(),
    },
    {
        from: 'user50',
        to: 'user6',
        msg: 'Are we still on for coffee this afternoon?',
        created_at: new Date(),
    },
    {
        from: 'user22',
        to: 'user41',
        msg: 'Can you send me the client\'s contact information?',
        created_at: new Date(),
    },
    {
        from: 'user38',
        to: 'user17',
        msg: 'I\'ve updated the project timeline.',
        created_at: new Date(),
    },
    {
        from: 'user5',
        to: 'user28',
        msg: 'Don\'t forget to submit your expenses by Friday.',
        created_at: new Date(),
    },
    // ... (continuing with more entries)
    {
        from: 'user49',
        to: 'user20',
        msg: 'Looking forward to our brainstorming session!',
        created_at: new Date(),
    },
    {
        from: 'user16',
        to: 'user39',
        msg: 'Can you help me troubleshoot this issue?',
        created_at: new Date(),
    },
    {
        from: 'user30',
        to: 'user1',
        msg: 'I\'ve shared the meeting notes with you.',
        created_at: new Date(),
    },
    {
        from: 'user44',
        to: 'user13',
        msg: 'Remember to clock out before leaving.',
        created_at: new Date(),
    },
    {
        from: 'user27',
        to: 'user35',
        msg: 'Great job on closing that deal!',
        created_at: new Date(),
    },
    // ... (continuing with more entries to reach 100)
    {
        from: 'user21',
        to: 'user48',
        msg: 'Can we touch base about the marketing strategy?',
        created_at: new Date(),
    },
    {
        from: 'user40',
        to: 'user15',
        msg: 'Don\'t forget to RSVP for the company picnic.',
        created_at: new Date(),
    },
    {
        from: 'user10',
        to: 'user32',
        msg: 'I\'ve updated the user documentation.',
        created_at: new Date(),
    },
    {
        from: 'user46',
        to: 'user24',
        msg: 'Can you approve my time off request?',
        created_at: new Date(),
    },
    {
        from: 'user34',
        to: 'user43',
        msg: 'The new software update is available.',
        created_at: new Date(),
    }

]
for (let i = 0; i < 200; i++) {
    allChats.push({
        from: `user${Math.floor(Math.random() * 50) + 1}`,
        to: `user${Math.floor(Math.random() * 50) + 1}`,
        msg: `This is message number ${i + 1}`,
        created_at: new Date(),
    });
}


chat.insertMany(allChats);




