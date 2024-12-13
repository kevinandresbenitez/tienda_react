const signIn = async (req, res) => { 
    const { gmail, password } = req.body;

    // Verify gmail

    // Search in DB
    const validCredentials = false;

    if(!validCredentials){
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = ''

    // Save cookie
    res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: process.env.COOKIES_EXPIRATION, 
        sameSite: 'Strict', 
    });
    


    return res.status(200).json({ message: 'Signed in successfully' });

    
};

const signUp = async (req, res) => {
    res.send('signUp')
};

const logout = async (req, res) => {
    res.send('logout')
};

export default {signIn,signUp,logout}