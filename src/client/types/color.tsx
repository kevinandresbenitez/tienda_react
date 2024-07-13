
/**
 * Data type that stores a color in red, green, and blue values 
 */
class RGBColor {

    /**
     * 
     * @param r red
     * @param g gren
     * @param b blue
     */
    constructor(public r: number,public g: number,public b: number) {
      this.validate();
    }
    
  
    /**
     * return Error if values not in between 0 and 255
     */
    private validate() {
      if (this.r < 0 || this.r > 255 ||
          this.g < 0 || this.g > 255 ||
          this.b < 0 || this.b > 255) {
        throw new Error("Color values must be between 0 and 255.");
      }
    }
  
    /**
     * 
     * @returns hexadecimal value
     */
    toHex(): string {
      const toHex = (n: number) => n.toString(16).padStart(2, '0');
      return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
    }
    
     /**
     * 
     * @returns rgba(red,gren,blue)
     */
    toString(): string {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
export default RGBColor