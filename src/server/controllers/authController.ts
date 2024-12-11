const signIn = async (req, res) => {
    res.send('singIn')
};

const signUp = async (req, res) => {
    res.send('signUp')
};

const logout = async (req, res) => {
    res.send('logout')
};

export default {signIn,signUp,logout}