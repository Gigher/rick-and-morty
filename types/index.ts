export interface SearchNameProps {
    name: string;
    setName: (name: string) => void;
}

export interface CustomFilterProps {
    title: string;
    options: string[];
}

export interface ButtonProps {
    title: string;
}