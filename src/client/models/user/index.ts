

export class User{
    id:number
    name:string
    gmail:string

    constructor(id:number,name:string,gmail:string){
        this.id = id;
        this.name = name;
        this.gmail = gmail;
    }


    static getUserInfo():Promise<User | null>{

        return new Promise(async (resolve,reject)=>{

            try{

                const response = await fetch('/api/profile-info', {
                    method: 'GET',
                    credentials: 'include', 
                });
    
                if(!response.ok) {
                    reject(null);
                }
                
                const userData = await response.json();
                resolve(new User(userData.id, userData.name, userData.gmail))
    
            }catch(error){
                reject(null);
            }
        })






    }

    
}
