export class BlockViewModel {
    Row: number;
    Col: number;
    IsOpen : boolean;
    CountMinesAround: number;
}

export class RowOfBlocksViewModel {
    Blocks: BlockViewModel[];
}