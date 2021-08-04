export class Comment {
        pseudo: string;
        score: number;
        comment: string;
        category: string;
        id: number;
    
        constructor (pseudo: string, score: number, comment: string, category: string, id: number){
            this.pseudo = pseudo;
            this.score = score;
            this.comment = comment;
            this.category = category;
            this.id = id;
           
        }
}