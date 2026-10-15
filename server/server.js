const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' })); // Allow requests from Vercel frontend

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    phoneOrEmail: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

app.post('/api/auth/login', async (req, res) => {
    try {
        const { identifier } = req.body;
        let user = await User.findOne({ phoneOrEmail: identifier });
        if (!user) {
            user = new User({ phoneOrEmail: identifier });
            await user.save();
        }
        res.status(200).json({ success: true, message: 'Verified successfully', user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));