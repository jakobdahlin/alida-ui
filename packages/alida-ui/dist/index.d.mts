import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    delay?: number;
};
declare function Button({ children, className, onClick, delay }: ButtonProps): react_jsx_runtime.JSX.Element;

type CardProps = React$1.HTMLAttributes<HTMLDivElement> & {
    delay?: number;
};
declare function Card({ className, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
type CardContentProps = React$1.HTMLAttributes<HTMLDivElement> & {
    delay?: number;
};
declare function CardContent({ className, children, ...props }: CardContentProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
}
declare function Input({ className, ...props }: InputProps): react_jsx_runtime.JSX.Element;

declare const Navbar: () => react_jsx_runtime.JSX.Element;

declare const Footer: () => react_jsx_runtime.JSX.Element;

type BadgeProps = {
    children: React$1.ReactNode;
    variant?: "default" | "success" | "warning" | "error";
    className?: string;
};
declare function Badge({ children, variant, className }: BadgeProps): react_jsx_runtime.JSX.Element;

type ToggleProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};
declare function Toggle({ checked, onChange }: ToggleProps): react_jsx_runtime.JSX.Element;

type Tab = {
    label: string;
    content: React$1.ReactNode;
};
type TabsProps = {
    tabs: Tab[];
};
declare function Tabs({ tabs }: TabsProps): react_jsx_runtime.JSX.Element;

export { Badge, Button, Card, CardContent, Footer, Input, type InputProps, Navbar, Tabs, Toggle };
