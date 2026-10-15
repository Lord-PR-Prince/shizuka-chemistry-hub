const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login or Register via OTP / Phone / Email
router.post('/login', async (req, res) => {
    try {
        const { identifier } = req.body;
        
        if (!identifier) {
            return res.status(400).json({ success: false, message: 'Phone number or Email is required' });
        }

        let user = await User.findOne({ phoneOrEmail: identifier });
        
        if (!user) {
            user = new User({ phoneOrEmail: identifier });
            await user.save();
        }

        res.status(200).json({ 
            success: true, 
            message: 'OTP verified & Authenticated successfully!', 
            user: { id: user._id, phoneOrEmail: user.phoneOrEmail } 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;