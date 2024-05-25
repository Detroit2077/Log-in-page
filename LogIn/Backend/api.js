import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://kundansingh023230:UA72t7CqvrWpze60@cluster0.obsclzk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const collection = mongoose.model('Information', newSchema);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const check = await collection.findOne({ username: username }).exec();

        if (check) {
            res.json('exist');
        } else {
            res.json('notexist');
        }
    } catch (e) {
        console.error(e);
        res.json('notexist');
    }
});

app.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    const data = {
        username: username,
        password: password,
    };

    try {
        const check = await collection.findOne({ username: username });

        if (check) {
            res.json('exist');
        } else {
            await collection.insertMany([data]);
            res.json('notexist');
        }
    } catch (e) {
        console.error(e);
        res.json('notexist');
    }
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
