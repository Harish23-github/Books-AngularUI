export interface BookDetail extends CommonBookData {
    publisher: string;
}

export interface CommonBookData {
    id: string;
    authorName: string;
    title: string;
}

export interface CitationDto {
    citationType: number;
    citation: string;
}