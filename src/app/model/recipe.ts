export interface Ingredient {
    ingredient: string;
    measure: number;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {

    constructor(
        public title: string,
        public description: string,
        public feeds_this_many: number,
        public preparation_time: number,
        public instructions: Instruction[],
        public ingredients: Ingredient[],
        public cover_photo: string
    ) {}

    public static createBlank(): Recipe {
        return new Recipe('', '', 1, 1, null, null, null);
    }
}
