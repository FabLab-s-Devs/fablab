const Layout = ({ children }) => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-dotted-pattern bg-primary/5 bg-cover bg-fixed bg-center">
            {children}
        </div>
    );
};

export default Layout;
