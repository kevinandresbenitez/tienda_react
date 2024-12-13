const signIn = async (req, res) => {
    const { gmail, password } = req.body;

    // Verify gmail

    // Search in DB

    // Generate token
    const token = ''
    
    // Save cookie
    res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: process.env.COOKIES_EXPIRATION, 
        sameSite: 'Strict', 
    });
    
    res.json({ message: 'god' });

    res.send('singIn')
};

const signUp = async (req, res) => {
    res.send('signUp')
};

const logout = async (req, res) => {
    res.send('logout')
};

export default {signIn,signUp,logout}