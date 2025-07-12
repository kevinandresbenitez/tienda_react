import bcrypt from "bcryptjs";

const rounds = 10;
export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(password, salt);
  };
  
export const comparePassword = async (password: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(password, hashed);
};