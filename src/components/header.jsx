import Button from "./button";

export default function Header() {
    return (
        <header className="flex justify-center gap-6 py-4 bg-orange-200 shadow-md header-scallop">
            <Button to="/product">Product</Button>
            <Button to="/about">About</Button>
        </header>
    );
}