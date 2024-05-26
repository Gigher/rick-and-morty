export interface SearchNameProps {
    name: string;
    setName: (name: string) => void;
    placeholder: string;
}

export interface SearchBarProps {
    placeholder: string;
}

export interface CustomFilterProps {
    title: string;
    options: string[];
}

export interface ButtonProps {
    title: string;
}

export interface LocationCardProps {
    url: string;
    title: string;
    type?: string;
    date?: string;
    episode?: string;
}