export type NoteCard = {
    id: string;
    topic: string;
    note: string;
    date: string;
    label: 'work' | 'personal';
    isFavourite: boolean;
};