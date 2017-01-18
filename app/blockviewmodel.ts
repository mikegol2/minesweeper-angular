export class BlockViewModel {
    Row: number;
    Col: number;
    IsOpen : boolean;
    CountMinesAround: number;
    BlownMine: boolean;
}

export class RowOfBlocksViewModel {
    Blocks: BlockViewModel[];
}