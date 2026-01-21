export default function Footer() {
    return (
        <footer className="py-8 text-center text-slate-500 border-t border-slate-200 dark:border-slate-800 glass glass-dark">
            <div className="container mx-auto px-6">
                <p>© {new Date().getFullYear()} Aslam C A. All rights reserved.</p>
                <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
            </div>
        </footer>
    );
}
