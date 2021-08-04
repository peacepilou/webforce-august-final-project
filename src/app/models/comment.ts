export class Comment {
        pseudo: string;
        score: number;
        comment: string;
        category:string;
    
        constructor (pseudo: string, score: number, comment:string, category: string){
            this.pseudo = pseudo;
            this.score = score;
            this.comment = comment;
            this.category = category;
           
        }
}